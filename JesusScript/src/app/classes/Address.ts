import { Period } from "./Period";

export class Address{
    use : string;
    type : string;
    line : string[];
    city : string;
    postalCode: string;
    country: string;
    period: Period;
}