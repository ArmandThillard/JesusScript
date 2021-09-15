import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Actor } from '../classes/Actor';
import { CodeableConcept } from '../classes/CodeableConcept';
import { Coding } from '../classes/Coding';
import { Observation } from '../classes/Observation';
import { Quantity } from '../classes/Quantity';

@Component({
  selector: 'app-new-observation',
  templateUrl: './new-observation.component.html',
  styleUrls: ['./new-observation.component.scss'],
})
export class NewObservationComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    code: ['', Validators.required],
    display: ['', Validators.required],
    value: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  @Output()
  notifyObservation: EventEmitter<Observation> = new EventEmitter<Observation>();

  onObservationSubmit() {
    console.log(this.checkoutForm);

    let f = this.checkoutForm.value;
    let observation = new Observation();

    let code = new CodeableConcept([new Coding(f.code, f.display)]);

    observation.code = code;
    observation.subject = new Actor('Patient/612e0350a5b46400122dx508');
    observation.valueQuantity = new Quantity(f.value);

    let date = new Date();

    var yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    var dateTime = new Date(mm + '-' + dd + '-' + yy);

    observation.effectiveDateTime = dateTime;
    observation.status = 'final';

    this.notifyObservation.emit(observation);
  }

  ngOnInit(): void {}
}
