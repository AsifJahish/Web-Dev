import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FilterComponent } from './components/partials/filter/filter.component';
import { ItemComponent } from './components/partials/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
