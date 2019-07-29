import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  [x: string]: any;

  public numbers = [1,2,3];

  // [
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  //   {
  //     "img": "../../assets/imgs/computer.jpg",
  //     "name": "Projeto",
  //     "subt": "Desenvolvimento mobile",
  //     "descript": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt inventore atque amet beatae ex corporis Lorem ipsum dolor sit"
  //   },
  // ]

  posts:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.GetPosts().subscribe(
      data => this.posts = data
    )
  }

}
