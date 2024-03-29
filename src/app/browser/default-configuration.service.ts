import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { Configuration } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DefaultConfigurationService implements ConfigurationService {

  constructor() { }

  getConfiguration(lang: string): Observable<Configuration> {
    const configuration: Configuration = {
      id: Date.now().toString(),
      title: "",
      sections: {}
    }
    return of(configuration);
  }

}
