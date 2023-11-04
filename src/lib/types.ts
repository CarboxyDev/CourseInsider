export interface Course {
  id: string;
  name: string;
  code: string;
  stream: string;
  description: string;
  credits: number;
  prereqs: string[];
  professor: string;
  duration: number /* In weeks */;
  timing: string;
  semester: string;
  seats: number;
  openSeats: number;
  rating: number;
  ratingCount: number;
}
