const Joi = require('joi').extend(require('@joi/date'));

const authSchema = Joi.object({
	name: Joi.string()
		.min(3)
		.max(50)
		.required()
		.trim(),

	cpf: Joi.number()
		.required(),

	office: Joi.string()
		.required()
		.valid('gerente','vendedor','caixa'),

	birthday: Joi.date()
		.min('01/01/2003')
		.max('now')
		.format('DD/MM/YYYY')
		.messages({'date.max':'Age must be 18+'})
		.required(),

	// birthday: Joi.number()
	// 	.integer()
	// 	.min(1900)
	// 	.max(2013),

});

module.exports = {
	authSchema,
};