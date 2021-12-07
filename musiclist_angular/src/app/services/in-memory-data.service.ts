import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const music = [
      { id: 1, artist: 'Riki Sorsa', album: 'Parhaat', track: 'Afrikan Tähti' }
    ];
    return {music};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(music: Music[]): number {
    return music.length > 0 ? Math.max(...music.map(m => m.id)) + 1 : 11;
  }
}
