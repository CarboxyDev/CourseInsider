import { Course } from '@/lib/types';

export const mockCourses: Course[] = [
  {
    id: 'computer-networks-cs451-12f5l',
    name: 'Computer Networks',
    code: 'CSE232',
    stream: 'CSE',
    description:
      'This course offers students a comprehensive exploration of modern computer networks. Students will gain an in-depth understanding of network architectures, protocols, security, wireless technologies, network management, and virtualization. The course equips students with the knowledge and skills required to proficiently design, configure, secure, and troubleshoot complex network environments.',
    credits: 4,
    prerequisites: ['IP', 'DSA'],
    professor: 'Dr. Vijay Kumar',
    durationInWeeks: 15,
    timing: '10:00 - 11:30 AM (Mon, Fri)',
    semester: 'Winter',
    totalSeats: 340,
    availableSeats: 70,
    rating: 4.5,
    ratedByCount: 15,
  },
];
