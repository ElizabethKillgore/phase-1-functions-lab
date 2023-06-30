// Code your solution in this file!
 
function distanceFromHqInBlocks(start) {
    let blocks = 0
    if (start < 42) {
      blocks = 42- start 
    }
    if (start > 42) {
        blocks = start - 42
    }
    return blocks    
}

function distanceFromHqInFeet(start) {
    let feet = distanceFromHqInBlocks(start) * 264
    return feet 
}

function distanceTravelledInFeet(start, destination) {
    let feet = 0
    if (start < destination) {
        feet = (destination - start) * 264
    }
    if (start > destination) {
        feet = (start - destination) * 264
    }
    return feet
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    let fare = 0
    if (feet <= 400) {
        fare = 0
    } else if (feet > 400 && feet <= 2000) {
        fare = .02 * (feet - 400)
    } else if (feet > 2000 && feet <= 2500) {
        fare = 25
    } else if (feet > 2500) {
        fare = 'cannot travel that far'
    }
    return fare
}