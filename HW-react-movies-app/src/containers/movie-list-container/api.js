const movies = [
  {
    "id": 1,
    "title": "Pulp Fiction",
    "genre": "Action & Adventure",
    "date": 1994,
    "url": "https://www.imdb.com/title/tt0110912/",
    "overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption",
    "runTime": "2:04",
    "image": "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/pulp-fiction-cover-i1288.jpg"
  },
  {
    "id": 2,
    "title": "Knives Out",
    "genre": "Comedy & Crime",
    "date": 2019,
    "url": "https://www.imdb.com/title/tt8946378/",
    "overview": "A detective investigates the death of a patriarch of an eccentric, combative family",
    "runTime": "2:45",
    "image": "https://image.tmdb.org/t/p/original/m6mnbZpkImHDTt1hUIy5Su1s0N9.jpg"
  },
  {
    "id": 3,
    "title": "Back to the Future",
    "genre": "Comedy & Adventure",
    "date": 1985,
    "runTime": "1:56",
    "overview": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend",
    "url": "https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0",
    "image": "https://i8.rozetka.ua/goods/18374835/216571813_images_18374835289.jpg"
  },
  {
    "id": 4,
    "title": "Avengers: Infinity War",
    "genre": " Adventure & Comedy",
    "url": "https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0",
    "date": 2018,
    "runTime": "1:56",
    "overview": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos",
    "image": "https://i.pinimg.com/originals/72/fc/a7/72fca72b95cef647b2dde1bd67a79049.jpg"
  },
  {
    "id": 5,
    "title": "Kill Bill: Vol. 2",
    "genre": "Oscar winning movie",
    "url": "https://www.imdb.com/title/tt0378194/?ref_=nv_sr_srsg_0",
    "date": 2004,
    "runTime": "2:17",
    "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill",
    "image": "https://img2.iwascoding.com/0/paid/2018/10/15/71/91C9B4C0B2D601363240543D7EF8F2BE.jpg"
  },
  {
    "id": 6,
    "title": "Bohemian Rhapsody",
    "genre": "Biography, Drama, Music",
    "date": 2018,
    "runTime": "2:06",
    "overview": "The story of the legendary British rock band Queen and lead singer Freddie Mercury",
    "url": "https://www.imdb.com/title/tt1727824/?ref_=nv_sr_srsg_0",
    "image": "https://lostfilm.info/images/poster/548/5476347.jpg"
  },
]


  const getMovies = async () => {
      return await movies;
  }

  export default { getMovies }
;