import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './../services/data-manager.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-content-control',
  templateUrl: './content-control.component.html',
  styleUrls: ['./content-control.component.css']
})
export class ContentControlComponent implements OnInit {

  buttonState: string;
  tableData: any;
  enableTable: boolean;
  displayedColumns = ['id', 'first_name', 'last_name', 'email'];
  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
    this.buttonState = 'fetch data';
  }
  buttonOnClick() {
    switch (this.buttonState) {
      case 'fetch data':
        {
          this.getData();
          this.buttonState = 'clear data';
        }
        break;
      case 'clear data':
        this.clearData();
        this.buttonState = 'reset table';
        break;
      case 'reset table':
        this.enableTable = false;
        this.buttonState = 'fetch data';
        break;
      default:
      this.buttonState = 'fetch data';
    }
  }

  async getData() {
    const result: any =  await this.dataManagerService.getData();
    console.log(result);
    this.tableData = new MatTableDataSource(result);
    this.enableTable = true;
  }

  clearData() {
    this.tableData.data.forEach((element, index) => {
      for (const i in element) {
        if (element.hasOwnProperty(i)) {
          this.tableData.data[index][i] = '';
        }
      }
    });
  }
}
