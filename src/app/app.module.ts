import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatGridListModule  } from '@angular/material/grid-list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    CommonModule,
    MatGridListModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
