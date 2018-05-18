export class Car {
    id: number;
    name: string;
    description: string;
    model:string;
    price: string;
    isAvailable: boolean;
    details:Details[];
  
  }

  export class Details {
    title: string;
    description: string;
    image:Images[];
}

  export class Images{
    image:string;
    temp_name:string;
  }
  