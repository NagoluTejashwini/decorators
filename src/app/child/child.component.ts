import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input()  childName:string = '';

  @Output() age = new EventEmitter<number>(); // actual property to be passed to parent-component
  @Output() gender = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  changeAge(inputAge:string)
  {
     let newAge:number  = parseInt(inputAge);
     console.log(" Inside child component :- "+newAge);
     
     this.age.emit(newAge);

  }
   
  changeGender(gender:string){
    let newGender:string = gender;
    console.log("Inside Child Component: "+newGender);
    this.gender.emit(gender);
  }

}
