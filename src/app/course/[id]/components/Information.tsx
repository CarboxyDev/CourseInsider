import { Badge } from '@/components/Badge';
import { StarRating } from '@/components/StarRating';
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
          {course.openSeats > 5 && (
            <Badge
              text="Seats left"
              size={'lg'}
              color={'success'}
              emphasizeText={true}
            />
          )}
        </div>
        <div className="flex items-center gap-x-2 text-sm text-zinc-600 font-medium">
          {course.rating}
          <StarRating
            rating={course.rating}
            readonly={true}
            activeFillColor="#facc15"
            inactiveFillColor="#a1a1aa"
            className="w-6 h-6"
          />
        </div>
      </div>
      <div className="mt-18">
        <div>
          <h2 className="text-zinc-700 font-semibold">Description</h2>
          <p className="mt-2 text-base leading-6 font-light text-zinc-600">
            {course.description}
          </p>
        </div>
        <div className="mt-12">
          <CoreInformation course={course} />
        </div>
      </div>
    </>
  );
};

const CoreInformation = (props: CourseInformationProps) => {
  const course = props.course;

  return (
    <div className="flex flex-row text-zinc-700">
      <div className="mr-auto">
        <div>
          <h3 className="font-medium inline">Prerequisites: </h3>
          <span className="text-zinc-600 font-light">
            {course.prereqs.map((prerequisite, index) => {
              return (
                prerequisite + (index != course.prereqs.length - 1 ? ', ' : '')
              );
            })}
          </span>
        </div>

        <div className="mt-3">
          <h3 className="font-medium inline">Professor: </h3>
          <span className="text-zinc-600 font-light">{course.professor}</span>
        </div>

        <div className="mt-3">
          <h3 className="font-medium inline">Credits: </h3>
          <span className="text-zinc-600 font-light">{course.credits}</span>
        </div>
      </div>

      <div className="ml-auto">
        <div>
          <h3 className="font-medium inline">Timing: </h3>
          <span className="text-zinc-600 font-light">{course.timing}</span>
        </div>

        <div className="mt-3">
          <h3 className="font-medium inline">Semester: </h3>
          <span className="text-zinc-600 font-light">{course.semester}</span>
        </div>

        <div className="mt-3">
          <h3 className="font-medium inline">Duration: </h3>
          <span className="text-zinc-600 font-light">
            {course.duration} weeks
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
