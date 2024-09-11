1732. Find the Highest Altitude

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.


/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // Invalid Inputs:
    if (!gain.length) return 0
    if (gain.length === 1) {
        return gain[0] > 0 ? gain[0] : 0
    }
    let [greatestHeight, currentHeight] = [0,0]
    
    for (let i = 0; i < gain.length; i++){
        currentHeight += gain[i]
        if (currentHeight > greatestHeight) {
            greatestHeight = currentHeight
        }
    }
    return greatestHeight
};