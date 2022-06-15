import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-card',
  templateUrl: './front-card.component.html',
  styleUrls: ['./front-card.component.scss']
})
export class FrontCardComponent implements OnInit {


  @Input() title:String ='Heading';
  @Input() description:String = '';
  @Input() map:{lat:number,lan:number} | false = false
  @Input() img:String = ''
  @Input() link:any = 'https://google.com'
  constructor() { }

  ngOnInit(): void {
  }

}
