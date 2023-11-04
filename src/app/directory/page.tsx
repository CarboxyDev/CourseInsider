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
            Course Directory
          </h1>
          <h3 className="ml-auto text-lg text-zinc-700">
            {data && 'Courses in ' + data.college.name}
          </h3>
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
