import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
})
export class CharactersCardComponent {
  @Input() character: any;
  constructor() {}

  ngOnInit(): void {}
}
