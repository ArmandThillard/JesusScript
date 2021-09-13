export class Patient{
    resourceType: string;
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

export class Identifier{
    use : string;
    value : string;
    period : Period;
    assigner : Assigner;
}

export class Assigner{
    display : string;
}

export class Name{
    use : string;
    family : string;
    given : string[];
}

export class Telecom{
    system : string;
    value : string;
    use : string;
    rank : number;
}

export class Address{
    use : string;
    type : string;
    line : string[];
    city : string;
    postalCode: string;
    country: string;
    period: Period;
}

export class Period{
    start: string;
    //end: string;
}

export class Practitioner{

}
export class Consultation{

}
export class Observation{

}