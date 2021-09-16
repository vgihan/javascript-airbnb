const model = require("../model/house");

async function itemListService(userCondition) {
    const { minPrice, maxPrice, sumOfPeople } = userCondition;
    const rows = await model.read({
        minPrice,
        maxPrice,
        sumOfPeople,
    });
    console.log(rows);
    return rows;
}

module.exports = { itemListService };
