// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    
    return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = (arrayOfDrivers) => {

    return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (a){
    return function (b) { return a * b};
};

const fareDoubler = (a) => {
    return createFareMultiplier(a)(2);
};

const fareTripler = (a) => {
    return createFareMultiplier(a)(3);
};

function selectDifferentDrivers(arrayOfDrivers, returnDrivers){
    return returnDrivers(arrayOfDrivers);

};