import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from '../../models/music';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //private backendUrl = '/services/music';
  private backendUrl = 'http://localhost:3001/api/music';

  constructor(private http: HttpClient) { }

  getMusicList(): Observable<Music[]> {
    console.log(this.backendUrl);
    return this.http.get<Music[]>(this.backendUrl);
  }

  addMusic(music: Music): Observable<Music> {
    return this.http.post<Music>(this.backendUrl, music, this.httpOptions);
  }

  removeMusic(_id: string): Observable<Music> {
    const url = `${this.backendUrl}/${_id}`;
    return this.http.delete<Music>(url);
  }
}
