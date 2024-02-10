import { Configuration } from '../types';
import { Observable } from 'rxjs';

export interface ConfigurationService {

    getConfiguration: () => Observable<Configuration>;

}
