import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../modal/modal';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(){}
@Input() data!:Post
@Output() delete=new EventEmitter<Post>()
@Output() deleteOne=new EventEmitter<number>()

onDelete(event:Event){
event.preventDefault();
this.delete.emit(this.data)

}

deleteData(){
  // event.stopPropagation();
this.deleteOne.emit(5)
}
}

