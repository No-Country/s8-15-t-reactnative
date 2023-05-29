const { compare } = require('bcrypt')
const { User } = require('../db.js')
const jwt = require('jsonwebtoken')

const userLogin = async (req, res) => {
	const data = {
		statusCode: 200,
		errors: '',
	}
	const { email, password } = req.body
	const user = await User.findOne({ where: { email: email } }).then(
		user => user
	)
	if (!user) {
		data.statusCode = 401
		data.errors = 'email incorrecto'
	}
	if (data.statusCode !== 200) return res.send(data)
	const validPassword = await compare(password, user.password)

	if (!validPassword) {
		data.statusCode = 401
		data.errors = 'contraseña incorrecto'
		return res.send(data)
	}

	const token = jwt.sign(
		{
			user,
		},
		'secret-key',
		{ expiresIn: '48h' }
	)

	res.json({
		token,
		user
	})
	// if (passwordExist !== hashedPassword) {
	// 	data.statusCode = 401
	// 	data.errors = 'pass incorrecto'
	// }
	// data.statusCode !== 200 ? res.send(data) : res.send('acceso exitoso')
}
module.exports = {
	userLogin,
}
