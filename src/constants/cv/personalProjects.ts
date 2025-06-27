import {
  getAlbumPath,
  getProjectPath,
} from '../../utils/getPublicPath';

import { tags } from '../tags';
import type { Playlist, Song } from '../../interfaces/types';

export enum ProjectTypesEnum {
  WEB = 'WEB',
  ML = 'MACHINE_LEARNING',
  DEVOPS = 'DEVOPS',
  WEB3 = 'WEB3',
}

export const Munchmate = {
  name: 'munchmate',
  artist: 'Sujal Kumar',
  length: '2023',
  types: [ProjectTypesEnum.WEB],
  description:
    'Munchmate is a smart food ordering and recommendation web application that connects users with local restaurants while using AI to personalize meal suggestions based on taste preferences and order history. The platform features Stripe-powered secure payments, JWT-based authentication, and a responsive UI.',
  imageUrl: getProjectPath('munchmate.png'),
  skills: [
    tags.React,
    tags['Node.js'],
    tags.Mongo,
    tags.Tailwindcss,
    tags.Stripe,
    tags.JWT,
  ],
  images: [
    getProjectPath('munchmate/1.png'),
    getProjectPath('munchmate/2.png'),
    getProjectPath('munchmate/3.png'),
  ],
  github: 'https://github.com/sujal-GITHUB/munchmate',
  link: 'https://munchmate.onrender.com/',
} as Song;

export const IntelliRival = {
  name: 'IntelliRival',
  artist: 'Sujal Kumar',
  length: '2024',
  types: [ProjectTypesEnum.WEB],
  description:
    'An AI-simulated competitive intelligence web tool that identifies and visualizes connections between Virgin Media and Infosys competitors using simulated data scraping and analysis. Features include confidence scoring, source links, and a dynamic D3.js network graph.',
  imageUrl: getProjectPath('intellirival.png'),
  skills: [
    tags['Node.js'],
    tags.Express,
    tags.JavaScript,
    tags.Bootstrap,
    tags.D3js,
    tags.EJS,
  ],
  images: [
    getProjectPath('intellirival/1.png'),
    getProjectPath('intellirival/2.png'),
    getProjectPath('intellirival/3.png'),
    getProjectPath('intellirival/4.png'),
  ],
  github: 'https://github.com/sujal-GITHUB/IntelliRival',
} as Song;

export const Routeify = {
  name: 'Routeify',
  artist: 'Sujal Kumar',
  length: '2024',
  types: [ProjectTypesEnum.WEB],
  description: 'Routeify is a full-stack real-time ride-hailing web application that allows users to book rides, track drivers, and make secure payments. The platform includes real-time location updates, fare calculation, and live driver-rider communication using WebSockets. It features separate portals for riders and drivers, JWT-based authentication, Razorpay-powered payments, and a responsive UI built with React and Tailwind CSS.',
  imageUrl: getProjectPath('routeify.png'),
  github: 'https://github.com/sujal-GITHUB/IntelliRival/routeify',
  skills: [
    tags.React,
    tags['Node.js'],
    tags.Mongo,
    tags.Tailwindcss,
    tags.SocketIO,
    tags.Redux,
    tags.Razorpay,
  ],
  images: [
    getProjectPath('routeify/1.png'),
    getProjectPath('routeify/2.png'),
    getProjectPath('routeify/3.png'),
    getProjectPath('routeify/4.png'),
    getProjectPath('routeify/5.png'),
  ],
} as Song;

export const SereneStay = {
  name: 'SereneStay',
  artist: 'Sujal Kumar',
  length: '2025',
  types: [ProjectTypesEnum.WEB, ProjectTypesEnum.ML],
  description:
    'SereneStay is an AI-powered hotel booking solution that enhances the traditional experience with personalized recommendations, real-time price negotiation, and large-scale data processing. The platform leverages Apache Mahout for intelligent hotel suggestions and Hadoop for efficient data analysis.',
  imageUrl: getProjectPath('serenestay.png'),
  skills: [
    tags.React,
    tags['Node.js'],
    tags.Mongo,
    tags.Express,
    tags.Tailwindcss,
    tags.Redux,
    tags.JWT,
    tags.Stripe,
    tags.Hadoop,
    tags.ApacheMahout,
  ],
  images: [
    getProjectPath('serenestay/1.png'),
    getProjectPath('serenestay/2.png'),
    getProjectPath('serenestay/3.png'),
    getProjectPath('serenestay/4.png'),
    getProjectPath('serenestay/5.png'),
    getProjectPath('serenestay/6.png'),
    getProjectPath('serenestay/7.png'),
    getProjectPath('serenestay/8.png'),
  ],
  github: 'https://github.com/sujal-GITHUB/SereneStay',
} as Song;

export const ZingGuru = {
  name: 'Zing Guru',
  artist: 'HackTU 6.0 Team (Sujal Kumar & team)',
  length: '2025',
  types: [ProjectTypesEnum.WEB, ProjectTypesEnum.WEB3],
  description:
    'Zing Guru is a gamified learning ecosystem that combines adaptive AI tutoring, Web3-based NFT rewards, and inclusive design to make education accessible and engaging. Built during HackTU 6.0, it leverages blockchain, GenAI, and accessibility-first UI for a transformative learning experience.',
  imageUrl: getProjectPath('zingguru.png'),
  link: 'https://sage-zingguru.vercel.app/',
  skills: [
    tags.React,
    tags['Node.js'],
    tags.Mongo,
    tags.Express,
    tags.Tailwindcss,
    tags.FastAPI,
    tags.TensorFlow,
    tags['Ethereum'],
    tags['Polygon'],
    tags['Streamlit'],
    tags['GraphQL'],
    tags['GenAI'],
  ],
  images: [
    getProjectPath('zingguru/1.png'),
    getProjectPath('zingguru/2.png'),
    getProjectPath('zingguru/3.png'),
    getProjectPath('zingguru/4.png'),
    getProjectPath('zingguru/5.png'),
    getProjectPath('zingguru/6.png'),
  ],
  github: 'https://github.com/ekas-7/Zing-Guru',
} as Song;

export const Parallelia = {
  name: 'Parallelia',
  artist: 'Sujal Kumar',
  length: '2024',
  types: [ProjectTypesEnum.WEB],
  description:
    'Parallelia is a multiplayer 3D metaverse game inspired by Gather Town, enabling users to navigate and interact within customizable virtual spaces. It features real-time movement, avatar customization, space and element management, collision detection, and admin tools for creating maps, elements, and avatars.',
  imageUrl: getProjectPath('parallelia.png'),
  skills: [
    tags.React,
    tags['Node.js'],
    tags.PostgreSQL,
    tags.Prisma,
    tags.Express,
    tags.WebSocket,
    tags.Tailwindcss,
    tags.JWT,
  ],
  images: [
    getProjectPath('parallelia/1.png'),
  ],
  github: 'https://github.com/sujal-GITHUB/Parallelia',
} as Song;

export const PriceSeer = {
  name: 'PriceSeer',
  artist: 'Sujal Kumar',
  length: '2024',
  types: [ProjectTypesEnum.ML, ProjectTypesEnum.DEVOPS],
  description:
    'PriceSeer is a full MLOps project that automates the entire machine learning lifecycle for house price prediction. It includes data ingestion, preprocessing, model training and tuning, deployment with REST API, and continuous monitoring for model performance and data drift.',
  imageUrl: getProjectPath('priceseer.png'),
  skills: [
    tags.Python,
    tags.ScikitLearn,
    tags.TensorFlow,
    tags.Docker,
    tags.Kubernetes,
    tags.FastAPI,
    tags.Prometheus,
    tags.Grafana,
    tags.PostgreSQL,
  ],
  github: 'https://github.com/your-username/Priceseer',
} as Song;

export const PersonalProjects = {
  name: 'PROJECTS',
  color: '#2e3f43',
  songs: [
    Munchmate,
    Routeify,
    IntelliRival,
    SereneStay,
    ZingGuru,
    Parallelia,
    PriceSeer,
  ],
  filters: [ProjectTypesEnum.WEB, ProjectTypesEnum.ML, ProjectTypesEnum.DEVOPS, ProjectTypesEnum.WEB3],
  getImage(lang) {
    return getAlbumPath('projects.png');
  },
} as Playlist;
