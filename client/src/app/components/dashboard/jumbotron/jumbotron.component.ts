import { AccessGuardService } from 'src/app/Services/access-guard/access-guard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  isAdmin:boolean = false;
  @Input() title = 'Page title';
  @Input() actions:{title:String,color:String,url:String}[] = [{title:'Simple action',color:'green',url:'/action-url'}]
  constructor(private accessGuardService:AccessGuardService) { }

  ngOnInit(): void {

    this.isAdmin = this.accessGuardService.isAdmin();
  }

}
