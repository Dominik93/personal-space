import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { Configuration } from '../types';
import configuration from '../../assets/configuration/sample.json' 

@Injectable({
  providedIn: 'root'
})
export class InMemoryConfigurationService implements ConfigurationService {

  constructor() { }

  getConfiguration(): Observable<Configuration> {
    return of(configuration as Configuration);
  }
}
