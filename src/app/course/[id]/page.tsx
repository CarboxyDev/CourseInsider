import { Badge } from '@/components/Badge';
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
        <div className="flex flex-row">
          <div className="mr-auto flex flex-row items-center">
            <h1 className="text-3xl font-semibold text-zinc-600 mr-6">
              {course.name}
            </h1>
            <Badge
              text={course.code}
              size={'lg'}
              color={'neutral'}
              emphasizeText={true}
            />
            <div className="w-2"></div>
            {course.availableSeats > 5 && (
              <Badge
                text="Seats left"
                size={'lg'}
                color={'success'}
                emphasizeText={true}
              />
            )}
          </div>
          <div className="ml-auto"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
