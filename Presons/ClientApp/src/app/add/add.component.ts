import { Person } from './../models/Person';
import { Gender } from './../models/Gender';
import { Component, OnInit, Pipe } from '@angular/core';
import { HttpService } from './../services/HttpService';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DateValidator } from './../helpers/dateValidator';
import { EqualValidator } from './../helpers/EqualValidator';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  personForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  personalNumber: FormControl;
  personalNumberDuplicate: FormControl;
  birthdate: FormControl;
  gender: FormControl;
  salary: FormControl;
  personalNumbers: FormGroup;
  isEqual: boolean = false;
  person: Person;
  value: Date = new Date(2018, 12, 13);

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }


  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.personalNumber = new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.maxLength(11), Validators.required]);
    this.personalNumberDuplicate = new FormControl('', );
    this.birthdate = new FormControl(this.value, Validators.pattern('^(\d{1-2})\/(\d{1-2})\/(\d{4})$/'));   //'/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/'
    this.gender = new FormControl('', Validators.required);
    this.salary = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]);
    this.personalNumbers = new FormGroup({
      personalNumber: this.personalNumber,
      personalNumberDuplicate: this.personalNumberDuplicate
    }, AddComponent.matchValidator);
  }

  static matchValidator(group: FormGroup) {
    var valid = false;
    let arr = [];
    for (let name in group.controls) {
      arr.push(group.controls[name].value);
    }
    if (arr[0] === arr[1])
      valid = true;
    if (valid) {
      return null;
    }

    

    return {
      "matchValidator": true
    };;
  }

  duplicateChange(event) {
    if (this.personalNumber.value == this.personalNumberDuplicate.value) {
      this.isEqual = false;
    }
    else {
      this.isEqual = true;
    }
  }

  createForm() {
    this.personForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      personalNumbers: this.personalNumbers,
      birthdate: this.birthdate,
      gender: this.gender,
      salary: this.salary
    })
  }

  onSubmit() {
    this.person = new Person();
    let data = this.birthdate.value;
    this.person.birthdate = new Date(this.birthdate.value);
    this.person.firstName = this.firstName.value;
    this.person.lastName = this.lastName.value;
    this.person.gender = this.gender.value;
    this.person.personalNumber = this.personalNumber.value;
    this.person.salary = this.salary.value;
    this.httpService.createPerson(this.person).subscribe(err => {
      console.log(err);
    });
    this.personForm.reset();
  }
}
