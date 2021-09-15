import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '../classes/Appointment';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  _consultation : Appointment;

  constructor() { }

  ngOnInit(): void {
  }

  get consultation(){
    return this._consultation;
  }

  @Input()
  set consultation(value: Appointment){
    this._consultation = value;
  }

  parseDateTime(value : Date){
    //value.split("T");

    return value;
  }

}
