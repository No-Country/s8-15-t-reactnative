const { compare } = require('bcrypt');
const { User } = require('../db.js');
const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log(email, password)
		const user = await User.findOne({ where: { email } });

		if (!user) {
			return res.status(401).json({ error: 'Email incorrecto' });
		}

		const validPassword = await compare(password, user.password);

		if (!validPassword) {
			return res.status(401).json({ error: 'Contraseña incorrecta' });
		}

		const token = jwt.sign({ user }, 'secret-key', { expiresIn: '48h' });

		res.json({
			token,
			user
		});
	} catch (error) {
		res.status(500).json({ error: 'Error en el servidor' });
	}
};

module.exports = {
	userLogin
};
