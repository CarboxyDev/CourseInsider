export interface Course {
  id: string;
  name: string;
  code: string;
  stream: string;
  description: string;
  credits: number;
  prerequisites: string[];
  professor: string;
  duration: number /* in weeks */;
  timing: string;
  semester: string;
  totalSeats: number;
  availableSeats: number;
  rating: number;
  ratedByCount: number;
}
