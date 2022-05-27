const EmployeeSchema = require('../schema/EmployeeSchema');

class PeopleRepository{
	async create(payload) {
		return await EmployeeSchema.create(payload);
	}
}

module.exports = new PeopleRepository();