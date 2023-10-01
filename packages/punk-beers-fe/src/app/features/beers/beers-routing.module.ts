import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './components/beers/beers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BeersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeersRoutingModule {}
