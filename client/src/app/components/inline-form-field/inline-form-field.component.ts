import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inline-form-field',
  templateUrl: './inline-form-field.component.html',
  styleUrls: ['./inline-form-field.component.scss']
})
export class InlineFormFieldComponent implements OnInit {

  @Input() type: String="email"
  @Input() disabled: Boolean=false
  @Input() placeholder: String="'Your email address...'"
  @Input() actionTitle: String="Subscribe"
  @Input() hint: String= "Your infos are always in safe, we won't share your e-mail with anyone."
  constructor() { }

  ngOnInit(): void {
  }

}
