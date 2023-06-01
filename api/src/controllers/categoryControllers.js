const {Category} = require( '../db')



async function getCategories (req, res, next) {
    try {
        const categories = await Category.findAll()

       return res.status(200).json(categories)
        
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }

}



module.exports = {
    getCategories
} 