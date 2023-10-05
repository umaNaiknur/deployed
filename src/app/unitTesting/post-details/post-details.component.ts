import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';
import { Post } from '../modal/modal';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  
  post!:Post
constructor(private route:ActivatedRoute,private service:ServiceService,private location:Location){}
  ngOnInit(): void {
   this.getData()
  }
getData(){
let id=this.route.snapshot.paramMap.get('id')
 id && this.service.getPost(id).subscribe((post)=>
 this.post=post
 
)}
goBack(){
  this.location.back()
}
save(){
  this.service.updatePost(this.post).subscribe(()=>this.goBack)
}
}
