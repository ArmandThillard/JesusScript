import { Actor } from "./Actor";
import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";

export class Observation{

    id: String
    identifier: Identifier[]
    status: String
    code: CodeableConcept
    subject: Actor
    performer: Actor[]
    effectiveDateTime: Date;
    valueString: String
}