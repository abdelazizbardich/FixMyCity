import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-front-form-control',
  templateUrl: './front-form-control.component.html',
  styleUrls: ['./front-form-control.component.scss']
})
export class FrontFormControlComponent implements OnInit {


  @Input() type: String="text"
  @Input() disabled: Boolean=false
  @Input() placeholder: String="Simple placeholder..."
  @Input() actionTitle: String="Simple button"
  @Input() button:boolean = true;
  @Input() hint: String= "This is a simple hint placeholder."
  @Input() textbox:boolean = false
  @Input() name:String = ''
  @Output() value:any = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  setValue(target:any){
    this.value.emit(target.value)
  }

}
