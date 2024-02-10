import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedSectionService {

  private selectedSection: Subject<any> = new Subject<any>();

  constructor() { }

  setSelectedSection(data: any) {
    this.selectedSection.next(data);
  }

  getSelectedSection(): Observable<any> {
    return this.selectedSection.asObservable();
  }
}
