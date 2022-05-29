const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');
const moment = require('moment');



class EmployeeService {
	//create employee
	async create(payload) {
		const result = await EmployeeRepository.create(payload);
		const birthdateFormat = moment(result.birthday, 'YYYY-MM-DD').format('DD/MM/YYYY');
		
		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);
		const birthdateFormat = moment(result.birthday, 'YYYY-MM-DD').format('DD/MM/YYYY');
		let arrayToReturn = [];
		for (let index = 0; index < result.length; index ++) {
			arrayToReturn.push({
				employee_id: result[index]._id,
				name: result[index].name,
				cpf: result[index].cpf,
				office: result[index].office,
				situation: result[index].situation,
				birthday: result[index].birthday,
				createdAt: result[index].createdAt,
				updatedAt: result[index]. updatedAt
			});
		}

		return arrayToReturn;
	}
}
module.exports = new EmployeeService();