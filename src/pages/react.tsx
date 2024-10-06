import { ROUTES } from '@/app/const';
import { About } from '@/widgets/about';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Requirements } from '@/widgets/requirements';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { reactEn } from 'data';

const COURSE_NAME = 'react';

export const React = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <Requirements link={ROUTES.REACT} />
      <Trainers trainers={reactEn} />
    </>
  );
};
