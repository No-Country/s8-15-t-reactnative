const {User} = require( '.././db')

 async function editUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const data = req.body;
  
      const [updatedRows] = await User.update(data, {
        where: { id: userId },
      });
  
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      return res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }


  module.exports = {
    editUser
  }