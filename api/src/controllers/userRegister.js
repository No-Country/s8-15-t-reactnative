const { hash } = require('bcrypt')
const { User } = require('../db.js')
const data = {
	statusCode: 200,
	errors: {},
}
const userRegister = async (req, res) => {
	const { repeatedPassword, password, name, email, phone } = req.body
	const hashedPassword = await hash(password, 12)
	const emailExist = await User.findOne({
		where: { email: email },
	}).then(user => user)
	const phoneExist = await User.findOne({
		where: { phone: phone },
	}).then(user => user)
	if (emailExist) {
		data.statusCode = 401
		data.errors.email = 'Este email ya está registrado'
	}
	if (phoneExist) {
		data.statusCode = 401
		data.errors.phone = 'Este teléfono ya está registrado'
	}

	if (repeatedPassword !== password) {
		data.statusCode = 401
		data.errors.password = 'Las copntraseñas no coinciden'
	}
	if (data.statusCode !== 200) {
		return res.send(data)
	}
	User.create({
		name,
		email,
		phone,
		password: hashedPassword,
	})
		.then(nuevoUsuario => {
			res.status(200).send(data)
		})
		.catch(error => {
			res.status(401).send(error)
		})
}
module.exports = {
	userRegister,
}
