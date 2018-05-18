export class Customer {
    id:number;
    name: string;
    addresses: Address[];
    images:Images[];
}

export class Address {
    street: string;
    postcode: string;
}

export class Images{
    name:string;
    temp_name:string;
}