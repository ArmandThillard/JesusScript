import { Component, OnInit } from '@angular/core';
import {Input, Output} from '@angular/core';
import {Patient} from './../classes/Patient';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-infos-patient',
  templateUrl: './infos-patient.component.html',
  styleUrls: ['./infos-patient.component.scss']
})
export class InfosPatientComponent implements OnInit {

  constructor() { }
  subtitleProfil : string = "Profil : ";
  _patient : Patient;
  dateNaissanceFrench:string;

  @Input()
  set patient(value:Patient){
    this._patient = value;

    this.dateNaissanceFrench=this._patient.birthDate;
  }
  ngOnInit(): void {
  }

}
