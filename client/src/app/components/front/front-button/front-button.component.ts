import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-button',
  templateUrl: './front-button.component.html',
  styleUrls: ['./front-button.component.scss']
})
export class FrontButtonComponent implements OnInit {

  @Input() title:any = "Simple Button";
  @Input() disabled:Boolean = false;
  @Input() class:String[] = ['large'];
  @Input() target:any;
  @Input() link:any;


  constructor() { }

  ngOnInit(): void {
  }

}
