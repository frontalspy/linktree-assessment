// Use some date library here

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-au", {
    day: "2-digit",
    year: "numeric",
    month: "short",
  });
};
