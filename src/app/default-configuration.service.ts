import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { Configuration } from './types';

@Injectable({
  providedIn: 'root'
})
export class DefaultConfigurationService implements ConfigurationService {

  constructor() { }

  getConfiguration(): Observable<Configuration> {
    const configuration: Configuration = {
      menuSection: {
        title: "",
        style: ""
      },
      sections: []
    }
    return of(configuration);
  }

}
