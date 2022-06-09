import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.scss']
})
export class ImageHolderComponent implements OnInit {

  @Input() src:String = '../../../assets/sheap-1.png'
  constructor() { }

  ngOnInit(): void {
  }

}
