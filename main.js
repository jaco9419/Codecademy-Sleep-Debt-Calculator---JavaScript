// Change the amount of hours slept for each of the days according to your last week
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 6 // hours slept
      break;
    case 'tuesday':
      return 9
      break;
    case 'wednesday':
      return 10
      break;  
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 9
      break;
    case 'sunday':
      return 6
      break;
    default:
      return 'Error!'
      break;
  }
}
//
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +  getSleepHours('sunday');

// Change the Ideal Hours per day according to your reality
const getIdealSleepHours = () => {
  const idealHours = 8; // Ideal Hours per day
  return idealHours * 7;
}
// This code calculates whether you are getting the expected hours of sleep or not
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Good job! You are having the ideal amount of sleep.');
  }
  if (actualSleepHours > idealSleepHours) {
    console.log('Don\'t be so lazy! You are sleeping ' + (actualSleepHours - idealSleepHours) + ' more hours than needed.');  
  } 
  if (actualSleepHours < idealSleepHours) {
    console.log('You are not getting enough sleep! You need ' + ((actualSleepHours - idealSleepHours) * -1) + ' more hours of sleep.');
  }
}
calculateSleepDebt();
//
