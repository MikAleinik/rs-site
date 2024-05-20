import { TextWithLink, Title } from '@/app/components';

import './faq.scss';

const data = [
  {
    question: 'Где можно задать вопрос?',
    answer: [
      {
        id: 0,
        text: 'Вопросы можно задать в Discord ',
        title: 'чате',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
  {
    question: 'Где происходит общение?',
    answer: [
      {
        id: 1,
        text: 'В Discord ',
        title: 'чате',
        link: 'https://discord.gg/2Ww3TCBvz4',
      },
    ],
  },
  {
    question: 'Имеет ли значения город проживания? Можно ли пройти курс полностью онлайн?',
    answer: 'Город проживания значения не имеет. Все этапы обучения можно пройти онлайн.',
  },
  {
    question: 'Можно ли изучать учебные модули и делать проекты заранее?  ',
    answer:
      'Конечно! После прохождения всех модулей подготовительного этапа вы можете начать прохождение stage#1. ',
  },
  {
    question:
      'Нужна ли регистрация на основной курс если я зарегистрирован на подготовительный этап?',
    answer: [
      {
        id: 2,
        text: 'Да, нужна. Ссылка на регистрацию ',
        title: 'тут',
        link: 'https://rs.school/courses/javascript-ru',
      },
    ],
  },
  {
    question: 'Можно ли пропускать вебинары?',
    answer:
      'Да, можно. Записи вебинаров можно будет найти на нашем канале - YouTube. Видео удобнее смотреть на скорости 1.25 или выше.',
  },
  {
    question: 'Обязательно ли смотреть вебинары школы?',
    answer:
      'Нет. Ссылки на рекомендуемую для изучения теорию находится в модулях. После самостоятельного изучения материалов модуля вы можете посмотреть вебинар, чтобы закрепить информацию или задать вопросы тренеру.',
  },
  {
    question: 'Кто проверяет задания?',
    answer:
      'Проекты "CV", "Portfolio", "CodeJam", "JS 30" проверяются в ходе Cross-check. Алгоритмические таски и задачи из codewars проверяются автоматически. Ваши решения необходимо сабмитнуть в RS APP до дедлайна. Таски "CV#1. Markdown & Git", "CV#2. HTML, CSS & Git Basics" проверяются автоматически.',
  },
];

export const Faq = () => {
  return (
    <section className="faq container">
      <div className="content info-wrapper">
        <Title text={'FAQ'} hasAsterisk />
        <ol className="list">
          {data.map(({ question, answer }, index) => (
            <li key={question}>
              <span className="question marked">
                {index + 1}. {question}
              </span>
              {typeof answer === 'string' ? <span>{answer}</span> : <TextWithLink data={answer} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
