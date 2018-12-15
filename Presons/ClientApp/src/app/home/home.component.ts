import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { sampleProducts, products } from './products';
import { GridDataResult, PageChangeEvent, GridComponent, DataStateChangeEvent, DataBindingDirective } from '@progress/kendo-angular-grid';
import { personColumns } from './../models/personColumns';
import { HttpService } from './../services/HttpService';
import { Person } from './../models/Person';
import { Gender } from './../models/Gender';
import 'rxjs/add/operator/map';
import { process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public columns = personColumns;
  public pageSize = 10;
  public skip = 0;
  private persons: Array<Person> = new Array<Person>();
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;


  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getPersons()
      .subscribe(data => {
        if (data !== null) {
          this.persons = data;
          this.gridData = data;
        }
      })
  }


  private gridData: any[] = new Array<Person>();
  reload() {
    this.gridData = this.gridData.slice(0, 10);
    this.dataBinding.skip = 0;
  }


  edit(id: number) {
    debugger;
  }

  remove(id: number) {
    debugger;
  }
}


