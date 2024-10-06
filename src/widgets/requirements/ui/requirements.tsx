import { RouteName } from '../../../../dev-data/mentorship-data.types.ts';
import { ROUTES } from '@/app/const';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './requirements.scss';

const textContent = {
  en: {
    button: 'Read more',
    header: 'Who is a mentor?',
    headerRequirements: 'Requirements for mentors',
    headerResponsibilities: 'Mentor responsibilities',
    requirements: [
      "Desire to help students. If you've been working with JS/TS in production for more than 6 months, then that's great",
      'Desire to mentor 2 to 6 students online or in person',
      'Ability to spend 3 to 5 hours per week',
    ],
    tasks: [
      'Conducting an interview',
      'Code review tasks',
      "Answers to students' questions",
    ],
  },
  ru: {
    button: 'Подробнее',
    header: 'Who is a mentor?',
    headerRequirements: 'Требования к ментору',
    headerResponsibilities: 'Обязанности ментора',
    requirements: [
      'Желание помогать студентам. Если вы используете с JS/TS в работе более 6 месяцев, то это замечательно',
      'Желание стать наставником от 2 до 6 студентов онлайн или лично',
      'Возможность уделять от 3 до 5 часов в неделю',
    ],
    tasks: [
      'Проведение интервью',
      'Задачи по ревью кода',
      'Ответы на вопросы студентов',
    ],
  },
};

type RequirementsProps = {
  requirements?: string[];
  tasks?: string[];
  link?: RouteName;
  lang?: 'en' | 'ru';
};

// TODO Change name component (and inner entity) to MentoringRequirements
export const Requirements = ({ requirements, tasks, link = '/', lang = 'en' }: RequirementsProps) => {
  return (
    <section id="mentors-requirement" className="requirements container">
      <div className="requirements content">
        <WidgetTitle mods="lines">
          {textContent[lang].header}
        </WidgetTitle>
        <div className="requirements-info">
          <div className="requirements-list">
            <div className="title">{textContent[lang].headerRequirements}</div>
            <List
              data={Array.isArray(requirements) ? requirements : textContent[lang].requirements}
            />
          </div>
          <div className="responsibilities">
            <div className="title">{textContent[lang].headerResponsibilities}</div>
            <List
              data={Array.isArray(tasks) ? tasks : textContent[lang].tasks}
            />
          </div>
        </div>
        <LinkCustom
          href={`/${ROUTES.COURSES}/${link}/${ROUTES.MENTORSHIP}`}
          variant="primary"
          external={false}
        >
          {textContent[lang].button}
        </LinkCustom>
      </div>
    </section>
  );
};
