import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationService } from './configuration.service';
import { Configuration } from './types';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './sections/menu/menu.component';
import { SpaceComponent } from './components/space/space.component';
import { Title } from '@angular/platform-browser';
import { ComponentMapper, SectionComponent } from './component-mapper';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    NgbModule,

    HeaderComponent,
    SpaceComponent,

    MenuComponent,

    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  components: SectionComponent[] = [];

  configuration: Configuration = {
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
        this.components = ComponentMapper.toComponents(this.configuration.sections);
      });
  }


}
