import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,AfterViewInit {
  name = 'Angular';
  simpleVariable: string = 'Start editing to see some magic happen :)';

  typeOfGender;
  isCheckboxDisabled:boolean = true;
  age: any;
  doShowData:boolean = false;

  constructor(){
    this.typeOfGender = false;
  }

  ngOnInit(){
    console.log('component is initialized');
    // Db call 
    this.typeOfGender = false;
  }

  ngAfterViewInit(){
    console.log('component is rendered !!');
  }

  myFunc(){
    return "this is test string";
  }

  chechBoxClick(event:Event){
    console.log('I am clicked !!'+ event.target);
  }

  getAge(age:any){
    console.log(age);
  }

  getEmail(mailId:string){
    console.log(mailId);
  }

  shouldIShowData(){
    return false;
  }

  getListOfAges(){
    return [30,34,38];
  }
}
