import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-contact-form',
  templateUrl: './front-contact-form.component.html',
  styleUrls: ['./front-contact-form.component.scss']
})
export class FrontContactFormComponent implements OnInit {


  contactData:any = { name:'', email:'', subject:'', message:''}

  constructor() { }

  ngOnInit(): void {
  }

  setValue(key:String,value:any){
    this.contactData[key+''] = value
  }

  send(event:any){
    event.preventDefault()
    console.log(this.contactData);
  }

}
