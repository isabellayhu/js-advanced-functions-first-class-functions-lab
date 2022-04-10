// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {return multiplier*fare};
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers,selector){
    return selector(arrayOfDrivers);
}