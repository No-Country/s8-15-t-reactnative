const { User } = require('../db.js');

const userEdit = async (req, res) => {
    try {
      const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la ruta
      const { name, email, phone } = req.body;
  
      const user = await User.findByPk(userId); // Buscar al usuario por su ID
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      // Actualizar los campos deseados
      user.name = name;
      user.email = email;
      user.phone = phone;
  
      await user.save(); // Guardar los cambios
  
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocurrió un error al intentar editar los datos del usuario' });
    }
};
  
module.exports = {
    userEdit,
};