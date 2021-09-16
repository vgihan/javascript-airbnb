const service = require("../service/house");

async function get(req, res) {
    const { minPrice, maxPrice, numOfAdult, numOfChild, numOfBaby } = req.query;
    const items = service.itemListService({
        minPrice,
        maxPrice,
        numOfAdult,
        numOfChild,
        numOfBaby,
    });
    res.json(JSON.stringify(items));
}

module.exports = { get };
