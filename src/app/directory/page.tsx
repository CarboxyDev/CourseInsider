'use client';

import { LoadingSpinner } from '@/components/Loading';
import { PageWrapper } from '@/components/PageWrapper';
import { College, Course } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search } from './components/Search';

interface ApiResponse {
  courses: Course[];
  college: College;
}

const DirectoryPage = () => {
  const { data, error, status } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const { data } = await axios.get(`/api/course/?q=fetch-courses`);

      return JSON.parse(data) as ApiResponse;
    },
  });

  console.log(data);

  return (
    <PageWrapper>
      <div className="mt-14">
        <div className="flex flex-row">
          <h1 className="text-3xl font-semibold text-zinc-600 mr-6">
            {!data && 'Courses'}
            {data && 'Courses in ' + data.college.name}
          </h1>
          <div className="ml-auto">
            {data?.college.name == 'Public View' && (
              <button className="rounded-md bg-primary-500 px-3 py-2 text-sm text-white shadow-sm transition delay-200 duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-purple-500/90 active:scale-95">
                JOIN COLLEGE
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mt-14"></div>
      {status != 'success' && <Search courses={[]} resultsDisabled={true} />}
      {status == 'pending' && (
        <div className="flex justify-center">
          <LoadingSpinner size={64} />
        </div>
      )}
      {status == 'error' && (
        <div className="flex justify-center">
          <div className="text-zinc-500 text-xl font-medium">
            Unable to fetch any courses at the moment
          </div>
        </div>
      )}
      {status == 'success' && (
        <div>
          <Search courses={data.courses} />
        </div>
      )}
    </PageWrapper>
  );
};

export default DirectoryPage;
