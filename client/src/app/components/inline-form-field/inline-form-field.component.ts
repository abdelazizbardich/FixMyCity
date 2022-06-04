import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inline-form-field',
  templateUrl: './inline-form-field.component.html',
  styleUrls: ['./inline-form-field.component.scss']
})
export class InlineFormFieldComponent implements OnInit {

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
