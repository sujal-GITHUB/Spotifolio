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
  PAST_FREQUENTLY = 'PAST_FREQUENTLY',
  PAST_OCCASIONALLY = 'PAST_OCCASIONALLY',
}

const CURRENT = [
  tags.React,   
  tags.TypeScript,
  tags.AWS,
  tags.Docker,        
  tags.Express,         
  tags.Redux,        
  tags.Git,             
  tags['CI/CD'], 
  tags.Linux,
  tags.Tailwindcss,
  tags['Node.js'],
  tags.Vite,
  tags.JWT,  
] 

const PAST_FREQUENTLY = [     
  tags.Firebase,         
  tags.Mysql,         
  tags.Mongo,
  tags.Redis,
  tags.PostgreSQL,      
  tags.Postman,         
  tags.GitHub,
  tags.Bootstrap,        
];

const AVAILABLE_SKILLS = {
  CURRENT,
  PAST_FREQUENTLY,
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
  color: '#4f596e',
  songs: SKILLS_SONGS,
  defaultFilter: SkillsTypesEnum.CURRENT,
  description: 'Description 5',
  filters: [
    SkillsTypesEnum.CURRENT,
    SkillsTypesEnum.PAST_FREQUENTLY,
    SkillsTypesEnum.PAST_OCCASIONALLY,
  ],
  getImage(lang) {
    return getAlbumPath('skills.png');
  },
} as Playlist;
