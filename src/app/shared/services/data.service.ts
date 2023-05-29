import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import {
  Characters,
  DataResponse,
  Episodes,
} from '../interfaces/data.interface';

const QUERY = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private episodesSubjext = new BehaviorSubject<Episodes[]>([]);
  episodes$ = this.episodesSubjext.asObservable();
  private charactersSubjext = new BehaviorSubject<Characters[]>([]);
  characters$ = this.charactersSubjext.asObservable();

  constructor(private apollo: Apollo) {
    this.getDataAPI();
  }

  private getDataAPI(): void {
    this.apollo
      .watchQuery<DataResponse>({
        query: QUERY,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters, episodes } = data;
          this.episodesSubjext.next(episodes.results);
          this.charactersSubjext.next(characters.results);
        })
      )
      .subscribe();
  }
}
