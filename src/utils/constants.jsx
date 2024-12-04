export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PHOTO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_OPTIONS_KEY,
  },
};

export const NOW_PLAYING_MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const POPULAR_MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?page=1';
export const TOP_RATED_MOVIE_API = 'https://api.themoviedb.org/3/movie/top_rated?page=1';
export const UPCOMING_MOVIE_API = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const ALL_MOVIE_API = [NOW_PLAYING_MOVIE_API, TOP_RATED_MOVIE_API, UPCOMING_MOVIE_API, POPULAR_MOVIE_API];

export const MOVIE_GENERES = ["Now Playing Movies", "Top Rated Movies", "Upcoming Movies", "Popular Movies"];

export const IFRAME_URL = "https://www.youtube.com/embed/";

export const POSTER_URL = "https://image.tmdb.org/t/p/w780";

export const BG_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"

export const SUPPORTED_LANGUAGES = [
  {identifier : "en", name : "English"},
  {identifier : "hindi", name : "Hindi"},
  {identifier : "spanish", name : "Spanish"},
  {identifier : "portuguese", name : "Portuguese"},
  {identifier : "french", name : "French"},
]