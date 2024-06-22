// todo it not widget
import { Link } from 'react-router-dom';
import { LogoWrapper } from '@/shared/ui/logo-wrapper';
import { SchoolMenu } from '@/widgets/school-menu';

import './mobile-view.scss';

interface MobileViewProps {
  type: 'header' | 'footer';
}

const Divider = ({ type }: MobileViewProps) => (
  <div className={`divider ${type === 'header' ? 'dark' : 'light'}`} />
);

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';

  return (
    <div className="mobile-view" data-testid="mobile-view">
      <Link to="/">
        <LogoWrapper type={type} />
      </Link>

      <Link to="/community/#about" className={`main-link ${color}`}>
        About Community
      </Link>

      <Divider type={type} />

      <SchoolMenu heading="rs school" color={color} />

      <Divider type={type} />

      <SchoolMenu heading="all courses" color={color} />

      <Divider type={type} />

      <Link to="/community/#community" className={`main-link mt ${color}`}>
        Community
      </Link>

      <Divider type={type} />

      <Link to="/community/#events" className={`main-link ${color}`}>
        Events
      </Link>

      <Divider type={type} />

      <Link to="/community/#merch" className={`main-link ${color}`}>
        Merch
      </Link>

      <Divider type={type} />
    </div>
  );
};
