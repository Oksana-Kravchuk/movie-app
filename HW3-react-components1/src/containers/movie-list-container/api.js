const movies = [
  {
    "id": 1,
    "title": "Pulp Fiction",
    "genre": "Action & Adventure",
    "date": 1994,
    "image": "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg"
  },
  {
    "id": 2,
    "title": "Knives Out",
    "genre": "Comedy & Crime",
    "date": 2019,
    "image": "https://image.tmdb.org/t/p/original/m6mnbZpkImHDTt1hUIy5Su1s0N9.jpg"
  },
  {
    "id": 3,
    "title": "Back to the Future",
    "genre": "Comedy & Adventure",
    "date": 1985,
    "image": "https://i8.rozetka.ua/goods/18374835/216571813_images_18374835289.jpg"
  },
  {
    "id": 4,
    "title": "Avengers: Infinity War",
    "genre": " Adventure & Comedy,",
    "date": 2018,
    "image": "https://i.pinimg.com/originals/72/fc/a7/72fca72b95cef647b2dde1bd67a79049.jpg"
  },
  {
    "id": 5,
    "title": "Kill Bill: Vol. 2",
    "genre": "Oscar winning movie",
    "date": 2004,
    "image": "https://img2.iwascoding.com/0/paid/2018/10/15/71/91C9B4C0B2D601363240543D7EF8F2BE.jpg"
  },
  {
    "id": 6,
    "title": "Bohemian Rhapsody",
    "genre": "Biography, Drama, Music",
    "date": 2018,
    "image": "https://lostfilm.info/images/poster/548/5476347.jpg"
  },
]


  const getMovies = async () => {
      return await movies;
  }

  export default { getMovies }
;