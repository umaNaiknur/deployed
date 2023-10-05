import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './modal/modal';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  postData(){
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
  }
  getPost(id:any){
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  deletePost(id:any){
return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  updatePost(post:Post){
return this.http.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
  }
}
