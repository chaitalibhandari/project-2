import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UsersService } from "./services/users.service";
import { User } from "./models/user";
import { HttpClient } from "@angular/common/http";


export class AppValidators {

    debouncer: any;
    
    constructor(private httpClient:HttpClient) {
        
    }


    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
       // console.log(control.value);
        if (control.value)
        {
        if((control.value as string).indexOf(' ') >= 0 ) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
        }
    }

    static matchPassword(control: AbstractControl): ValidationErrors | null  {
       // console.log(control.get('password').value);
        let password=control.get('password').value;
        let confirmPassword=control.get('cpassword').value;
        if(password != confirmPassword) {
           // console.log('sd');
            return {
                matchPassword:true
            };
        }
        
        return null;
    }

    static checkUser(userService: UsersService) {
        
        return (control: AbstractControl) => {

        let username=control.value; 

        const q = new Promise((resolve, reject) => {
            setTimeout(() => {
            
            userService.checkUsername(control.value).toPromise()
                .then(
                    res => { 
                        if(res==true)
                        {
                            resolve({ checkUser: true}); 
                        }
                        else{
                            resolve(null); 
                        }
                    },
                        msg => { 
                        reject(msg);
                        });
            }, 1000);
          });
          return q;
       
    }; 
   }

   static ifImage(control: AbstractControl)
   {
        console.log(control.value.type);
        if(control.value.type=='image/jpeg' || 
        control.value.type=='image/jpg' || 
        control.value.type=='image/png')
        {
            return null;
        }
        else{
            return ({ifImage:true}) ;   
        }
        //return null;
   }
    /*static checkUser(control: AbstractControl): any {

        const q = new Promise((resolve, reject) => {
            setTimeout(() => {
              this.userService.checkUser(control.value).subscribe(() => {
                resolve(null);
              }, () => { resolve({ 'isEmailUnique': true }); });
            }, 1000);
          });
          return q;
       
      }*/


    // Async validator
    static shouldBeUnique(control: AbstractControl): 
        Promise<ValidationErrors | null> {
        
        return new Promise(
            
            (resolve, reject) => {
                setTimeout(() => {
                    if(control.value === 'chaitali')
                        resolve({ shouldBeUnique: true});
                    else
                        resolve(null);
                }, 2000);
            }
        );
    } 
    
}
