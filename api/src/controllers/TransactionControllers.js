const {User, Category, Transaction} = require('../db')



async function postTransaction(req, res, next) {
    try {
      const { amount, categoryId, userId } = req.body;
  
      const user = await User.findByPk(userId);
      const category = await Category.findByPk(categoryId);
  
      if (!user || !category) {
        return res.status(404).json({ error: 'Usuario o categoría no encontrados' });
      }
  
      const transaction = await Transaction.create({
        amount: amount,
        userId: userId
      });
  
      await transaction.setUser(user);
      await transaction.setCategory(category);
  
      res.json(transaction);
    } catch (error) {
      next(error);
    }
  }

  async function getTransactions(req, res, next) {
    try {
      const userId = req.params.userId; // Obtener el userId de los parámetros de la solicitud
      const transactions = await Transaction.findAll({
        where: { userId: userId }, // Filtrar por userId
        include: [
          { model: User },
          { model: Category }
        ]
      });
      res.json(transactions);
    } catch (error) {
      next(error);
    }
  }
  
  
  module.exports = {
    postTransaction,
    getTransactions
    
}