import CourseInformation from '@/app/course/[id]/components/Information';
import NavTabs from '@/app/course/[id]/components/NavTabs';
import { PageWrapper } from '@/components/PageWrapper';
import { mockCourses } from '@/lib/mockup';
import { notFound } from 'next/navigation';

interface PageParams {
  id: string;
}

interface PageProps {
  params: PageParams;
}

export default function page(props: PageProps) {
  //const id = props.params.id;
  const id = 'computer-networks-cs451-12f5l';
  const course = mockCourses.find((course) => course.id === id);

  if (!course) {
    return notFound();
  }

  return (
    <PageWrapper>
      <div className="mt-14">
        <CourseInformation course={course} />
      </div>
      <div className="mt-25">
        <NavTabs />
      </div>
    </PageWrapper>
  );
}
