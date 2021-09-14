import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";
import { Schedule } from "./Schedule";

export class Slot{

    resourceType : string = "Slot";
    identifier : Identifier[];
    serviceCategory : CodeableConcept[];
    serviceType : CodeableConcept[];
    speciality : CodeableConcept[];
    appointmentType : CodeableConcept;
    schedule : Schedule;

}