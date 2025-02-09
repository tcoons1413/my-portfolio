import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const proofOfLife = async () => { 
      try {
        const response = await fetch('http://localhost:3002/');

        if (!response.ok) {
          throw new Error('Failed to connect to server');
        }
      } catch (error) {
        console.error('Error connecting to server:', error);
        alert('Error connecting to server. Please try again later.');
      }
    }
    proofOfLife();
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const sendEmail = async () => { 
        try {
          const response = await fetch('http://localhost:3002/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.contactForm.value),
          });

          if (!response.ok) {
            throw new Error('Failed to send email');
          }

          alert('Email sent successfully!');
          this.contactForm.reset();
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Error sending email. Please try again.');
        }
      };

      sendEmail();
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
