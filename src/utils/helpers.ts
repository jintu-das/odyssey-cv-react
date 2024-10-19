type ListItem = string | null;

export function commaSeparatedList(list: ListItem[]) {
  list = list.filter((item) => item !== "" && item !== null);
  return list.join(", ");
}
