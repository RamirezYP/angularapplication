import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  albumsData: any;

  constructor(
    public apiService: AlbumService
  ) {
    this.albumsData = [];
  }

  ngOnInit(): void {
    this.getAllAlbums();

  }
  getAllAlbums() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.albumsData = response;
    })
  }
  

}
