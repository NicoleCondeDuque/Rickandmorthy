import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';

@NgModule({
  declarations: [EpisodesComponent],
  imports: [CommonModule, EpisodesRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EpisodesModule {}
