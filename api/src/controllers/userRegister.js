const { hash } = require('bcrypt')
const { User } = require('../db.js')
const userRegister = async (req, res) => {
	const { password, name, email, phone } = req.body
	const hashedPassword = await hash(password, 12)
	User.create({
		name,
		email,
		phone,
		password: hashedPassword,
	})
		.then(nuevoUsuario => {
			res.status(200).json(nuevoUsuario.toJSON())
		})
		.catch(error => {
			res.status(401).send(error)
		})
}
module.exports = {
	userRegister,
}
