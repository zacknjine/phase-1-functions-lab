// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let x = 0;
    const location = 42;
if (pickupLocation < location) {
    x = (location - pickupLocation);
}
else {
    x = (pickupLocation - location);
}
return x;
}   
console.log(x)

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * 264;
    return feet;
}




function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Calculating the distance traveled
    
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance < 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
