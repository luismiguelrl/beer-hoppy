import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BeersService } from 'src/app/core/services/beers.service';

@Component({
  selector: 'beer-hoppy-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  displayedColumns: string[] = [
    'name',
    'tagline',
    'image_url',
    'abv',
    'ibu',
    'contributed_by',
  ];
  data: any[] = [];
  beers: any[] = [];
  dataSource: MatTableDataSource<any>;

  constructor(private beersService: BeersService) {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers() {
    let beerData = {};

    this.beersService.findRandom(7).subscribe(
      (response: any[]) => {
        response.forEach((item: any) => {
          beerData = {
            name: item.name,
            tagline: item.tagline,
            image_url: item.image_url,
            abv: item.abv,
            ibu: item.ibu,
            contributed_by: item.contributed_by,
          };
          this.data.push(beerData);
        });

        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRow(row: any) {
    console.log(row);
  }
}
