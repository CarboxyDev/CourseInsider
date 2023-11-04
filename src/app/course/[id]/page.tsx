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

  return <div>{course.name}</div>;
}
