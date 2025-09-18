import type { Playlist } from '../../interfaces/types';

import { Skills } from './skills';
import { Education } from './education';
import { PersonalProjects } from './personalProjects';
import { ProfessionalExperience } from './experience';
import { Blogs } from './blogs';

export const playlists: Playlist[] = [
  ProfessionalExperience,
  PersonalProjects,
  Education,
  Skills,
  Blogs
];
