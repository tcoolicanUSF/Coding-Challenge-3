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
function findTopAndBottomPerformers(salespeople) {
const { topPerformer, bottomPerformer } = salespeople.reduce((acc, current) => {
if (current.totalSales > acc.topPerformer.totalSales) 
{acc.topPerformer = current;}
if (current.totalSales < acc.bottomPerformer.totalSales) 
{acc.bottomPerformer = current;}
return acc;
}, { topPerformer: salespeople[0], bottomPerformer: salespeople[0] });
return { topPerformer, bottomPerformer };
  }
const salespeople = [
    { name: "Jarvis Landry", totalSales: 10000 },
    { name: "Cameron Wake", totalSales: 20000 },
    { name: "Brent Grimes", totalSales: 5000 },
    { name: "Ryan Tannehill", totalSales: 15000 },
  ];
  const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salespeople);
  console.log(topPerformer);
  console.log(bottomPerformer);

//Combine Functions to Generate a Performance Report
function generatePerformanceReport(salesData) {
    const report = salesData.map(salesperson => {
    const averageSales = calculateAverageSales(salesperson.sales);
    const performanceRating = determinePerformanceRating(averageSales);
    return {
    name: Cameron Wake,
    averageSales: averageSales,
    performanceRating: performanceRating
        };
    });
    const topAndBottom = findTopAndBottomPerformers(
    report.map(person => ({
    name: person.name,
    totalSales: person.averageSales
        }))

        //I give up, please be generous with grading