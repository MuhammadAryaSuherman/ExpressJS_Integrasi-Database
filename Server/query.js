const pool = require('./connect');



const getFilms = () => {
  return pool.query('SELECT * FROM film');
};




const getFilmById = (id) => {
  return pool.query('SELECT * FROM film WHERE film_id = $1', [id]);
};



const getCategories = () => {
  return pool.query('SELECT * FROM category');
};



const getFilmsByCategory = (category_id) => {
  return pool.query('SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1', [category_id]);
};



module.exports = {
  getFilms,
  getFilmById,
  getCategories,
  getFilmsByCategory,
};
