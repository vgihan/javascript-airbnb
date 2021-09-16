const model = require("../model/house");

async function itemListService(userCondition) {
    const { minPrice, maxPrice, numOfAdult, numOfChild, numOfBaby } =
        userCondition;
    const rows = await model.read({
        minPrice,
        maxPrice,
        sumOfPeople: numOfAdult + numOfChild + numOfBaby,
    });
    return rows;
}

module.exports = { itemListService };
