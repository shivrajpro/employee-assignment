import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface Employee {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: number;
  address: string;
  position: string;
  doj: string;
}

const ELEMENT_DATA: Employee[] = [
  {
    firstName: 'abc',
    lastName: 'def',
    emailId: 'abc@def.com',
    phoneNumber: 9876543210,
    address: 'ascavde',
    position: 'Manager',
    doj: '20 March 2024',
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spry-health';
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'emailId',
    'phoneNumber',
    'address',
    'position',
    'doj',
  ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable) table: MatTable<Employee> | undefined;

  employeeForm: FormGroup;
  positionDropdown = ['Manager', 'Developer', 'Designer', 'HR'];
  clientDropdown = ['Client A', 'Client B', 'Client C'];

  selectedClient: string = 'Client A';

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern(/^[0-9]{10,10}$/)]],
      address: '',
      position: '',
      doj: '',
    });
  }

  ngOnInit(): void {}

  get emailId() {
    return this.employeeForm.controls['emailId'];
  }

  get phoneNumber() {
    return this.employeeForm.controls['phoneNumber'];
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log('form', this.employeeForm.value);
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      this.dataSource.push(employee);
      console.log('ds', this.dataSource);
      this.table?.renderRows();

      //reset
      formDirective.resetForm();
      this.employeeForm.reset();
    }
  }
}
