import { Component, OnInit } from '@angular/core';
import { Song } from 'src/types/song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs: Song[] | null = null;

  constructor() { }

  ngOnInit(): void {
    this.songs = [{
      title: "horny",
      filename: "horny.mp3",
      thumbnail: "/horny.webp"
    }];
  }

}
