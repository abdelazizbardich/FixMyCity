import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

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
