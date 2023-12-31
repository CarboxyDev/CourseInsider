export interface Course {
  id: string;
  name: string;
  code: string;
  stream: string;
  description: string;
  credits: number;
  prereqs: {
    id: string;
    name: string;
  }[];
  professor: string;
  duration: number /* In weeks */;
  timing: string;
  semester: string;
  seats: number;
  openSeats: number;
  rating: number;
  ratingCount: number;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  courseId: string;
  userId: string;
  authorName: string;
  authorAvatar?: string;
  reviewedOn: Date;
}

export interface College {
  id: string;
  name: string;
}
