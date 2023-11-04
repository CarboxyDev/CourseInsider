'use client';

import IconifyIcon from '@/components/IconifyIcon';
import { Course } from '@/lib/types';
import { Combobox } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CourseCard } from './CourseCard';

interface SearchProps {
  courses: Course[];
  resultsDisabled?: boolean;
}

export const Search = (props: SearchProps) => {
  const { courses, resultsDisabled } = props;

  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const filteredOptions = query
    ? courses.filter(
        (course) =>
          course.name.toLowerCase().includes(query.toLowerCase()) ||
          course.code.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div>
      <Combobox
        as="div"
        onChange={() => router.push('/')}
        className=" h-fit w-180 rounded-lg border border-zinc-300 bg-zinc-100"
      >
        <div className="flex items-center px-4">
          <IconifyIcon
            icon="tabler:search"
            className="mr-2 h-5 w-5 text-zinc-500"
          />
          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-full bg-zinc-100 text-zinc-600 outline-none placeholder:text-zinc-500 text-base font-medium"
            placeholder="Search for courses"
          />
        </div>
      </Combobox>
      <div className="mt-14"></div>
      <div className="divide-y-[1px] divide-zinc-200">
        {query.length > 0 &&
          filteredOptions &&
          !resultsDisabled &&
          filteredOptions.map((option, i) => {
            const course = courses.find((course) => course.id === option.id);
            if (!course) {
              return <></>;
            }
            return (
              <div className="mt-9" key={i}>
                <CourseCard key={i} course={course} />
              </div>
            );
          })}
      </div>
      {query.length === 0 && courses.length === 0 && !resultsDisabled && (
        <div className="text-2xl font-semibold text-center text-zinc-700">
          No courses available {':('}
        </div>
      )}
      <div className="divide-y-[1px] divide-zinc-200">
        {query.length === 0 &&
          !resultsDisabled &&
          courses.map((course, i) => {
            return (
              <div className="mt-9" key={i}>
                <CourseCard key={i} course={course} />
              </div>
            );
          })}
      </div>
      {query && filteredOptions.length === 0 && !resultsDisabled && (
        <p className="py-6 text-center text-zinc-600">No results found</p>
      )}
    </div>
  );
};
