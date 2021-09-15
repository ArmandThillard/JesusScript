import { Coding } from './Coding';

export class CodeableConcept {
  coding: Coding[];
  text: String;

  constructor(coding: Coding[]) {
    this.coding = coding;
    // this.text = text;
  }
}
