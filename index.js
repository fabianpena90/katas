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

function rowWeights(array){
  const t1 = array.filter((v,i) => i % 2 ===0).reduce((a,b) => a+b,0)
  const t2 = array.filter((v,i) => i % 2 !==0).reduce((a,b) => a+b,0)

  return [t1,t2]
}


// Complete the solution so that it reverses all of the words within the string passed in.
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url){
  return url.split('#')[0]
}