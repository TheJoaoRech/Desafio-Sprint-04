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

	async updateProduct(payload, id) {
		return await ProductSchema.findByIdAndUpdate(payload, id);
	}	
	
	async deleteProduct(payload) {
		return await ProductSchema.findByIdAndDelete(payload);
	}

}

module.exports = new ProductRepository();