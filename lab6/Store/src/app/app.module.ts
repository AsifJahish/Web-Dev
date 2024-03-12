import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

import { FormsModule } from '@angular/forms';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';


const storeRoute:Routes=[

  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'album', component:AlbumComponent},
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotoComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AlbumComponent,
    AlbumDetailComponent,
    AlbumPhotoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(storeRoute),
    FormsModule 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
