import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post-published',
  templateUrl: './post-published.component.html',
  styleUrls: ['./post-published.component.css']
})
export class PostPublishedComponent implements OnInit {

  postData: any;

  constructor(
    public apiService: PostService
  ) {
    this.postData = [];
  }

  ngOnInit(): void {
    this.getAllPost();

  }
  getAllPost() {
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.postData = response;
    })
  }

}
