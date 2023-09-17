import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {

        private formBuilder: FormBuilder;

        constructor(formBuilder: FormBuilder){
            this.formBuilder = formBuilder;
        }

        createForm() : FormGroup {
            return this.formBuilder.group({
                email: [''],
                password:['', [Validators.required]],
        });

     }

}
export class LoginPageForm1 {

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm() : FormGroup {
        return this.formBuilder.group({
            telephone:[''],
            password:['', [Validators.required]],
    });

 }

}