import {
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaXTwitter
} from 'react-icons/fa6';
import type { SocialNetwork } from '../interfaces/types';
import { getSocialNetworkPath } from '../utils/getPublicPath';

export const SOCIAL_NETWORKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sujal-kumar-38544b229/',
    imageUrl: getSocialNetworkPath('linkedin.jpg'),
    icon: <FaLinkedin />,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/sujal-GITHUB',
    imageUrl: getSocialNetworkPath('github.png'),
    icon: <FaGithub />,
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/2fy1hltdw5jz8u2vw37xw6z6n',
    imageUrl: getSocialNetworkPath('spotify.png'),
    icon: <FaSpotify />,
  },
  {
    name: 'X',
    link: 'https://x.com/sujal_here',
    imageUrl: getSocialNetworkPath('x.png'),
    icon: <FaXTwitter />,
  }
] as SocialNetwork[];

export const ALL_SOCIAL_NETWORKS = [
  ...SOCIAL_NETWORKS,
];
