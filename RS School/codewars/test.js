const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    console.log(distanceToPump <= (fuelLeft * mpg)) ;
};
zeroFuel(100,50,1);