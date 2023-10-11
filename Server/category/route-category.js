const express = require('express');
const router = express.Router();
const { getCategories, getFilmsByCategory } = require('../query');

router.get('/category', async (req, res) => {
    try {
        const result = await getCategories();
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'tidak ada film berdasarkan category' });
    }
});

router.get('/film/category/:category_id', async (req, res) => {
    try {
        const result = await getFilmsByCategory(req.params.category_id);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Tidak ada film berdasarkan kategori tersebut' });
    }
});


module.exports = router;
