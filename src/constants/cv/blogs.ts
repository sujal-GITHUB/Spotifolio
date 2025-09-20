import type { Playlist, Song } from '../../interfaces/types';
import { getAlbumPath, getBlogPath } from '../../utils/getPublicPath';

export enum BlogTypesEnum {
  INTERVIEW_PREP = 'Interview Prep',
  CAREER_ADVICE = 'Career Advice',
  DSA = 'DSA',
  PROBLEM_SOLVING = 'Problem Solving',
  PROGRAMMING = 'Programming',
  OOP = 'OOP',
  SYSTEM_DESIGN = 'System Design',
}

const MINI_STACKOVERFLOW_SYSTEM = {
  name: 'Building a Mini StackOverflow Clone in C++ with OOP',
  artist: 'Sujal Kumar',
  length: '2025',
  types: [BlogTypesEnum.PROGRAMMING, BlogTypesEnum.OOP, BlogTypesEnum.SYSTEM_DESIGN],
  description: `This article walks through building a simplified StackOverflow-like platform in C++ using object-oriented programming principles. 
It covers creating classes for User, Question, Answer, and a Singleton System to manage them, demonstrating OOP concepts like encapsulation, class relationships, and design patterns.`,
  link: 'https://medium.com/@sujal21102004/building-a-mini-stackoverflow-clone-in-c-with-oop-64bb9571d688',
  imageUrl: getBlogPath('2.jpeg'),
  skills: [],
} as Song;

const COMPILER_BLOG = {
  name: 'The Compiler’s Secret Life: A Wild Ride Through Lexing, Parsing, and Other Dark Arts',
  artist: 'Sujal Kumar',
  length: '2025',
  types: [BlogTypesEnum.PROGRAMMING, BlogTypesEnum.SYSTEM_DESIGN],
  description: `Compilers are more than just translators of code—they’re sophisticated systems performing magical feats behind the scenes. From lexing and parsing to optimization and code generation, each stage feels like a dark art shaping how high-level ideas transform into machine instructions. This journey unveils the hidden life of compilers and their indispensable role in modern computing.`,
  link: 'https://medium.com/@sujal21102004/the-compilers-secret-life-a-wild-ride-through-lexing-parsing-and-other-dark-arts-8214f6f7eb18',
  imageUrl: getBlogPath('3.jpeg'),
  skills: [],
} as Song;

const Q_AND_A_SYSTEM = {
  name: 'Why Interviews Are More About Luck Than Skill',
  artist: 'Sujal Kumar',
  length: '2025',
  types: [BlogTypesEnum.CAREER_ADVICE, BlogTypesEnum.INTERVIEW_PREP],
  description: `Technical interviews often feel unpredictable. Despite months of preparation, the questions you get, the interviewer's mood, your mental state, timing, and competition can all influence the outcome. 
Luck plays a significant role, alongside skill, in determining success. Preparing well maximizes your chances when luck strikes.`,
  link: 'https://medium.com/@sujal21102004/why-interviews-are-more-about-luck-than-skill-ebc95cb0b0db?postPublishedType=initial',
  imageUrl: getBlogPath('1.jpeg'),
  skills: [],
} as Song;

const UBER_INTERVIEW_EXPERIENCE = {
  name: 'My Uber On-Campus Interview Experience',
  artist: 'Sujal Kumar',
  length: '2025',
  types: [BlogTypesEnum.INTERVIEW_PREP, BlogTypesEnum.CAREER_ADVICE],
  description: `I share my Uber on-campus interview journey, which had two rounds: DSA and LLD. Each round had two interviewers. 
The process began with introductions, followed by discussions about my projects and some behavioral questions like handling challenges during development. 
Later, I was given coding and design questions that tested problem-solving and system design thinking. This blog captures the complete experience and key takeaways.`,
  link: 'https://medium.com/@sujal21102004/my-uber-on-campus-interview-experience-8688ccde0938',
  imageUrl: getBlogPath('4.jpeg'),
  skills: [],
} as Song;


export const Blogs = {
  name: 'Blogs',
  description: 'Insights and advice for career growth and tech interviews.',
  songs: [Q_AND_A_SYSTEM, MINI_STACKOVERFLOW_SYSTEM, COMPILER_BLOG, UBER_INTERVIEW_EXPERIENCE],
  color: '#709D4E',
  getImage(lang) {
    return getAlbumPath('blogs.png');
  },
} as Playlist;
