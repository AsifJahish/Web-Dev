import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../modules/album';
import { Photo } from '../modules/album';


@Injectable({
  providedIn: 'root'
})
export class AlbumApiService {



  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { 
    
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  deleteAlbum(albumId: number): Observable<any> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.delete<any>(url);
  }

  getAlbumById(albumId: number): Observable<Album> {
    const url = `${this.apiUrl}/${albumId}`;
    return this.http.get<Album>(url);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    const url = `${this.apiUrl}/${albumId}/photos`; // Remove "/albums" from the URL
    return this.http.get<Photo[]>(url);
  }
  
}
