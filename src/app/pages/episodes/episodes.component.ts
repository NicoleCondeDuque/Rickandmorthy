import { Component } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent {
  episodes$ = this.dataSvc.episodes$; //inyectamos el metodo
  constructor(private dataSvc: DataService) {}
}
