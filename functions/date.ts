function getOrdinal(n: number) {
  let selector;

  if (n <= 0) {
    selector = 4;
  } else if ((n > 3 && n < 21) || n % 10 > 3) {
    selector = 0;
  } else {
    selector = n % 10;
  }

  return n + ["th", "st", "nd", "rd", ""][selector];
}

export function getFormattedDate(dateString: string) {
  const dateStringArray = new Date(dateString).toDateString().split(" ");
  dateStringArray.shift();
  return `${getOrdinal(Number(dateStringArray[1]))} ${dateStringArray[0]} ${
    dateStringArray[2]
  }`;
}
