import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {SonComponent} from './son/son.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  @ViewChild(SonComponent) son;
 
  fatherMessage:string;

  constructor() {
 
   }

   ngAfterViewInit(){
    // this.fatherMessage=this.son.message;
}

ngAfterContentChecked() {
  this.fatherMessage=this.son.message;
}
  ngOnInit() {

  }

 

}
