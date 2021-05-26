import { Component, OnInit } from '@angular/core';
import { Album } from './album';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  albums: Album[];

  constructor() { }

  ngOnInit(): void {

  }

}
