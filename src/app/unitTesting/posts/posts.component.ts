import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Post } from '../modal/modal';
import { LoggerService } from 'src/app/Logger/logger.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
   posts:Post[]=[]
constructor(private service:ServiceService,private logger:LoggerService){}
  ngOnInit(): void {
    console.log(this.posts)
this.getPosts()
// this.deletePostval({id:1,title:'',body:''})
  }
getPosts(){
  this.logger.log('called')
 return this.service.postData().subscribe(res=>{
    this.posts=res
  })
}
deletePostval(post:Post){
  console.log(post.id)
this.posts=this.posts.filter(val=>val.id!==post.id)
  this.service.deletePost(post).subscribe(res=>{
    console.log(res)
  })
}
count = 0;

deleteOnee(val: number) {

  this.count = val-1; // Assign val to count
  return this.count;
}
}
