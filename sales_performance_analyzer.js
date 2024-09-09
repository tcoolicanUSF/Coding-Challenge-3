//Create a Function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    if (salesFigures.length === 0) {
      return 0;
    }
    const sum = salesFigures.reduce((acc, sale) => acc + sale, 0);
    const average = sum / salesFigures.length;
    return average;
  }
  const salesFigures = [100, 200, 300, 400, 500];
const averageSales = calculateAverageSales(salesFigures);
console.log(averageSales);

//Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSale) {
    if (averageSale > 10000)
    {return "Excellent";}
    else if (averageSale >= 7000 && averageSale <= 10000) 
    {return "Good";}
    else if (averageSale >= 4000 && averageSale < 7000) 
    {return "Satisfactory";}
    else
    {return "Needs Improvement";}
  }
  const averageSale = 12000;
const performanceRating = determinePerformanceRating(averageSale);
console.log(performanceRating);

//Create a Function to Identify Top and Bottom Performers

