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


Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter((film) => film.genre === genre);

};

Cinema.prototype.isYear = function (year) {
  const result = this.films.filter((film) => film.year === year)

  // console.log("Result:", result);

  if( result.length === 0 ){
    return false;
  } else {
    return true;
  }

};
//use length to check length is the same. makes it easier to test

Cinema.prototype.overLength = function (time) {
  const result = this.films.filter((film) => film.length > time)

  // console.log("Result:", result);

  if( result.length === 0 ){
    return false;
  } else {
    return true;
  }

};


Cinema.prototype.totalRunningTime = function () {
  const runningTime = (total,film) => total + film.length;
  return this.films.reduce(runningTime,0)

};


module.exports = Cinema;
