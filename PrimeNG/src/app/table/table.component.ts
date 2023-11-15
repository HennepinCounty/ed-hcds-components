import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('searchFilter') searchFilterInput!: ElementRef<HTMLInputElement>;

  tableExampleList: any[] = [
    {'Name' : 'Test',
    'Description' : 'Test',
    'SortOrder' : '1',
    'Active' : 'Yes'
    },
  ];
  columns: any[] = [];
  tableRowCount: number = 0;
  searchBar: string = '';


  constructor() { }

  ngOnInit() {
    //Initilize table columns 
    this.columns = [
      { field: 'Name', header: 'Name', style: "text-align: center;" },
      { field: 'Description', header: 'Description', style: "text-align: center;" },
      { field: 'SortOrder', header: 'Sort order', style: "text-align: center;" },
      { field: 'Active', header: 'Active', style: "text-align: center;" }
    ];

  }

  //Clears search and reloads table 
  clear(table: Table) {
    table.clear();
    this.searchBar='';
  }

  //cast date to string
  castDateToString(date:string){
    if(date != null || date != undefined){
      return date.toString();
    }
    return date;
  }  

}
