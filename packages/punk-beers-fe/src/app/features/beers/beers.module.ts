import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './components/beers/beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [BeersComponent, DetailsComponent],
  imports: [CommonModule, BeersRoutingModule, MaterialModule],
})
export class BeersModule {}
