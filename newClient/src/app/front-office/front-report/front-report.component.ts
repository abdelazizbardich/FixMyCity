import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/Services/front/reports.service';


@Component({
  selector: 'app-front-report',
  templateUrl: './front-report.component.html',
  styleUrls: ['./front-report.component.scss']
})
export class FrontReportComponent implements OnInit {

  @ViewChild('details') details: ElementRef<HTMLDivElement> | undefined;
  projectId:any;
  projects:any = [];
  project:any;
  vote:boolean = false;
  constructor(private reportService:ReportsService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.reportService.getReport(this.route.snapshot.paramMap.get('id') as unknown as number).subscribe((res:any)=>{
      this.project = {
        title:res.body.problem?.name,
        desc:res.body.note,
        img:res.body.photo,
        map:{lat:res.body.lat,lan:res.body.lan},
        url:"/report/"+res.body.id
      }
    })
  }

  ngAfterViewInit(){
    // @ts-ignore: Unreachable code error
    this.details.nativeElement.ondragstart = (event:any)=>{
      // @ts-ignore: Unreachable code error
      var crt = this.details.nativeElement.cloneNode(true);
      // @ts-ignore: Unreachable code error
      crt.style.backgroundColor = "red";
      // @ts-ignore: Unreachable code error
      crt.style.display = "none"; /* or visibility: hidden, or any of the above */
      document.body.appendChild(crt);
      // @ts-ignore: Unreachable code error
      event.dataTransfer.setDragImage(crt, 0, 0);
    }
    // @ts-ignore: Unreachable code error
    this.details.nativeElement.ondrag = (event:any)=>{
      event.preventDefault();
      // @ts-ignore: Unreachable code error
      this.details?.nativeElement.style = "left:"+event.clientX+"px;top:"+event.clientY+"px;bottom:auto;right:auto;transform: translateX(-50%);";
    }

    // @ts-ignore: Unreachable code error
    this.details.nativeElement.ondragend = (event:any)=>{
      // @ts-ignore: Unreachable code error
      this.details?.nativeElement.style = "left:"+event.clientX+"px;top:"+event.clientY+"px;bottom:auto;right:auto;transform: translateX(-50%);";
    }
  }


}
