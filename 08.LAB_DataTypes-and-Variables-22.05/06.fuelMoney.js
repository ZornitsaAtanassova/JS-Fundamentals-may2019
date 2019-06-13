function fuelMoney(distance, passengers, priceOfDiesel) {
    // Write a function which calculates how much money for fuel will be needed to drive а bus from one place to another.Consider the following:
    // • Calculate the fuel by knowing that an empty bus can pass 100 km with 7L diesel.
    // • One person in that bus excluding the driver increases fuel consumption by 100 milliliters.
    // • The money is calculated by multiplying the fuel price with the needed fuel for the trip.
    // As input you will receive 3 parameters (the distance the bus must travel, the passengers in it and the price for 1 liter of diesel). As output you should print this message: "Needed money for that trip is {neededMoney} lv".

    let neededMoney = (distance / 100) * 7;
    neededMoney += passengers * 0.100;
    let money = neededMoney * priceOfDiesel;
    console.log(`Needed money for that trip is ${money}lv.`);
}

fuelMoney(260, 9, 2.49);    // Needed money for that trip is 47.559lv.
fuelMoney(90, 14, 2.88);    // Needed money for that trip is 22.176lv.
