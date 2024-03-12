import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumApiService } from '../services/album-api.service';
import { Photo } from '../modules/album';
@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number | undefined;

  constructor(private route: ActivatedRoute, private albumService: AlbumApiService,  private router: Router,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const id = +idParam;
        this.albumId = id;
        this.albumService.getPhotosByAlbumId(id).subscribe(photos => {
          this.photos = photos;
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/album']);
  }

}