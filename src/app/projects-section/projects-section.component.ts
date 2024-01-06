import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Image, Project, ProjectsSection } from '../types';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscriber, Subscription, interval } from 'rxjs';

@Component({
  selector: 'ps-projects-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NgbCarouselModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',

  encapsulation: ViewEncapsulation.None
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {

  @Input() section: ProjectsSection | undefined;

  currentProject: Project | undefined;

  currentImage: Image | undefined;

  images: Image[] = [];

  subscription: Subscription | undefined;

  index: number = 0;

  ngOnInit(): void {
    this.currentProject = this.section?.projects[0];
    this.currentImage = this.currentProject?.images[0];
    this.images = this.currentProject?.images ?? [];
    this.register();
  }

  onSlide(event: any) {
    this.index = 0;
    this.currentProject = this.section?.projects[event.current.split("-")[2]];
    this.images = this.currentProject?.images ?? [];
    this.currentImage = this.images[this.index];
    this.register();
  }

  private register() {
    this.unregister();
    this.subscription = interval(this.currentProject?.imageChangeInterval).subscribe(() => {
      this.changeImage();
    });
  }

  private unregister() {
    this.subscription?.unsubscribe();
  }

  private changeImage() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.currentImage = this.images[this.index];
  }

  ngOnDestroy() {
    this.unregister();
  }
}
