import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() title = 'Page title';
  @Input() actions:{title:String,color:String,url:String}[] = [{title:'Simple action',color:'green',url:'/action-url'}]
  constructor() { }

  ngOnInit(): void {
  }

}
