import { Component } from '@angular/core';

interface WeDo {
  serviceName: string;
  serviceParagraphs: serviceParagraphs[];
}

interface serviceParagraphs {
  paragraph: string;
  dot: string;
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
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Businessprocess automation tools',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'CRM development',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Custrom marketplace & warehouse solutions',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Custrom marketplace & warehouse solutions',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
    {
      serviceName: 'mobile app development',
      serviceParagraphs: [
        {
          paragraph: 'Native app development (ios & android)',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Hybrid app development react native',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
    {
      serviceName: 'AI/ml and iot solution development',
      serviceParagraphs: [
        {
          paragraph: 'Computer vision',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Video streaming',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Image recognition',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Connected devices',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
    {
      serviceName: 'big data analysis & solutions',
      serviceParagraphs: [
        {
          paragraph: 'Data analytics & management',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Data science',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
    {
      serviceName: 'technology consulting',
      serviceParagraphs: [
        {
          paragraph: 'Technology/architecture consulting',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Business model definition',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'Product roadmap',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'MVP scope definition/documentation',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
    {
      serviceName: 'Embeded solutions',
      serviceParagraphs: [
        {
          paragraph: 'Embedded software',
          dot: '../../assets/svg/icons/circle.svg',
        },
        {
          paragraph: 'System integration',
          dot: '../../assets/svg/icons/circle.svg',
        },
      ],
    },
  ];
}
