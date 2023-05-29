import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  template: `<ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button> </ion-back-button>
        </ion-buttons>
        <ion-title> characters </ion-title>
      </ion-toolbar>
    </ion-header>
    <section class="list">
      <app-characters-card
        *ngFor="let character of characters$ | async"
        [character]="character"
      ></app-characters-card>
    </section>`,
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characters$ = this.dataSrv.characters$;
  constructor(private dataSrv: DataService) {}

  ngOnInit() {}
}
