const service = require("../service/house");

async function get(req, res) {
    const { minPrice, maxPrice, sumOfPeople } = req.query;
    const items = await service.itemListService({
        minPrice,
        maxPrice,
        sumOfPeople,
    });
    res.json(JSON.stringify(items));
}

module.exports = { get };
