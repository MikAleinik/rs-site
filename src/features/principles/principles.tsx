import { cards } from './constants';
import { PrincipleCard, Title, TitleType } from '@/app/components';

import './principles.scss';

export const Principles = () => (
  <div className="principles container">
    <div className="principles content">
      <Title
        text="RS School Principles are an ability to complete our mission"
        type={TitleType.Big}
        hasAsterisk={false}
        hasLines={true}
      />
      <div className="cards column-3 ">
        {cards.map(({ title, description, icon }) => (
          <PrincipleCard key={title} description={description} icon={icon} title={title} />
        ))}
      </div>
    </div>
  </div>
);
