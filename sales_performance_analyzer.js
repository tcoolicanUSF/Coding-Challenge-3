//Create a Function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    if (salesFigures.length === 0) {
      return 0;
    }
    const sum = salesFigures.reduce((acc, current) => acc + current, 0);
    const average = sum / salesFigures.length;
    return average;
  }
  const salesFigures = [100, 200, 300, 400, 500];
const averageSales = calculateAverageSales(salesFigures);
console.log(averageSales);

