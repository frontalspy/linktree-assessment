export const capitalise = (content: string) => {
  return content.charAt(0).toUpperCase() + content.slice(1);
};

export const removeSymbols = (content: string) => {
  return content.replace(/[-_&]/g, " ");
};
