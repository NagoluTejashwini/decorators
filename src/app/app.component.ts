import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = 'Ramesh';
  outputAge:number = 0;
  gender:string='Male';

  doClick(name:string)
  {
    this.name = name;
    console.log(" do click called , change the name "+this.name);
  }


  getAgeFromChild(eventEmitterValue:number)
  {
    this.outputAge = eventEmitterValue;
  }

  getGenderFromChild(gender:string){
    this.gender=gender;
  }
}
