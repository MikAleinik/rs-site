import { FC } from 'react';
import { ROUTES } from '@/app/const';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { Requirements } from '@/widgets/requirements';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { nodejs } from 'data';

const COURSE_NAME = 'node.js';

export const Nodejs: FC = () => {
  return (
    <>
      <CourseMain courseName="Node.js" />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Required courseName="nodejs" />
      <Requirements link={ROUTES.NODE_JS} />
      <Trainers trainers={nodejs} />
    </>
  );
};
