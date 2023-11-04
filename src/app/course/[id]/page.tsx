import CourseInformation from '@/app/course/[id]/components/Information';
import NavTabs from '@/app/course/[id]/components/NavTabs';
import { PageWrapper } from '@/components/PageWrapper';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Comment } from './components/Comment';

interface PageParams {
  id: string;
}

interface PageProps {
  params: PageParams;
}

export default async function page(props: PageProps) {
  const id = props.params.id;

  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
  });

  if (!course) {
    return notFound();
  }

  const sanitizeCourse = {
    ...course,
  };

  return (
    <PageWrapper>
      <div className="mt-14">
        <CourseInformation course={sanitizeCourse} />
      </div>
      <div className="mt-25">
        <NavTabs course={sanitizeCourse} />
      </div>
      <Comment />
    </PageWrapper>
  );
}
