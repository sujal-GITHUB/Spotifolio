import { getAlbumPath } from '../../utils/getPublicPath';
import { tags } from '../tags';

import type { Playlist, Song } from '../../interfaces/types';

export enum JobTypesEnum {
  JOB = 'JOB',
}

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

const GURUKUL = {
  name: 'GURUKUL_JOB_NAME',
  length: 'June 2024 - July 2024',
  artist: 'Gurukul Foundation',
  types: [JobTypesEnum.JOB],
  imageUrl: publicURL('/images/experience/gurukul.png'),
  experience: `Web Developer - Front End Specialist (Remote)
- Full-Stack Development: Engineered a responsive web application using React.js and Node.js that achieved 300+ daily active users and 95% mobile responsiveness score while implementing WCAG.
- Performance Optimization: Initiated code splitting and lazy loading techniques to reduce initial load time by 40%, improving user retention metrics and search engine rankings.`,
  skills: [
    tags.React,
    tags['Node.js'],
    tags.Tailwindcss,
    tags.JavaScript,
    tags.HTML,
    tags.CSS,
  ],
  relatedSongs: [],
} as Song;

const GRAPPLTECH = {
  name: 'GRAPPLTECH_JOB_NAME',
  length: 'May 2024 - June 2024',
  artist: 'GrapplTech',
  types: [JobTypesEnum.JOB],
  link: 'https://grappltech.in/',
  imageUrl: publicURL('/images/experience/grappltech.jpeg'),
  experience: `Software Development Engineer Intern (Remote)
- Front-End Development: Developed and implemented responsive Hero section using React.js and Tailwind CSS, improving site engagement metrics by 25% and reducing bounce rate by 15%.
- Technical Optimization: Leveraged performance analysis tools to identify and fix rendering bottlenecks, resulting in 30% faster page load times and improved Core Web Vitals metrics.`,
  skills: [
    tags.React,
    tags.Tailwindcss,
    tags.HTML,
    tags.CSS,
    tags.JavaScript,
  ],
  relatedSongs: [],
} as Song;

export const ProfessionalExperience = {
  name: 'EXPERIENCE',
  color: '#47607E',
  filters: [JobTypesEnum.JOB],
  songs: [GRAPPLTECH, GURUKUL],
  getImage(lang) {
    return getAlbumPath('experience.png');
  },
} as Playlist;
