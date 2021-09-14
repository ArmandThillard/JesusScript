import { Period } from "./Period";

export class Address{
    use : string;
    type : string;
    text : string;
    line : string[];
    city : string;
    district : string;
    state : string;
    postalCode: string;
    country: string;
    period: Period;
}