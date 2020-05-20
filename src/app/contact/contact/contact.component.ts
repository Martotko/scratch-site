import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    public contactForm: FormGroup;
    private buttonClicked: boolean;

    constructor(
        private fb: FormBuilder,
        private firebaseService: FirebaseService,
        private toastrService: ToastrService
    ) {}

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            description: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(10000)]],
        });
    }

    public get name() {
        return this.contactForm.get('name');
    }
    public get email() {
        return this.contactForm.get('email');
    }
    public get phoneNumber() {
        return this.contactForm.get('phoneNumber');
    }
    public get description() {
        return this.contactForm.get('description');
    }

    public submitForm() {
        if (this.contactForm.valid && !this.buttonClicked) {
            this.buttonClicked = true;
            this.firebaseService
                .createMessage(this.contactForm.value)
                .then(v => {
                    console.log("Document written with ID: ", v.id);
                    this.buttonClicked = false;
                    this.toastrService.success('Message send Successful!');
                    this.contactForm.reset();
                })
                .catch(err => {
                    this.buttonClicked = false;
                    this.toastrService.error('Something is wrong! Please try again!');
                });
        } else {
            // Mark fields as touched to trigger validations
            this.toastrService.warning('Please fill all fields in the form!');
            Object.values(this.contactForm.controls).forEach(key => key.markAsTouched());
        }
    }
}
