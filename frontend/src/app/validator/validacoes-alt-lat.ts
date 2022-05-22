import { FormControl } from "@angular/forms";


export class validationLongitude{
    static validation = (control: FormControl): any=>{ 
        const logintude = Number(control.value);
        if (logintude > 90 || logintude <-90 )
            return {invalido: true};
        else{
            return null;
        }
    }
}

export class validationLatitude{
    static validation1 = (control: FormControl): any=>{ 
        const latitude = Number(control.value);
        if (latitude > 180 || latitude <-180 )
            return {invalido: true};
        else{
            return null;
        }
    }
}
