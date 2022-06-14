import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-title',
  templateUrl: './front-title.component.html',
  styleUrls: ['./front-title.component.scss']
})
export class FrontTitleComponent implements OnInit {

  @Input() title:String[] = ["simple","title"];
  @Input() slug:String = "Simple slug line goes under title"
  @Input() class:String[] = ['title'];
  constructor() { }

  ngOnInit(): void {
    this.class.push('title')
  }

}
