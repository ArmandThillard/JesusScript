import { Actor } from './Actor';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';

export class Observation {
  id: String;
  resourceType: String = 'Observation';
  status: String;
  code: CodeableConcept;
  subject: Actor;
  performer: Actor[];
  effectiveDateTime: Date;
  valueQuantity: Quantity;
}
