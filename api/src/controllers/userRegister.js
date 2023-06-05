const { hash } = require('bcrypt');
const { User } = require('../db.js');

const userRegister = async (req, res) => {
  try {
    const { repeatedPassword, password, name, email, phone } = req.body;
    const hashedPassword = await hash(password, 12);

    const emailExist = await User.findOne({ where: { email: email } });
    const phoneExist = await User.findOne({ where: { phone: phone } });

    if (emailExist) {
      return res.status(401).json({ error: 'Este email ya está registrado' });
    }
    if (phoneExist) {
      return res.status(401).json({ error: 'Este teléfono ya está registrado' });
    }
    if (repeatedPassword !== password) {
      return res.status(401).json({ error: 'Las contraseñas no coinciden' });
    }

    const newUser = await User.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword,
    });

    res.status(200).json(newUser);
  } catch (error) {
	console.log(error)
    res.status(500).json({ error: 'Ocurrió un error al registrar al usuario' });
  }
};

module.exports = {
  userRegister,
};
