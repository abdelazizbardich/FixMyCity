import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Output() onView = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();




  @Input() cols:any[] = []
  rows:any[][] = [[]]
  @Input() pageSize: number = 8
  activePage:number = 1
  pagesCount:number = 0
  @Input() data:any = [[{}]]
  isViewing:boolean = false;
  showCast:String| null = null;

  constructor() { }

  ngOnInit(): void {
    this.setData()
  }

  ngOnChanges(data: any) {
    this.setData()
  }

  setData(){
    this.rows = this.data.slice(((this.activePage-1)*this.pageSize),(((this.activePage-1)*this.pageSize)+this.pageSize))
    this.pagesCount = Math.ceil(this.data.length/this.pageSize)
  }

  setPageSize(event:any){
    this.pageSize = +event.target.value
    this.activePage = 1
    this.setData()
  }
  setActivePage(event:any){
    this.activePage = +event.target.value
    this.setData()
  }
  nextPage(){
    if(this.activePage < this.pagesCount)
      this.activePage++
    this.setData()
  }
  previousPage(){
    if(this.activePage > 1)
      this.activePage--
    this.setData()
  }

  getView(id:any){
    this.onView.emit(id)
  }
  getEdit(id:any){
    this.onEdit.emit(id)
  }
  getDelete(id:any){
    this.onDelete.emit(id)
  }

  callClose(){
    this.isViewing = false
    this.showCast = null
  }
  showCastImage(image:any){
    this.showCast = image
    this.isViewing = true
  }

}
