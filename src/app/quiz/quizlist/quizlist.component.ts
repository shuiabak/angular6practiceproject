import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {
@Input() quizlist:Array<object>;
@Output() cloneQuizList = new EventEmitter();
@Output() FullName = new EventEmitter();

names : Array<string>=['SHuiab','tayyab','rajeev'];
  constructor() { }

  ngOnInit() {
  this.getFullName();
  }

  getFullName(){
    this.FullName.emit(this.names[0]+'-'+this.names[1]);
  }

  getQuizList(){
    this.cloneQuizList.emit;
  }

}
