import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title:String ='Heading';
  @Input() description:String = '';
  @Input() map:{lat:number,long:number} | false = false
  @Input() img:String = ''
  @Input() link:any = 'https://google.com'
  constructor() { }

  ngOnInit(): void {
  }

}
