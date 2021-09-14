import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";
import { Patient } from "./Patient";
import { Practitioner } from "./Practionner";

export class Schedule{

    resourceType : string = "Schedule";
    identifier : Identifier[];
    active : boolean;
    serviceCategory : CodeableConcept[];
    serviceType : CodeableConcept[];
    speciality : CodeableConcept[];
    actor : (typeof ACTOR)[number]["type"];

}

// https://stackoverflow.com/questions/64345341/define-a-typescript-type-from-properties-of-objects-in-a-list
const ACTOR = [
    {type: Patient},
    {type: Practitioner}
] as const;