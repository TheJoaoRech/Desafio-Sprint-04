const ProductSchema = require('../schema/ProductSchema');

class ProductRepository {
	async create(payload) {
		return await ProductSchema.create(payload);
	}

	async listAll(payload) {
		return await ProductSchema.find(payload);
	}

}

module.exports = new ProductRepository();