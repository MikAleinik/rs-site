import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './mentoring-register.scss';

interface MentoringRegisterProps {
  lang?: 'ru' | 'en';
}

const textContent = {
  en: {
    header: 'Registration by mentor',
    steps: [
      'Go to the mentor registration page',
      'Choose the course in which you will supervise students',
      'Answer questions about the number of students and their location',
      'Before starting the course, check your email and confirm your registration',
    ],
    note: '',
  },
  ru: {
    header: 'Регистрация ментором',
    steps: [
      'Перейти на страницу регистрации менторов',
      'Выбрать курс на котором вы будете курировать студентов',
      'Ответить на вопросы о количестве студентов и их локации',
      'Перед началом курса проверить почту и подтвердить регистрацию',
    ],
    note: '',
  },
};

export const MentoringRegister = ({ lang = 'en' }: MentoringRegisterProps) => {
  return (
    <section className="mentoring-register container">
      <div className="mentoring-register content info-wrapper">
        <WidgetTitle size="small" mods="asterisk">{textContent[lang].header}</WidgetTitle>
        <div className="will-learn">
          <List data={textContent[lang].steps} />
        </div>
      </div>
    </section>
  );
};
