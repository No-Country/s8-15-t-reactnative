const {Category} = require( '../db')



async function getCategories (req, res, next) {
    try {
        const categories = await Category.findAll()

       return res.status(200).json(categories)
        
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }

}
async function getCategory (req, res, next) {
    try {
        const category = await Category.findByPk(req.params.id)

       return res.status(200).json(category)
        
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }

}

async function postCategory (req, res, next) {
    try {
        const category = await Category.create(req.body)

       return res.status(200).json(category)
        
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' });
    }

}


module.exports = {
    getCategories,
    getCategory,
    postCategory
} 