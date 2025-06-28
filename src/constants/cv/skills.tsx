import { Avatar } from 'antd';

// Utils
import { getAlbumPath } from '../../utils/getPublicPath';

// Constants
import { tags } from '../tags';
import { PersonalProjects } from './personalProjects';

// Interfaces
import type { Playlist, Song } from '../../interfaces/types';

export enum SkillsTypesEnum {
  CURRENT = 'CURRENT',
}

const CURRENT = [
  tags.Cpp,
  tags.React,   
  tags.TypeScript,
  tags.AWS,
  tags.Docker,
  tags.PyTorch,        
  tags.Express,         
  tags.Redux,  
  tags.Pandas,
  tags.NumPy,
  tags.Hadoop,      
  tags.Git,  
  tags.JavaScript,
  tags.TensorFlow,
  tags.ScikitLearn,
  tags.Python, 
  tags.Linux,
  tags.Tailwindcss,
  tags['Node.js'],
  tags.Vite,
  tags.JWT,         
  tags.Mysql,         
  tags.Mongo,
  tags.EJS,
  tags.FastAPI,
  tags.Streamlit,
  tags.GenAI,
  tags.Prisma,
  tags.WebSocket,
  tags.HTML,
  tags.CSS,
  tags.Razorpay,
  tags.Stripe,
  tags.PostgreSQL,      
  tags.Postman,         
  tags.GitHub,
  tags.Bootstrap,     
] 

const AVAILABLE_SKILLS = {
  CURRENT,
};

const mapTag = (
  tag: (typeof AVAILABLE_SKILLS)[keyof typeof AVAILABLE_SKILLS][number],
  type: string
) => {
  const key = tag.text.toUpperCase().replaceAll(' ', '_');
  return {
    types: [type],
    skills: [],
    link: tag.link,
    name: tag.text,
    color: tag.color,
    imageUrl: tag.image,
    length: `${key}_YEARS`,
    explanation: `${key}_HELP`,
    description: `${key}_EXPERIENCE`,
    relatedSongs: PersonalProjects.songs.filter((song) =>
      song.skills.some((s) => s.text === tag.text)
    ),

    avatar: (
      <Avatar
        shape="square"
        size={'large'}
        className="avatar-tag"
        style={{ backgroundColor: tag.color, fontSize: '1.5rem', marginRight: 15 }}
        icon={tag.icon}
      />
    ),
  } as Song;
};

export const SKILLS_SONGS = Object.entries(AVAILABLE_SKILLS)
  .map(([type, tags]) => {
    return tags.map((tag) => mapTag(tag, type));
  })
  .flat();

export const Skills = {
  name: 'SKILLS',
  color: '#A5BBAF',
  songs: SKILLS_SONGS,
  defaultFilter: SkillsTypesEnum.CURRENT,
  description: 'Description 5',
  filters: [
    SkillsTypesEnum.CURRENT,
  ],
  getImage(lang) {
    return getAlbumPath('skills.png');
  },
} as Playlist;
