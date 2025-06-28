const getPath = (path: string) => {
  const base = process.env.PUBLIC_URL?.replace(/\/$/, '') ?? '';
  return `${base}${path}`;
};

export const getSongPath = (song: string) => getPath(`/songs/${song}`);

export const getAlbumPath = (album: string) =>
  getPath(`images/albums/${album}`);

export const getSocialNetworkPath = (socialNetwork: string) =>
  getPath(`images/social/${socialNetwork}`);

export const getProjectPath = (project: string) => getPath(`images/projects/${project}`);

export const getExperiencePath = (experience: string) => getPath(`images/experience/${experience}`);

export const getEducationPath = (education: string) => getPath(`images/education/${education}`);

