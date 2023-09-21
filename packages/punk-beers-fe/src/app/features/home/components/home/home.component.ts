import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/core/services/beers.service';

@Component({
  selector: 'beer-hoppy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.findRandom().subscribe((response) => {
      console.log(response);
    });
  }
}
