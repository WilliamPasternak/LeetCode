Class Photos
/*
It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts.
In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:
• All students wearing red shirts must be in the same row.
• All students wearing blue shirts must be in the same row.
• Each student in the back row must be strictly taller than the student directly in front of them in the front
row.
You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
Note: you can assume that each class has at least 2 students.
*/

// Time: O(N log N) - Need to check each student
// Space: O(1) -  if in place sorting allowed. O(N) if not.
function classPhotos(redShirtHeights, blueShirtHeights) {
  // sort each array in place
  const numStudentsInRow = redShirtHeights.length
  let [redWorks,blueWorks] = [true,true]

  // Check if all red shirts can be in back row
  for(let i = 0; i < numStudentsInRow; i++){
    if(redShirtHeights[i] <= blueShirtHeights[i]){
      redWorks = false
    } 
  }
  // Check if all blue shirts can be in back row
 for(let i = 0; i < numStudentsInRow; i++){
    if(blueShirtHeights[i] <= redShirtHeights[i]){
      blueWorks = false
    } 
  }
  
  return redWorks || blueWorks

}

// Do not edit the line below.
exports.classPhotos = classPhotos;