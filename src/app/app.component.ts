import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spry-health';

  employeeForm: FormGroup;
  positionDropdown = ['Manager', 'Developer', 'Designer', 'HR'];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.maxLength(10)]],
      address: '',
      position: '',
      doj: '',
    });
  }

  ngOnInit(): void {}

  get emailId() {
    return this.employeeForm.controls['emailId'];
  }

  onSubmit() {
    console.log('form', this.employeeForm);
    // this.employeeForm.reset();
  }
}
