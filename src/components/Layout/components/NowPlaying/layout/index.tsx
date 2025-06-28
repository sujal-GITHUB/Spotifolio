import type { FC } from 'react';

import { CloseIcon } from '../../../../Icons';

// Redux
import { libraryActions } from '../../../../../store/slices/library';
import { useAppDispatch } from '../../../../../store/store';

interface NowPlayingLayoutProps {
  children: any;
  title?: string;
}

const CloseButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="playing-section-close-button"
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        zIndex: 10,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
      }}
      onClick={() => {
        dispatch(libraryActions.removeSongPlaying());
      }}
      aria-label="Close"
    >
      <CloseIcon />
    </button>
  );
};

export const NowPlayingLayout: FC<NowPlayingLayoutProps> = (props) => {
  return (
    <div className="playing-section" style={{ position: 'relative' }}>
      <CloseButton />
      {props.title ? <p className="playing-section-title">{props.title}</p> : null}
      {props.children}
    </div>
  );
};
