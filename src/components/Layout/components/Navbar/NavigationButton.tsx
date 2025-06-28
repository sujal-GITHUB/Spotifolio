import type { FC } from 'react';
import { Tooltip } from '../../../Tooltip';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  icon: React.ReactElement;
}
const NavigationButton: FC<NavigationButtonProps> = ({ onClick, text, icon }) => {
  return (
    <Tooltip placement='bottom' title={text}>
      <button className='navigation-button' onClick={onClick}>
        {icon}
      </button>
    </Tooltip>
  );
};

const NavigationButtonHome: FC<NavigationButtonProps> = ({ onClick, text, icon }) => {
  return (
    <Tooltip placement='bottom' title={text}>
      <button className='navigation-button-home' onClick={onClick}>
        {icon}
      </button>
    </Tooltip>
  );
};

export { NavigationButton, NavigationButtonHome };
