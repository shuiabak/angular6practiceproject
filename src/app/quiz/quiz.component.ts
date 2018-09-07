import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question : string='';
  name :string ='';
  display:boolean=false;

  data:Array<object>=[];
  constructor() { }

  ngOnInit() {
  }

  createQuestion(){
    if(!!this.question && !!this.name){
      this.data.push({'question':this.question,'name':this.name});
    
      console.log(this.data);
          }
    else{
      alert('Enter all the values');
    }
    
    return  this.data;

  }

  getFullName(res){
    console.log(res);
  }

}
