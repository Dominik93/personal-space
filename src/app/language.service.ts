import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getBrowserLanguage(): string {
    return navigator.language ?? 'en';
  }
}
