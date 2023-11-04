export interface Course {
  id: string;
  name: string;
  code: string;
  stream: string;
  description: string;
  credits: number;
  prerequisites: string[];
  professor: string;
  durationInWeeks: number;
  timing: string;
  semester: string;
  totalSeats: number;
  availableSeats: number;
  rating: number;
  ratedByCount: number;
}
