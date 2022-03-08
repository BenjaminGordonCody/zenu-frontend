export const dateConversion = (date) => {
  const numbers = date.split("-");
  const newDate = new Date(numbers[0], numbers[2], numbers[1]);
  return (newDate);
}
  // YYYY-MM-DD => YYYY-DD-MM
