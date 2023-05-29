import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersCardComponent } from './characters-card.component';

@NgModule({
  declarations: [CharactersCardComponent],
  imports: [CommonModule],
  exports: [CharactersCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CharactersCardModule {}
