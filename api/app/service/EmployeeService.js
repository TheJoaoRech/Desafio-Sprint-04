const EmployeeRepository = require('../repository/EmployeeRepository');
const Employee = require('../schema/EmployeeSchema');
const moment = require('moment');
<<<<<<< HEAD

=======
const { updateEmployee, deleteEmployee, getById } = require('../repository/EmployeeRepository');
>>>>>>> 6f0ad17623029fe78436fc2c3aac14161b4e6e79

class EmployeeService {

	async create(payload) {
		const birthday = moment(payload.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD');
		const result = await EmployeeRepository.create({ ...payload, birthday });
	
		return result;
	}

	async listAll(payload) {
		const result = await EmployeeRepository.listAll(payload);
		let arrayToReturn = [];
		for (let index = 0; index < result.length; index ++) {
			arrayToReturn.push({
				employee_id: result[index]._id,
				name: result[index].name,
				cpf: result[index].cpf,
				office: result[index].office,
				situation: result[index].situation,
				birthday: moment(result[index].birthday, 'YYYY-MM-DD').format('DD/MM/YYYY'),
				createdAt: result[index].createdAt,
				updatedAt: result[index]. updatedAt
<<<<<<< HEAD
			});}
		return result;
=======
			});
		}

		return arrayToReturn;
>>>>>>> 6f0ad17623029fe78436fc2c3aac14161b4e6e79
	}

	async getById(payload) {
		const result = await EmployeeRepository.getById(payload);
		return result;
	}

	async update(payload, id) {
		const result = await EmployeeRepository.updateEmployee(payload, id);
		return result;
	}

	async delete(payload) {
		const result = await EmployeeRepository.deleteEmployee(payload);
	}

<<<<<<< HEAD
	
=======
>>>>>>> 6f0ad17623029fe78436fc2c3aac14161b4e6e79
}

module.exports = new EmployeeService();