// Speed Detector

function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;

  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerDemerit);
    if (points > 12) {
      return "License suspended";
    } else {
      return `Points: ${points}`;
    }
  }
}

console.log(speedDetector(80)); //
console.log(speedDetector(135)); //
