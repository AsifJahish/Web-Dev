import { Component, OnInit } from '@angular/core';
import { AlbumApiService } from '../services/album-api.service';
import { Album } from '../modules/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{

  albumList!: Album[];

  constructor(private appService: AlbumApiService) {
    this.albumList= [];
  }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.appService.getAlbums().subscribe((albums: Album[]) => {
      this.albumList = albums;
    });
  }

  deleteAlbum(albumId: number): void {
    this.appService.deleteAlbum(albumId).subscribe(() => {
   
      this.albumList = this.albumList.filter(album => album.id !== albumId);
    });
  }

  detailAlbum(){}

}
