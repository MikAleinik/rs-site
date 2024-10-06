import { useLoaderData } from 'react-router-dom';
import { MentorshipCourse } from '../../../dev-data/mentorship-data.types.ts';
import { PAGE_NAMES } from '@/shared/constants.ts';
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroPage } from '@/widgets/hero-page';
import { MentoringAbout } from '@/widgets/mentoring-about';
import { MentoringPath } from '@/widgets/mentoring-path';
import { MentoringRegister } from '@/widgets/mentoring-register';
import { Mentors } from '@/widgets/mentors';
import { MentorsWanted } from '@/widgets/mentors-wanted';

export const Mentorship = () => {
  const pageProps = useLoaderData() as MentorshipCourse;

  useTitle(`Mentoring ${pageProps.courseName} · The Rolling Scopes School`);

  return (
    <>
      <HeroPage pageName={PAGE_NAMES.MENTORSHIP} />
      <Breadcrumbs />
      <MentoringAbout benefits={pageProps.benefits} lang={pageProps.lang} />
      <MentorsWanted
        detailsUrl={pageProps.mentorDocsUrl}
        courseName={pageProps.courseName}
        lang={pageProps.lang}
      />
      <MentoringPath stages={pageProps.mentorActivities} lang={pageProps.lang} />
      <MentoringRegister lang={pageProps.lang} />
      <Mentors lang={pageProps.lang} />
    </>
  );
};
