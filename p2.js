// Problem 2 : Finding Steaks
 
 let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
function findMaxStreak(arr){
  let currentNegativeStreak = 0;
  let maxNegativeStreak = 0;
  
  let currentPositiveStreak =0;
  let maxPositiveStreak = 0;
  
  for(const num of arr){
  if(num<0){
    currentNegativeStreak++;
    maxNegativeStreak = Math.max(maxNegativeStreak, currentNegativeStreak);
    currentPositiveStreak = 0;
  }else{
    currentPositiveStreak++;
    maxPositiveStreak = Math.max(maxPositiveStreak, currentPositiveStreak);
    currentNegativeStreak =0;
  }
  }
  return {maxPositiveStreak, maxNegativeStreak}
}
const finalResultStreak = findMaxStreak(intArray);
console.log(finalResultStreak);