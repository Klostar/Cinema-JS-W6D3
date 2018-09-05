const Cinema = function (films) {
  this.films = films;
};



Cinema.prototype.filmTitles = function () {
return this.films.map(film => film.title);
};

Cinema.prototype.findFilm = function (string) {
  return this.films.find((film) => film.title === string);
};

// needs a condition that is true or false which is what === string is
// string is the parameter passed in 



module.exports = Cinema;
