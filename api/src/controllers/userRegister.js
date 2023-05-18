const { hash } = require('bcrypt')
const { User } = require('../db.js')
const userRegister = async (req, res) => {
	const { password, name, email } = req.body
	const hashedPassword = await hash(password, 12)
	User.create({
		name,
		email,
		password: hashedPassword,
	})
		.then(nuevoUsuario => {
			res.send('Registro creado:', nuevoUsuario.toJSON())
		})
		.catch(error => {
			res.send('Error al crear el registro:', error)
		})
}
module.exports = {
	userRegister,
}
