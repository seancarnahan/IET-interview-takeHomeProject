export interface Films extends Array<Film> {
  results: any;
}

export interface Film {
  id: any;
  title: String;
  vote_average: any;
  release_date: String;
  overview: String;
}
