import { useTitle } from '@/shared/hooks/useTitle/useTitle';
import {
  About,
  HomeHero,
  Numbers,
  Pictures,
  School,
  Courses,
  Alumni,
  Events,
  Speakers,
  Merch,
  Community,
  Contribute,
  Support
} from '@/features/home';
import { Principles } from '@/features/Principles';
import { Places } from '@/shared/components';

export const Home = () => {
  useTitle('Home · The Rolling Scopes School');

  return (
    <>
      <HomeHero />
      <About />
      <Numbers />
      <Places />
      <Pictures />
      <School />
      <Principles />
      <Courses />
      <Alumni />
      <Events />
      <Speakers />
      <Merch />
      <Community />
      <Contribute />
      <Support />
    </>
  );
};
