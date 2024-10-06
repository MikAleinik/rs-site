import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import type { Stage } from '@/widgets/study-path/ui/stage-card';
import { Stages } from '@/widgets/study-path/ui/stages';

import './mentoring-path.scss';

interface MentoringPathProps {
  stages: Stage[] | null;
  marked?: boolean;
  lang?: 'ru' | 'en';
}

const textContent = {
  en: {
    header: 'Mentor activities',
    info: 'The main tasks of a mentor for the duration of the course, but if you are willing to give students more - the list is not limited to anything',
  },
  ru: {
    header: 'Задачи ментора',
    info: 'Основные задачи ментора на период курса, но если вы готовы дать студентам больше - список не ограничен ни чем',
  },
};

export const MentoringPath = ({ stages, marked, lang = 'en' }: MentoringPathProps) => {
  return (
    <section className="mentoring-path container" id="learning-path">
      <div className="mentoring-path content upd">
        <WidgetTitle size="small" mods="asterisk">{textContent[lang].header}</WidgetTitle>
        <Paragraph>{textContent[lang].info}</Paragraph>
        <Stages stages={stages} marked={marked} />
      </div>
    </section>
  );
};
