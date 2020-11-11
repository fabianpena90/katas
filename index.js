// Scenario
// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array){
  let team1 = 0;
  let team2 = 0;
  let result = []
  for (let i =0; i < array.length; i++){
    if(i % 2 === 0) {
      team1 += array[i]
    } if(i % 2 !==0) {
      team2 += array[i]
    }
  }
  result.push(team1, team2)
  return result
}