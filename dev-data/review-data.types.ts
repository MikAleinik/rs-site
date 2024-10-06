import { COURSE_TITLES } from './courseTitles.data.ts';

type keyCourseName = keyof typeof COURSE_TITLES;
type CourseName = typeof COURSE_TITLES[keyCourseName];

type ReviewerRole = 'Student' | 'Mentor';

export interface CourseReview {
  id: number;
  name: string;
  role: ReviewerRole;
  course: CourseName;
  date: string;
  review: string;
}
