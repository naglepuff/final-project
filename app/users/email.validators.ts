import {Control} from 'angular2/common';

export class EmailValidators{
    static cannotBeInvalid(control: Control){
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        // if(!control.value){
        //     return {"Please provide a valid email": true};
        // }
       
        if (!control.value || control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }

        return null;
    }
}