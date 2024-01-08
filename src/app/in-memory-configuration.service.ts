import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { AboutMeSection, Configuration, TimelineSection, ProjectsSection, SkillsSection } from './types';
import { right } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryConfigurationService implements ConfigurationService {

  constructor() { }

  getConfiguration(): Observable<Configuration> {
    const aboutMeSection: AboutMeSection = {
      type: "ABOUT_ME",
      style: "",
      label: "About me",
      anchor: "aboutme",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id magna et ligula efficitur ullamcorper. Cras porta gravida leo, in ornare ex gravida et. Donec nibh libero, lobortis quis mollis vel, malesuada a tellus. Nunc tempor rutrum lectus sed scelerisque. Etiam justo leo, auctor eget enim quis, consequat consequat orci. Pellentesque leo elit, pretium vel vestibulum a, bibendum id risus. Mauris faucibus, eros eget ultrices sagittis, dui nunc pretium purus, a convallis neque sapien in nisl. Nunc vitae urna commodo, luctus est in, auctor nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ante metus, sodales rutrum elementum ut, lobortis sed dui. Donec eu lectus sit amet dolor finibus accumsan eget id lacus. Etiam ac maximus tellus. Cras ac cursus felis. Integer a elit egestas, pellentesque urna non, fringilla erat. Integer ut dictum lectus. ",
      image: {
        url: "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
        alt: "My Picture",
        style: "width: 400px; border-radius: 50%;"
      },
      socialMediaStyle: "display: inline; margin-right: 15px;",
      socialMedia: [
        {
          name: "GitHub",
          link: "https://github.com/",
          icon: "https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png",
          style: "width: 50px;"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com",
          icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png",
          style: "width: 50px;"
        },
        {
          name: "Mail",
          link: "mailto:name.surname@domain.com",
          icon: "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png",
          style: "width: 50px;"
        }
      ]
    };
    const projectsSection: ProjectsSection = {
      type: "PROJECTS",
      style: "background-color: beige",
      label: "My work",
      anchor: "projects",
      additionalInfo: "I have worked on dozens of projects so I have picked only the latest for you.",
      projects: [
        {
          name: "Project 1",
          tag: "Web",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis tempus mauris, vitae pulvinar nibh egestas quis. Donec eu metus id erat sagittis maximus a sed nisl. Fusce vestibulum tortor leo, nec pellentesque turpis finibus eget. Integer commodo, ex at ullamcorper fringilla, lacus risus commodo tellus, eget consequat sem nisi non mauris. Aliquam elit sem, porta id arcu eget, dignissim sollicitudin sem. Suspendisse commodo ut urna sit amet pharetra. Donec quis pellentesque nulla. Donec varius leo in diam aliquam egestas. Vestibulum ac tempor tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus nec sagittis elit. Nulla ornare euismod urna, tincidunt elementum erat efficitur sit amet. Duis elementum, elit id dictum eleifend, orci dui hendrerit eros, sed varius est augue ac magna.",
          shortDescription: "Lorem ipsum dolor sit amet...",
          imageChangeInterval: 5000,
          images: [
            {
              url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
              alt: "Project_1 Photo 1",
              style: "width: 100%;"
            }
          ]
        },
        {
          name: "Project 2",
          tag: "Web",
          description: "Phasellus mollis non elit vel finibus. Phasellus tellus nunc, dictum sit amet eleifend aliquam, posuere a nunc. Aenean vel leo ultricies, rutrum quam ac, feugiat lorem. Etiam ornare diam ut dolor varius fermentum id interdum ante. Donec laoreet diam ut urna rutrum egestas. Duis elementum, felis ut pellentesque dignissim, mauris ipsum posuere diam, at tincidunt odio sem nec turpis. Praesent suscipit, neque ac semper mollis, ex lectus vestibulum dolor, eget tristique tortor nisi et nisi.",
          shortDescription: "Phasellus mollis...",
          imageChangeInterval: 5000,
          images: [
            {
              url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
              alt: "Project_2 Photo 1",
              style: "width: 100%;"
            },
            {
              url: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
              alt: "Project_2 Photo 2",
              style: "width: 100%;"
            },
            {
              url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
              alt: "Project_2 Photo 3",
              style: "width: 100%;"
            }
          ]
        },
        {
          name: "Project 3",
          tag: "Other",
          description: "Suspendisse potenti. Morbi dapibus nunc diam, at bibendum nibh rhoncus nec. Etiam maximus dui ac pulvinar lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dolor eros, maximus ac diam in, egestas tempor ex. Aliquam consectetur, eros ut consequat tempus, dui elit gravida elit, a imperdiet erat diam eget orci. Phasellus libero urna, cursus non lacus eu, egestas dignissim nunc. Etiam accumsan tellus diam, eu dictum est posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent massa mauris, efficitur quis ipsum id, pellentesque vehicula lectus. In gravida porttitor massa, sed porttitor mauris vulputate vehicula.",
          shortDescription: "Suspendisse potenti.",
          imageChangeInterval: 5000,
          images: [
            {
              url: "not exist",
              alt: "Project_3 Photo 1 not exist",
              style: "width: 100%;"
            }
          ]
        },
        {
          name: "Project 4",
          tag: "Other",
          description: "Suspendisse potenti. Morbi dapibus nunc diam, at bibendum nibh rhoncus nec. Etiam maximus dui ac pulvinar lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dolor eros, maximus ac diam in, egestas tempor ex. Aliquam consectetur, eros ut consequat tempus, dui elit gravida elit, a imperdiet erat diam eget orci. Phasellus libero urna, cursus non lacus eu, egestas dignissim nunc. Etiam accumsan tellus diam, eu dictum est posuere non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent massa mauris, efficitur quis ipsum id, pellentesque vehicula lectus. In gravida porttitor massa, sed porttitor mauris vulputate vehicula.",
          shortDescription: "Suspendisse potenti.",
          imageChangeInterval: 5000,
          images: [
            {
              url: "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
              alt: "Project_4 Photo 2",
              style: "width: 100%; border-radius: 10%;"
            },
            {
              url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D",
              alt: "Project_4 Photo 1",
              style: "width: 100%; border-radius: 20%;"
            },
            {
              url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
              alt: "Project_4 Photo 3",
              style: "width: 100%; border-radius: 30%;"
            },
            {
              url: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
              alt: "Project_4 Photo 5",
              style: "width: 100%; border-radius: 40%;"
            },
            {
              url: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3R8ZW58MHx8MHx8fDA%3D",
              alt: "Project_4 Photo 4",
              style: "width: 100%; border-radius: 50%;"
            }
          ]
        }
      ]
    }

    const skillsSectionpProgresBar: SkillsSection = {
      type: "SKILLS",
      style: "",
      mode: 'PROGRESS_BAR',
      label: "Skills",
      anchor: "skills",
      skills: [
        {
          name: "Spring boot",
          image: {
            alt: "Spring boot",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKbe3Vg5PJ4wpjlDUy-noAzkT0dqhknQR4TL86jNAKA&s",
            style: "width: 100%",
          },
          style: "background-color: lime",
          level: 80
        },
        {
          name: "Openshift",
          image: {
            alt: "Openshift",
            url: "https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-5/32/logo--openshift-512.png",
            style: "width: 100%",
          },
          style: "background-color: black",
          level: 30
        },
        {
          name: "Java",
          image: {
            alt: "Java",
            url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
            style: "width: 100%",
          },
          style: "",
          level: 80
        },
        {
          name: "Angular",
          image: {
            alt: "Angular",
            url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
            style: "width: 100%",
          },
          style: "background-color: red",
          level: 70
        },
        {
          name: "JUnit",
          image: {
            alt: "JUnit",
            url: "https://junit.org/junit5/assets/img/junit5-logo.png",
            style: "width: 100%",
          },
          style: "background-color: green",
          level: 100
        },
      ]
    }

    const skillsSectionpIcons: SkillsSection = {
      type: "SKILLS",
      style: "background-color: beige",
      mode: 'ICONS',
      label: "Skills",
      anchor: "skills",
      skills: [
        {
          name: "Spring boot",
          image: {
            alt: "Spring boot",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKbe3Vg5PJ4wpjlDUy-noAzkT0dqhknQR4TL86jNAKA&s",
            style: "width: 50%",
          },
          style: "",
          level: 80
        },
        {
          name: "Openshift",
          image: {
            alt: "Openshift",
            url: "https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-5/32/logo--openshift-512.png",
            style: "width: 50%",
          },
          style: "",
          level: 30
        },
        {
          name: "Java",
          image: {
            alt: "Java",
            url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
            style: "width: 50%",
          },
          style: "",
          level: 80
        },
        {
          name: "Angular",
          image: {
            alt: "Angular",
            url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
            style: "width: 50%",
          },
          style: "",
          level: 70
        },
        {
          name: "JUnit",
          image: {
            alt: "JUnit",
            url: "https://junit.org/junit5/assets/img/junit5-logo.png",
            style: "width: 50%",
          },
          style: "",
          level: 100
        },
      ]
    }

    const timelineSection: TimelineSection = {
      type: "TIMELINE",
      style: "color:white; background-image: url(https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      label: "Timelaps",
      anchor: "timelaps",
      events: [
        {
          name: "Company 1",
          description: "Company 1 short desc",
          details: "Lorem ipsum dolor sit amet,<p>consectetur<p> adipiscing elit.<br> Aenean auctor mauris at neque efficitur, ac porta purus fringilla. Vestibulum tincidunt iaculis facilisis. Fusce mollis ante sed sodales auctor. Vestibulum sit amet dictum dolor. Sed eu mauris vel augue vestibulum congue vel vel orci. Aliquam non ipsum ante. Fusce at eleifend orci. "
        },
        {
          name: "Company 2",
          description: "Company 2 short desc",
          details: "Donec eu volutpat mi, et iaculis massa. Duis efficitur euismod viverra. Aliquam tincidunt ac urna ut consequat. Cras vel leo ipsum. Aliquam cursus augue venenatis risus vulputate sagittis. Phasellus dictum lectus vitae justo iaculis pellentesque. Duis felis mauris, tristique ut pharetra eu, dignissim quis quam. Vivamus velit risus, aliquet egestas dui eget, sollicitudin hendrerit urna. Aenean at tortor sit amet metus rutrum malesuada nec at lorem. Morbi et tempus dolor. Nunc vestibulum mauris eget lorem varius dapibus. Proin ullamcorper risus varius orci lacinia accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis magna sit amet justo ultricies, vitae lobortis lacus lobortis. Vivamus semper tempus mi, ac euismod erat tincidunt eu. "
        },
        {
          name: "University 3",
          description: "University 3 short desc",
          details: "Sed vitae consequat quam, non auctor velit. Donec ultrices ante lobortis, mollis urna gravida, pharetra massa. Donec tristique molestie velit, sit amet eleifend mauris pellentesque in. In efficitur accumsan turpis, consectetur gravida lorem tincidunt sit amet. Cras scelerisque quam id tellus fringilla, id molestie mauris venenatis. Nulla eget bibendum dolor. Pellentesque ultrices est vel lectus facilisis, eu sagittis dolor convallis. Pellentesque varius dui sit amet dictum commodo. Nam vitae ornare erat. Mauris sollicitudin bibendum semper. "
        }
      ]
    }

    const configuration: Configuration = {
      menuSection: {
        title: "Name Surname",
        style: "ms-auto", // me-auto, ms-auto
      },
      sections: {
        aboutMe: aboutMeSection,
        skillsSectionpIcons: skillsSectionpIcons,
        skillsSectionpProgresBar: skillsSectionpProgresBar,
        projects: projectsSection,
        timeline: timelineSection
      }
    }
    return of(configuration);
  }
}
