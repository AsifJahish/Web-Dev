import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumApiService } from '../services/album-api.service';
import { Album } from '../modules/album';



@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  originalTitle: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumApiService
  ) { }

  ngOnInit(): void {
    this.loadAlbumDetails();
  }

  loadAlbumDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumService.getAlbumById(+id).subscribe((album: Album) => {
        this.album = album;
        this.originalTitle = album.title;
      });
    }
  }

  saveAlbum(): void {
    if (this.album && this.album.title !== this.originalTitle) {
      this.albumService.updateAlbum(this.album).subscribe(() => {
        this.originalTitle = this.album?.title;
        alert('Album title updated successfully!');
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/album']);
  }



  
}