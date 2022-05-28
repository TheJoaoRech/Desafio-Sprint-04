const ProductSchema = require('../schema/ProductSchema');

class ProductRepository {
	async create(payload) {
		return await ProductSchema.create(payload);
	}

}

module.exports = new ProductRepository();