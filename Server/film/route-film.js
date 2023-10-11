const express = require('express');
const router = express.Router();
const { getFilms, getFilmById } = require('../query');

router.get('/film', async (req, res) => {
    try {
        const result = await getFilms();
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'film tidak ada' });
    }
});

router.get('/film/:id', async (req, res) => {

    try {
        const result = await getFilmById(req.params.id);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ error: 'film tidak ada' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'tidak ada film berdasarkan id tersebut' });
    }
});

module.exports = router;
