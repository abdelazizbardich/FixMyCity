import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title:String[] = ["simple","title"];
  @Input() slug:String = "Simple slug line goes under title"
  @Input() class:String[] = ['title'];
  constructor() { }

  ngOnInit(): void {
    this.class.push('title')
  }

}
