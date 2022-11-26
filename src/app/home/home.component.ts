import { Component } from '@angular/core';
import { gsap } from 'gsap';

interface WeDo {
  serviceName: string;
  serviceParagraphs: serviceParagraphs[];
}

interface serviceParagraphs {
  paragraph: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public weDo: WeDo[] = [
    {
      serviceName: 'FULL PRODUCT DEVELOPMENT',
      serviceParagraphs: [
        {
          paragraph: 'Enterprise software development',
        },
        {
          paragraph: 'Businessprocess automation tools',
        },
        {
          paragraph: 'CRM development',
        },
        {
          paragraph: 'Custrom marketplace & warehouse solutions',
        },
        {
          paragraph: 'Custrom marketplace & warehouse solutions',
        },
      ],
    },
    {
      serviceName: 'mobile app development',
      serviceParagraphs: [
        {
          paragraph: 'Native app development (ios & android)',
        },
        {
          paragraph: 'Hybrid app development react native',
        },
      ],
    },
    {
      serviceName: 'AI/ml and iot solution development',
      serviceParagraphs: [
        {
          paragraph: 'Computer vision',
        },
        {
          paragraph: 'Video streaming',
        },
        {
          paragraph: 'Image recognition',
        },
        {
          paragraph: 'Connected devices',
        },
      ],
    },
    {
      serviceName: 'big data analysis & solutions',
      serviceParagraphs: [
        {
          paragraph: 'Data analytics & management',
        },
        {
          paragraph: 'Data science',
        },
      ],
    },
    {
      serviceName: 'technology consulting',
      serviceParagraphs: [
        {
          paragraph: 'Technology/architecture consulting',
        },
        {
          paragraph: 'Business model definition',
        },
        {
          paragraph: 'Product roadmap',
        },
        {
          paragraph: 'MVP scope definition/documentation',
        },
      ],
    },
    {
      serviceName: 'Embeded solutions',
      serviceParagraphs: [
        {
          paragraph: 'Embedded software',
        },
        {
          paragraph: 'System integration',
        },
      ],
    },
  ];

  //hover
  trans(e: boolean) {
    let tl = gsap.timeline();

    if (e === true) {
      tl.to('.container__tool-tech-box', {
        duration: 1,
        backgroundColor: '#2929cc',
      }).to(
        '.containercontaimer__box-title, .container__tool-tech-desc',
        {
          color: '#fff',
        },
        '<'
      );
    } else {
      gsap.to('.container__tool-tech-box', {
        duration: 1,
        backgroundColor: '#fff',
        color: '#000',
      });
    }
  }
}

// trans(e: boolean) {
//   if (e === true) {
//     gsap.to('.container__tool-tech-box', {
//       duration: 1,
//       backgroundColor: '#2929cc',
//       color: '#fff',
//     });
//   } else {
//     gsap.to('.container__tool-tech-box', {
//       duration: 1,
//       backgroundColor: '#fff',
//       color: '#000',
//     });
//   }
// }
