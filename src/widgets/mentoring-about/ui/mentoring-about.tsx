import { WidgetTitle } from '@/shared/ui/widget-title';

import './mentoring-about.scss';

type MentoringAboutProps = {
  benefits: string[];
  lang?: 'en' | 'ru';
};

const COUNT_SYMBOLS = 60;
const textContent = {
  en: { header: 'Mentoring is for you if you' },
  ru: { header: 'Быть наставником для вас если вы' },
};

export const MentoringAbout = ({ benefits, lang = 'en' }: MentoringAboutProps) => {
  return (
    <section className="mentoring-about container">
      <div className="mentoring-about content">
        <WidgetTitle size="small">{textContent[lang].header}</WidgetTitle>
        <div className="benefits">
          {benefits.map((info, index) => {
            let className = 'benefit' + ((info.length > COUNT_SYMBOLS) ? ' benefit-long' : ' benefit-short');

            return (
              <div key={index} className={className}>
                {info}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
