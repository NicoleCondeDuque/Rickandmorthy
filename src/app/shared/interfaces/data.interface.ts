export interface APIResponse<T> {
  results: T;
}

export interface DataResponse {
  characters: APIResponse<Characters[]>;
  episodes: APIResponse<Episodes[]>;
}

export interface Episodes {
  name: string;
  episodes: string;
}

export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  isFavorite?: boolean;
}
