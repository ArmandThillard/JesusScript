import { CodeableConcept } from "./CodeableConcept";
import { Identifier } from "./Identifier";
import { Participant } from "./Participant";
import { Period } from "./Period";
import { Slot } from "./Slot";

export class Appointment{

    // GET sur https://fhir.eole-consulting.io/api/appointment

    resourceType : string = "Appointment";
    id : string;
    identifier : Identifier[];
    priority : number;
    description : string;
    minutesDuration : number;
    created : Date;
    comment : string;
    participant : Participant[];
    requestedPeriod : Period[];
    status : (typeof STATUS)[number]["name"];
//    cancelationReason : CodeableConcept;
//    serviceCategory : CodeableConcept[];
//    serviceType : CodeableConcept[];
//    speciality : CodeableConcept[];
//    appointmentType : CodeableConcept;
//     reasonCode : CodeableConcept[];
//    reasonReference :
//    supportingInformation :
//    start : Date;
//    end : Date;
//    slot : Slot[];
//    patientInstruction : string;
//    basedOn :
}

// https://stackoverflow.com/questions/64345341/define-a-typescript-type-from-properties-of-objects-in-a-list
const STATUS = [
    {name: 'proposed'},
    {name: 'pending'},
    {name: 'booked'},
    {name: 'arrived'},
    {name: 'fulfilled'},
    {name: 'cancelled'},
    {name: 'noshow'},
    {name: 'entered-in-error'},
    {name: 'checked-in'},
    {name: 'waitlist'}
] as const;