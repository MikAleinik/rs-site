import { RouteName } from '../../../dev-data/mentorship-data.types.ts';
import { mentorshipCourses } from 'data';

export const mentorshipCoursesLoader = async (pageUrl: RouteName) => {
  return mentorshipCourses.find((item) => item.pageUrl === pageUrl) || null;
};
