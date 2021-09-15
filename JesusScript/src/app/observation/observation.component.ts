import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observation } from '../classes/Observation';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss'],
})
export class ObservationComponent implements OnInit {
  _observation: Observation;

  constructor() {}

  get code() {
    return this._observation.code.coding[0];
  }

  get observation() {
    return this._observation;
  }

  @Output()
  notifyDeleteObservation: EventEmitter<Observation> = new EventEmitter<Observation>();

  @Input()
  set observation(value: Observation) {
    this._observation = value;
  }

  onDeleteObservation() {
    this.notifyDeleteObservation.emit(this._observation);
  }

  ngOnInit(): void {}
}
