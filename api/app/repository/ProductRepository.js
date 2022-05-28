/* eslint-disable no-mixed-spaces-and-tabs */
const ProductSchema = require('../schema/ProductSchema');

class ProductRepository {
	
	async create(payload) {
		return await ProductSchema.create(payload);
	}

	async listAll(payload) {
		return await ProductSchema.find(payload);
	}
    	 
	async getById(payload) {
		return await ProductSchema.findById(payload);
	}

}

module.exports = new ProductRepository();