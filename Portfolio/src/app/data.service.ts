import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetPosts() {
    return this.http.get('https://api.myjson.com/bins/hkx4t');
  }

  // GetPostsById(id){
  //   this.GetPosts().filter((id) => { return post.id == id})
  // }

  //[1,2,3].filter((element) =>  { return element.id == id })
}
