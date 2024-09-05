Can Place Flowers
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


var canPlaceFlowers = function(flowerbed, n) {
    // create variable to hold newly planted flowers
    let newFlowerCount = 0
    // create new flowerbed with leading and trailing 0s
    const newFlowerBed = [0,...flowerbed,0]
    // iterate over flowerbed, 
    for(let i = 1; i < newFlowerBed.length; i++){
        const prevSpotEmpty = newFlowerBed[i - 1] === 0
        const currentSpotEmpty = newFlowerBed[i] === 0
        const nextSpotEmpty = newFlowerBed[i + 1] === 0
    // If previous, current, and next spot are all empty, 'plant' flower
        if (prevSpotEmpty && currentSpotEmpty && nextSpotEmpty){
            // Increment newFlowerCount
            newFlowerCount++
            // Plant flower in newFlowerBed array
            newFlowerBed[i] = 1
        }
    }
    // Return bool indicating if 'n' new flowers can be planted
    return newFlowerCount >= n
};