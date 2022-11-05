export const transformData = results => {
  return results.map(({ id, title }) => ({
    id,
    title,
  }));
};
