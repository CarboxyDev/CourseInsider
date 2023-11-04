'use client';
import Reviews from '@/app/course/[id]/components/Reviews';
import { Course } from '@/lib/types';
import * as Tabs from '@radix-ui/react-tabs';
import { GradingTable } from './GradingTable';
import { WeeklyPlanTable } from './WeeklyPlanTable';

interface TabOptionProps {
  value: string;
  label: string;
}
const TabOption = (props: TabOptionProps) => {
  const { value, label } = props;
  return (
    <Tabs.Trigger
      value={value}
      className="font-medium text-lg px-8 py-[10px] text-zinc-500 rounded-md  data-[state=active]:bg-primary-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
    >
      {label}
    </Tabs.Trigger>
  );
};

interface NavTabsProps {
  course: Course;
}
const NavTabs = (props: NavTabsProps) => {
  const { course } = props;

  return (
    <Tabs.Root defaultValue="reviews">
      <Tabs.List className="bg-zinc-100 px-2 py-2 border border-zinc-200 rounded-md mb-18 flex flex-row gap-x-8">
        <TabOption value="reviews" label="Reviews" />
        <TabOption value="grading" label="Grading" />
        <TabOption value="course-content" label="Course content" />
        <TabOption value="weekly-plan" label="Weekly plan" />
      </Tabs.List>
      <Tabs.Content value="reviews">
        <Reviews courseId={course.id} />
      </Tabs.Content>
      <Tabs.Content value="grading">
        <GradingTable courseId={course.id} />
      </Tabs.Content>
      <Tabs.Content value="course-content">
        insert course content here
      </Tabs.Content>
      <Tabs.Content value="weekly-plan">
        <WeeklyPlanTable
          gradingComponents={[
            {
              week: 1,
              topics: ['Introduction to the course', 'Grading Components'],
            },
            {
              week: 2,
              topics: ['Introduction to the course', 'Grading Components'],
            },
            {
              week: 3,
              topics: ['Introduction to the course', 'Grading Components'],
            },
            {
              week: 4,
              topics: ['Introduction to the course', 'Grading Components'],
            },
          ]}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default NavTabs;
