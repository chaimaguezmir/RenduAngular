import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css'],
})
export class ValidationMessagesComponent {
  @Input() control!: NgModel; // Le champ surveillé
  @Input() customMessages: { [key: string]: string } = {}; // Messages personnalisés

  get errorMessage(): string | null {
    if (this.control && this.control.errors) {
      for (const errorKey in this.control.errors) {
        if (this.control.errors.hasOwnProperty(errorKey)) {
          return (
            this.customMessages[errorKey] ||
            this.defaultMessages[errorKey] ||
            null
          );
        }
      }
    }
    return null;
  }

  private defaultMessages: { [key: string]: string } = {
    required: 'Ce champ est obligatoire.',
    minlength: 'Le champ est trop court.',
    maxlength: 'Le champ est trop long.',
    email: 'Entrez une adresse email valide.',
    pattern: 'Le format est invalide.',
  };
}
