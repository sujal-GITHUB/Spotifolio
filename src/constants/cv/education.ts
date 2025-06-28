import type { Playlist, Song } from '../../interfaces/types';

import { getAlbumPath, getEducationPath } from '../../utils/getPublicPath';


export enum EducationTypesEnum {
  SCHOOL= 'SCHOOL',
  COURSE = 'COURSE',
  UNIVERSITY = 'UNIVERSITY',
}

const NIT_JALANDHAR = {
  name: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar',
  artist: 'Bachelor of Technology - Information Technology',
  length: '2022 - 2026',
  types: [EducationTypesEnum.UNIVERSITY],
  description:
    'Pursuing a Bachelor of Technology with a major in Information Technology. Core subjects include Operating Systems, Data Structures & Algorithms, Machine Learning, Computer Networks, and Database Management Systems. This program is focused on building a strong foundation in software engineering, systems, and data-centric technologies.',
  link: 'https://www.nitj.ac.in/',
  imageUrl: getEducationPath('nitj/logo.png'),
  skills: [],
  images:[
    getEducationPath('nitj/1.png'),
    getEducationPath('nitj/2.png'),
    getEducationPath('nitj/3.png'),
    getEducationPath('nitj/4.png'),
    getEducationPath('nitj/5.png'),
    getEducationPath('nitj/6.png'),
    getEducationPath('nitj/7.png'),
    getEducationPath('nitj/8.png'),
  ]
} as Song;

const BHARTIYA_VIDYA_MANDIR = {
  name: 'Bhartiya Vidya Mandir Sr. Sec. School, Ludhiana, Punjab',
  artist: 'Senior Secondary Education',
  length: '2007 - 2020',
  types: [EducationTypesEnum.SCHOOL],
  description:
    'Completed primary to senior secondary education with a focus on science and mathematics. Achieved 95.6% in Class 10 and 92.2% in Class 12. Built a strong academic foundation through consistent performance and active participation in academic activities.',
  link: 'https://bvmusn.com/bvmschool/',
  imageUrl: getEducationPath('bvm/logo.png'),
  skills: [],
  images:[
    getEducationPath('bvm/1.png'),
    getEducationPath('bvm/2.png'),
    getEducationPath('bvm/3.png'),
    getEducationPath('bvm/4.png'),
    getEducationPath('bvm/5.png'),
    getEducationPath('bvm/6.png'),
  ]
} as Song;

export const Education = {
  name: 'EDUCATION',
  description: 'Description 3',
  songs: [
    NIT_JALANDHAR,
    BHARTIYA_VIDYA_MANDIR,
  ],
  color: '#709D4E',
  getImage(lang) {
    return getAlbumPath('education.png');
  },
  filters: [EducationTypesEnum.UNIVERSITY, EducationTypesEnum.COURSE, EducationTypesEnum.SCHOOL],
} as Playlist;
