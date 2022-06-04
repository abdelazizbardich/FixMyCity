import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-normal',
  templateUrl: './button-normal.component.html',
  styleUrls: ['./button-normal.component.scss']
})
export class ButtonNormalComponent implements OnInit {

  @Input() title:any = "Simple Button";
  @Input() disabled:Boolean = false;
  @Input() class:String[] = ['large'];
  @Input() target:any;
  @Input() link:any;

  constructor() { }

  ngOnInit(): void {
  }

}
