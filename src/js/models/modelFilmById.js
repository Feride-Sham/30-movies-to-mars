import image from '../../images/glideSlider/errorFilm.jpg';

export default class FilmIdModel {
  constructor(
    id,
    posterPath,
    title,
    originalTitle,
    genres,
    popularity,
    voteAverage,
    voteCount,
    overview,
    releaseDate,
  ) {
    this.id = id;
    this.posterPath = this.getCorrectImages(posterPath);
    this.title = title;
    this.originalTitle = originalTitle;
    this.genres = this.getCorrectGenres(genres);
    this.popularity = popularity;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
    this.overview = overview;
    this.releaseDate = this.getReleaseDate(releaseDate);
  }

  getCorrectGenres(genresArray) {
    if (genresArray.length === 0) {
      return String.fromCodePoint(0x1f640);
    }
    return genresArray.map(el => el.name).join(', ');
  }

  getCorrectImages(posterPath) {
    if (posterPath === null) {
      return image;
    }
    return 'https://image.tmdb.org/t/p/w500' + posterPath;
  }

  getReleaseDate(date) {
    if (date === null || date === undefined) {
      return String.fromCodePoint(0x1f640);
    }
    return date.slice(0, 4);
  }

  get id() {
    return this._id;
  }
  get posterPath() {
    return this._posterPath;
  }
  get title() {
    return this._title;
  }
  get originalTitle() {
    return this._originalTitle;
  }
  get genres() {
    return this._genres;
  }
  get popularity() {
    return this._popularity;
  }
  get voteAverage() {
    return this._voteAverage;
  }
  get voteCount() {
    return this._voteCount;
  }
  get overview() {
    return this._overview;
  }
  get releaseDate() {
    return this._releaseDate;
  }
  set id(value) {
    this._id = value;
  }
  set posterPath(value) {
    this._posterPath = value;
  }
  set title(value) {
    this._title = value;
  }
  set originalTitle(value) {
    this._originalTitle = value;
  }
  set genres(value) {
    this._genres = value;
  }
  set popularity(value) {
    this._popularity = value;
  }
  set voteCount(value) {
    this._voteCount = value;
  }
  set voteAverage(value) {
    this._voteAverage = value;
  }
  set overview(value) {
    this._overview = value;
  }
  set releaseDate(value) {
    this._releaseDate = value;
  }
}
