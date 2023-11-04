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

interface MockReview {
  id: string;
  author: string;
  image?: string;
  rating: number;
  comment: string;
  reviewedOn: Date;
}

export const MockReviews: MockReview[] = [
  {
    id: '1',
    author: 'John Doe',
    rating: 4.5,
    comment:
      "Computer Networks was an eye-opening experience. Dr. Vijay Kumar's teaching style made complex topics digestible. The course's hands-on labs and real-world applications enriched our understanding. Networking protocols, security, and troubleshooting were covered comprehensively. I highly recommend it to anyone interested in networking technologies",
    reviewedOn: new Date('2023-10-15'),
  },
  {
    id: '2',
    author: 'Alice Smith',
    rating: 3.3,
    comment: "It's an okay course, but could use some improvements.",
    reviewedOn: new Date('2023-10-17'),
  },
  {
    id: '3',
    author: 'Bob Johnson',
    rating: 5.0,
    comment: 'Outstanding course, exceeded my expectations!',
    reviewedOn: new Date('2023-10-19'),
  },
  {
    id: '4',
    author: 'Emily Wilson',
    rating: 2.5,
    comment:
      'I had high hopes for Computer Networks, but unfortunately, it fell short of my expectations. The material was often presented in a confusing manner, and the assignments felt disconnected from the lectures. I expected a deeper dive into advanced topics. The course quality needs improvement for a more satisfying experience.',
    reviewedOn: new Date('2023-10-22'),
  },
];
