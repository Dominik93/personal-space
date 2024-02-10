import { Configuration } from '../types';
import { Observable } from 'rxjs';

export interface ConfigurationService {

    getConfiguration: (lang: string) => Observable<Configuration>;

}
