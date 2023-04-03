Tandem Bicycle 
/*
A tandem bicycle is a bicycle that's operated by two people: person A and person B. Both people pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. So if person A pedals at a speed of 5, and person B pedals at a speed of 4, the tandem bicycle moves at a speed of 5 (i.e.,
tandemSpeed = max (speedA, speedB) ).
You're given two lists of positive integers: one that contains the speeds of riders wearing red shirts and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive integer, which is the speed that they pedal a tandem bicycle at. Both lists have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.
Write a function that returns the maximum possible total speed or the minimum possible total speed of all of
the tandem bicycles being ridden based on an input parameter, fastest. If fastest = true , your function
should return the maximum possible total speed; otherwise it should return the minimum total speed.
"Total speed" is defined as the sum of the speeds of all the tandem bicycles being ridden. For example, if there are 4 riders (2 red-shirt riders and 2 blue-shirt riders) who have speeds of 1, 3, 4, 5, and if they're paired on tandem bicycles as follows: [1, 4], [5, 3], then the total speed of these tandem bicycles is
*/


function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {  
  // Find Total Max Speed
  if(fastest) return findMaxSpeed(redShirtSpeeds,blueShirtSpeeds)
  else return findMinSpeed(redShirtSpeeds,blueShirtSpeeds)
  }

function findMaxSpeed(redShirtSpeeds,blueShirtSpeeds,speed = 0){
    // Sort Arrays in opposite order
    redShirtSpeeds.sort((a,b) => a - b)
    blueShirtSpeeds.sort((a,b) => b - a)
    return addSpeed(redShirtSpeeds,blueShirtSpeeds,speed)
}

function findMinSpeed(redShirtSpeeds,blueShirtSpeeds,speed = 0){
    // Sort arrays in same order
    redShirtSpeeds.sort((a,b) => a - b)
    blueShirtSpeeds.sort((a,b) => a - b)
    return addSpeed(redShirtSpeeds,blueShirtSpeeds,speed)
  }

function addSpeed(redShirtSpeeds,blueShirtSpeeds,speed = 0){
  // Compare speeds, add fastest to speed variable
  for(let i = 0; i < redShirtSpeeds.length; i++){
      const redShirtSpeed = redShirtSpeeds[i]
      const blueShirtSpeed = blueShirtSpeeds[i]
       if(redShirtSpeed >= blueShirtSpeed){
        speed += redShirtSpeed 
      }
      else{
        speed += blueShirtSpeed
      }
  }
  return speed
  }



function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  const numRiders = redShirtSpeeds.length
  let speed = 0
  
  // Find Total Max Speed
  if(fastest){
    // Sort arrays in opposite order
    redShirtSpeeds.sort((a,b) => a - b)
    blueShirtSpeeds.sort((a,b) => b - a)
    
    // Compare speeds, add fastest to speed variable
    for(let i = 0; i < numRiders; i++){
      if(redShirtSpeeds[i] >= blueShirtSpeeds[i]){
       speed += redShirtSpeeds[i]
     }
     else if(blueShirtSpeeds[i] >= redShirtSpeeds[i]){
      speed += blueShirtSpeeds[i]
     }
   }
 }
    
  // Find Total Min Speed
  else{
    // If Slowest, sort arrays in same order
    redShirtSpeeds.sort((a,b) => a - b)
    blueShirtSpeeds.sort((a,b) => a - b)
    
  // Compare speeds, add fastest to speed variable
  for(let i = 0; i < numRiders; i++){
     if(redShirtSpeeds[i] >= blueShirtSpeeds[i]){
        speed += redShirtSpeeds[i]
     }
    else if(blueShirtSpeeds[i] >= redShirtSpeeds[i]){
     speed += blueShirtSpeeds[i]
    }
  }
  }

  return speed
}



