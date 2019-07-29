import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})

export class AboutProjectComponent implements OnInit {
  id: number;
  posts:Object;
  //[1,2,3].filter((element) =>  { return element.id == id })
  private sub: any;

  constructor(private route: ActivatedRoute, private data:DataService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.data.GetPosts().subscribe(
      data => this.posts = data
    )
  
  }
}
