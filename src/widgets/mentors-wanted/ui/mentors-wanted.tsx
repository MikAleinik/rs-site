import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { CourseName } from '../../../../dev-data/mentorship-data.types.ts';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-wanted.module.scss';

const cx = classNamesBind.bind(styles);

type MentorsWantedProps = {
  detailsUrl: string;
  courseName: CourseName;
  lang?: 'en' | 'ru';
};

const textContent = {
  en: {
    header: 'Course Curriculum',
    textInfo: 'If you are interested in mentoring our students, please go through the',
    textLink: 'Mentoring Documentation',
    textAfterLink: 'for the',
    textEnd: 'Course.',
  },
  ru: {
    header: 'Учебная программа курса',
    textInfo: 'Если вы хотите стать ментором, пожалуйста, ознакомьтесь с ',
    textLink: 'Документацией школы',
    textAfterLink: 'для',
    textEnd: 'курса.',
  },
};

// TODO Change component name (and inner entity) to 'CourseDocs'
export const MentorsWanted = ({ detailsUrl, courseName, lang = 'en' }: MentorsWantedProps) => {
  return (
    <section className={cx('mentors-wanted', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <WidgetTitle id="mentors-wanted" mods="lines">
            {textContent[lang].header}
          </WidgetTitle>
          <Paragraph>
            {textContent[lang].textInfo}
            {' '}
            <LinkCustom
              href={detailsUrl}
              external
            >
              {textContent[lang].textLink}
            </LinkCustom>
            {' '}
            {textContent[lang].textAfterLink}
            {' '}
            {courseName}
            {' '}
            {textContent[lang].textEnd}
          </Paragraph>
        </div>
        <div className={cx('picture')}>
          <Image src={mentorImg} alt="Sloth - mascot dresses as a detective" />
        </div>
      </article>
    </section>
  );
};
