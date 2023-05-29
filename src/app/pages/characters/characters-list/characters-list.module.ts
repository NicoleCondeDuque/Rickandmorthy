import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharactersListComponent } from './characters-list.component';
import { CharactersCardModule } from '@app/pages/characters/characters-card/characters-card.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersListRoutingModule, CharactersCardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CharactersListModule {}
