import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  blogs:any = [];
  
  constructor(private _lastBlogs: HomeService) { }

  ngOnInit() {
    this._lastBlogs.getLatestPosts().subscribe(
      data => {
        
        for(var i=0; i<9; i++){
          this.blogs.push(data[i]);
        }
      }
    );
  }

}
