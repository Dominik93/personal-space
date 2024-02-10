import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from './configuration.service';
import { Configuration } from '../types';
import { Title } from '@angular/platform-browser';
import { ComponentMapper, SectionComponent } from './component-mapper';
import { SectionsVisializationComponent } from './sections-visialization/sections-visialization.component';


@Component({
  selector: 'ps-browser',
  standalone: true,
  imports: [
    CommonModule,
    SectionsVisializationComponent,
    NgbModule,
    RouterOutlet],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css'
})
export class BrowserComponent implements OnInit {

  configuration: Configuration = {
    id: "1",
    title: "",
    sections: []
  }

  constructor(
    @Inject("ConfigurationService") private configurationService: ConfigurationService,
    private title: Title) {
  }

  ngOnInit() {
    this.configurationService.getConfiguration()
      .subscribe(value => {
        this.title.setTitle(value.title);
        this.configuration = value;
      });
  }

}
