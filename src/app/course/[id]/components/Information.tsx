import { Badge } from '@/components/Badge';
import { Course } from '@/lib/types';

interface CourseInformationProps {
  course: Course;
}

const CourseInformation = (props: CourseInformationProps) => {
  const course = props.course;

  return (
    <>
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
      <div className=""></div>
    </>
  );
};

export default CourseInformation;
