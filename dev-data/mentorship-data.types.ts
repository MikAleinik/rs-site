import { COURSE_TITLES } from './courseTitles.data.ts';
import { ROUTES } from '@/app/const';
import { Stage } from '@/widgets/study-path/ui/stage-card';

type MentorActions = Pick<Stage, 'id' | 'title' | 'description' | 'links'>;

type CourseNameKey = keyof typeof COURSE_TITLES;
export type CourseName = typeof COURSE_TITLES[CourseNameKey];

type RoutesKey = keyof typeof ROUTES;
export type RouteName = typeof ROUTES[RoutesKey];

export interface MentorshipCourse {
  id: number;
  courseName: CourseName;
  lang: 'en' | 'ru';
  pageUrl: RouteName;
  description: string[];
  mentorActivities: MentorActions[];
  mentorDocsUrl: string;
  courseDocsUrl: string;
  benefits: string[];
}
