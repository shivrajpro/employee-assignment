import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spry-health';

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      emailId: '',
      phoneNumber: '',
      doj: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('form', this.employeeForm);
  }
}
