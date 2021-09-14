import { Component, OnInit } from '@angular/core';
import {Input, Output} from '@angular/core';
import {Patient} from './../classes';
@Component({
  selector: 'app-infos-patient',
  templateUrl: './infos-patient.component.html',
  styleUrls: ['./infos-patient.component.scss']
})
export class InfosPatientComponent implements OnInit {

  constructor() { }

  _patient : Patient;

  @Input()
  set patient(value:Patient){
    this._patient = value;
  }

  ngOnInit(): void {
  }

}
