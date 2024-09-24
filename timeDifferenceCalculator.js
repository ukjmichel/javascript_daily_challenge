/*Challenge : Calculatrice de Dates Personnalisée*/

/*
    Crée une fonction JavaScript qui accepte deux dates en entrée (format "YYYY-MM-DD") et renvoie :

        Le nombre total de jours entre ces deux dates.
        Le nombre de mois et jours séparés entre ces deux dates.
        La différence en années, mois, et jours si les dates sont très éloignées.
        
*/

const date1 = '2023-01-01';
const date2 = '2024-09-24';

const timeDifferenceCalculator = (date1, date2) => {
  let startDate;
  let endDate;
  if (date1 === date2) {
    console.log('No time left');
    return;
  } else if (date1 < date2) {
    startDate = new Date(date1);
    endDate = new Date(date2);
  } else {
    startDate = new Date(date2);
    endDate = new Date(date1);
  }

  const yearLeft = endDate.getFullYear() - startDate.getFullYear();
  const monthLeft = calcMonthLeft(startDate, endDate);
  const daysLeft = calcDaysLeft(startDate, endDate);

  return { yearLeft, monthLeft, daysLeft };
};

const calcDaysLeft = (startDate, endDate) => {
  const startDateMillis = startDate.getTime();
  const endDateMillis = endDate.getTime();
  const differenceMillis = endDateMillis - startDateMillis;
  const days = differenceMillis / (1000 * 60 * 60 * 24);
  return Math.floor(days);
};

const calcMonthLeft = (startDate, endDate) => {
  const monthsDifference =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const daysInFinalMonth = Math.ceil(
    (endDate - new Date(endDate.getFullYear(), endDate.getMonth(), 1)) /
      (1000 * 60 * 60 * 24)
  );
  const monthsLeft = monthsDifference - (daysInFinalMonth > 0 ? 1 : 0);
  return monthsLeft;
};

const { yearLeft, monthLeft, daysLeft } = timeDifferenceCalculator(
  date1,
  date2
);

console.log(`Number of year left: ${yearLeft}`);
console.log(`Number of month left: ${monthLeft}`);
console.log(`Number of days left: ${daysLeft}`);
