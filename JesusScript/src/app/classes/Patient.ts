import { Address } from "./Address";
import { Identifier } from "./Identifier";
import { Name } from "./Name";
import { Telecom } from "./Telecom";

export class Patient{
    resourceType: string = "Patient";
    id : string;
    identifier: Identifier[];
    active : boolean;
    name : Name[];
    telecom : Telecom[];
    gender : string;
    birthDate : string;
    deceasedBoolean : boolean;
    address: Address[];
}