import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { Configuration } from '../types';
import configurationEn from '../../assets/configuration/sample.json' 
import configurationPl from '../../assets/configuration/sample.json' 

@Injectable({
  providedIn: 'root'
})
export class InMemoryConfigurationService implements ConfigurationService {

  store: { [id: string]: Configuration; } = {
    'pl': configurationPl,
    'en': configurationEn,
    'en-US': configurationEn
  }

  default: Configuration = configurationEn;

  constructor() { }

  getConfiguration(lang: string): Observable<Configuration> {
    const response = this.store[lang] ?? this.default
    return of(response);
  }
}
