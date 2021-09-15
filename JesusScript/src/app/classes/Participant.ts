import { Actor } from "./Actor";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";

export class Participant{
    type : CodeableConcept[];
    actor : Actor;
    required : string;
    status : string;
    period : Period;

    constructor(actor: Actor, required, status){ 
        this.actor = actor;
        this.required = required;
        this. status = status;
    }

}