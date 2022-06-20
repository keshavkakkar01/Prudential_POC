import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssociateInfo } from './associate-info';

@Component({
  selector: 'app-associate-info',
  templateUrl: './associate-info.component.html',
  styleUrls: ['./associate-info.component.scss'],
})
export class AssociateInfoComponent implements OnInit {
  associateInfo: any = new AssociateInfo('', '', '', '', '');
  @Output() addEvent = new EventEmitter<AssociateInfo>();
  informationForm = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    projectId: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  submitAssociateInfo() {
    if (this.informationForm.valid) {
      this.associateInfo = <AssociateInfo>this.informationForm.value;
      this.addEvent.emit(this.associateInfo);
    }
  }
}
