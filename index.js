const movie = {
  title: 'X',
  releaseYear: 2018,
  rating: 4.5,
  director: 'B'
};

showProperty(movie);

function showProperty(Object) {
  for (let key in Object) {
    if (typeof Object[key] === 'string') console.log(key, Object[key]);
  }
}
