import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list/list.service';
import { Music } from '../../models/music';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  music: Music[] = [];

  constructor(private list: ListService) { }

  getMusicList() {
    this.list.getMusicList().subscribe(m => {

      this.music = m;
      console.log(this.music);
    });
  }

  removeTrack(track: Music) {
    this.music = this.music.filter(t => t !== track);
    this.list.removeMusic(track._id).subscribe();
  }

  ngOnInit(): void {
    this.getMusicList();
  }

}
