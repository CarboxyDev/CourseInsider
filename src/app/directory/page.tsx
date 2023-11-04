import { PageWrapper } from '@/components/PageWrapper';
import { CourseCard } from './components/CourseCard';

const DirectoryPage = () => {
  const courses = [
    {
      name: 'Computer Networks',
      description:
        'This course offers students a comprehensive exploration of modern computer networks. Students will gain an in-depth understanding of network architectures, protocols, security, wireless technologies, network management, and virtualization. The course equips students with the knowledge and skills required to proficiently design, configure, secure, and troubleshoot complex network environments.',
      code: 'CSE232',
      rating: 4.5,
      seats: 20,
      link: '/',
    },
    {
      name: 'Computer Networks',
      description:
        'This course offers students a comprehensive exploration of modern computer networks. Students will gain an in-depth understanding of network architectures, protocols, security, wireless technologies, network management, and virtualization. The course equips students with the knowledge and skills required to proficiently design, configure, secure, and troubleshoot complex network environments.',
      code: 'CSE232',
      rating: 4.5,
      seats: 20,
      link: '/',
    },
    {
      name: 'Computer Networks',
      description:
        'This course offers students a comprehensive exploration of modern computer networks. Students will gain an in-depth understanding of network architectures, protocols, security, wireless technologies, network management, and virtualization. The course equips students with the knowledge and skills required to proficiently design, configure, secure, and troubleshoot complex network environments.',
      code: 'CSE232',
      rating: 4.5,
      seats: 20,
      link: '/',
    },
  ];
  return (
    <PageWrapper>
      <div className="mt-14">
        <h1 className="text-3xl font-semibold text-zinc-600 mr-6">
          Course Directory
        </h1>
        <div className="divide-y-[1px] divide-zinc-200">
          {courses.map((course, i) => (
            <div key={i} className="mt-9">
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default DirectoryPage;
