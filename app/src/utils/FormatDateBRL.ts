export const FormatDateBRL = (dateString: string) => {
  return Intl.DateTimeFormat("pt-br", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(dateString));
};
