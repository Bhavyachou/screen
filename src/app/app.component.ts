
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText;
  public data = [
    {date: 'Jul 23', name: 'test', entities:'20'},
    {date: 'Mar 12', name: 'dev', entities:'100'},
    {date: 'Dec 12', name: 'complete', entities:'50'},
    {date: 'Jul 23', name: 'test', entities:'20'},
    {date: 'Mar 12', name: 'dev', entities:'100'},
    {date: 'Dec 12', name: 'complete', entities:'50'},
    {date: 'Jul 23', name: 'test', entities:'20'},
    {date: 'Mar 12', name: 'dev', entities:'100'},
    {date: 'Mar 12', name: 'dev', entities:'100'},
    {date: 'Dec 12', name: 'complete', entities:'50'},
    {date: 'Jul 23', name: 'test', entities:'20'},
    {date: 'Mar 12', name: 'dev', entities:'100'},
     
];


  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      
      processing: true
    };
};

showMainContent: Boolean = true;

  constructor() {}

   ShowHideButton() {
      this.showMainContent = this.showMainContent ? false : true;
   }
   

}
