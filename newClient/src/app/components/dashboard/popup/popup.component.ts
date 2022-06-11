import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() title:String = 'Page title';

  @Output() onCreate = new EventEmitter<boolean>();
  @Output() onUpdate = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<boolean>();
  @Output() onClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.onClose.emit(true)
  }
  save(){
    this.onCreate.emit(true)
  }
  update(){
    this.onUpdate.emit(true)
  }
  delete(){
    this.onDelete.emit(true)
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode == 27){
      this.close()
    }
  }
}
