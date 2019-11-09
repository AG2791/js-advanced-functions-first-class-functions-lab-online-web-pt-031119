// Code your solution in this file!



const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) { 
  drivers.slice(-2);
}


const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];




const createFareMultiplier = function (num) {
  return function (value) {
    return num * value;
  };
};

const fareDoubler = createFareMultiplier(2);
                         //created above 
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};

