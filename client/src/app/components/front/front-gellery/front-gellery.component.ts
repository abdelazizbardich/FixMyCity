import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-gellery',
  templateUrl: './front-gellery.component.html',
  styleUrls: ['./front-gellery.component.scss']
})
export class FrontGelleryComponent implements OnInit {

  @Input() cards:any = [];
  activeCards:any = [];
  @Input() pageSize:number = 0;
  @Input() pagination:boolean = false;
  canLoadMore:boolean = true;
  ActivePage:number = 1;
  pagesCount:[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.pageSize > 1 && this.pagination){
      this.paginate(this.ActivePage);
      this.pagesCount = Array(Math.ceil(this.cards.length / this.pageSize)).fill('') as []
    }else{
      this.activeCards = this.cards.slice(this.ActivePage -1,this.ActivePage*this.pageSize)
    }
  }

  ngOnChanges(cards: any) {
    this.ngOnInit()
  }


  paginate(page:number):void {
    this.activeCards = this.cards.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

  nextPage(){
    this.ActivePage++;
    this.paginate(this.ActivePage);
  }

  prevPage(){
    this.ActivePage--;
    this.paginate(this.ActivePage);
  }
  setPage(page:number){
    this.ActivePage = page;
    this.paginate(this.ActivePage);
  }

  loadMore(){
    if(this.ActivePage < Math.ceil(this.cards.length/this.pageSize)){
      this.ActivePage++
      this.activeCards.push(...this.cards.slice(((this.ActivePage*this.pageSize)-this.pageSize),(this.ActivePage*this.pageSize)))
    }
    if(!(this.ActivePage < Math.ceil(this.cards.length/this.pageSize))){
      this.canLoadMore = false
    }
  }

}
