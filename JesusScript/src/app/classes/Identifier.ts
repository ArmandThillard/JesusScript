import { Assigner } from "./Assigner";
import { CodeableConcept } from "./CodeableConcept";
import { Period } from "./Period";

export class Identifier{
    use : string;
    type : CodeableConcept;
    system : string;
    value : string;
    period : Period;
    assigner : Assigner;
}