import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ListService } from '../../services/list/list.service';
import { Music } from '../../models/music';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  track: Music;
  music: Music[] = [];

  constructor(private fb: FormBuilder, private list: ListService, private router: Router) {
    this.addForm = this.fb.group({
      id: new FormControl(''),
      artist: new FormControl(''),
      album: new FormControl(''),
      track: new FormControl('')
    });
   }

  onSubmit() {
    this.track = {
      _id: '',
      id: this.music.length + 1, 
      artist: this.addForm.get('artist').value,
      album: this.addForm.get('album').value,
      track: this.addForm.get('track').value
    }
    this.list.addMusic(this.track).subscribe(track => {
      this.music.push(track);
      this.router.navigate(['/list']);
    });
  }

  getMusicList() {
    this.list.getMusicList().subscribe(m => {
      this.music = m;
    });
  }

  ngOnInit(): void {
    this.getMusicList();
  }

}
