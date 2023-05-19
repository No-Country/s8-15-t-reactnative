const { hash } = require('bcrypt')
const { User } = require('../db.js')
const data = {
	statusCode: 200,
	errors: {},
}
const userRegister = async (req, res) => {
	const { password, name, email, phone } = req.body
	const hashedPassword = await hash(password, 12)
	const emailExist = User.findOne({
		where: { email },
	}).then(user => user)
	const phoneExist = User.findOne({
		where: { phone },
	}).then(user => user)
	if (emailExist) {
		data.statusCode = 401
		data.errors.email = 'Este email ya está registrado'
	}
	if (phoneExist) {
		data.statusCode = 401
		data.errors.email = 'Este teléfono ya está registrado'
	}
	if (data.statusCode !== 200) return res.send(data)
	User.create({
		name,
		email,
		phone,
		password: hashedPassword,
	})
		.then(nuevoUsuario => {
			res.status(200).send()
		})
		.catch(error => {
			res.status(401).send(error)
		})
}
module.exports = {
	userRegister,
}
