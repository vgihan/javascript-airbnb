const model = require("../model/house");

async function itemListService(userCondition) {
    const { minPrice, maxPrice, sumOfPeople } = userCondition;
    const rows = await model.read({
        minPrice,
        maxPrice,
        sumOfPeople,
    });
    return rows;
}

module.exports = { itemListService };
