import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AnimationService } from '../../service/animations/animation.service';

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
export class HomeComponent implements OnInit {
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

  constructor(private animation: AnimationService) {}
  tlOne = gsap.timeline();
  tlTwo = gsap.timeline();
  tlThree = gsap.timeline();

  fadeIn(id: number) {
    if (id === 1) {
      let background = '.firstRow';
      let text = '.fistRowText';
      let icon = '.iconOne';
      this.tlOne
        .to(background, {
          backgroundColor: '#2929cc',
        })
        .to(
          text,
          {
            color: '#fff',
          },
          '<'
        )
        .to(
          icon,
          {
            autoAlpha: 1,
          },
          '<'
        );
      this.tlOne.restart();
    } else if (id === 2) {
      let backgroundTwo = '.secondRow';
      let textTwo = '.secondRowText';
      let iconTwo = '.iconTwo';

      this.tlTwo
        .to(backgroundTwo, {
          backgroundColor: '#2929cc',
        })
        .to(
          textTwo,
          {
            color: '#fff',
          },
          '<'
        )
        .to(
          iconTwo,
          {
            autoAlpha: 1,
          },
          '<'
        );
      this.tlTwo.restart();
    } else if (id === 3) {
      let backgroundThree = '.thirdRow';
      let textThree = '.thirdRowText';
      let iconThree = '.iconThree';

      this.tlThree
        .to(backgroundThree, {
          backgroundColor: '#2929cc',
        })
        .to(
          textThree,
          {
            color: '#fff',
          },
          '<'
        )
        .to(
          iconThree,
          {
            autoAlpha: 1,
          },
          '<'
        );
      this.tlThree.restart();
    }
  }

  fadeOut(id: number) {
    if (id === 1) {
      this.tlOne.reverse();
    } else if (id === 2) {
      this.tlTwo.reverse();
    } else if (id === 3) {
      this.tlThree.reverse();
    }
  }

  spanTrigger() {
    gsap
      .timeline()
      .to('span', {
        y: '18 px',
        duration: 2,
        ease: 'expo.out',
        stagger: 0.1,
      })
      .to('.container__tool-tech-description-wrapper-text', {
        autoAlpha: 0,
      });
  }

  scale() {
    gsap.to('.absolute', {
      duration: 1.5,
      ease: 'expo-out',
      scaleY: 0,
      transformOrigin: '100% 100%',
    });
  }

  ngOnInit() {
    this.addEventListeners();
  }

  fadeService(background: string, text: string, icon: string) {
    this.animation.fadeIn(background, text, icon);
  }

  fadeOutService() {
    this.animation.fadeOut();
  }

  onMouseWheel(event: any) {
    const { deltaY } = event;
    console.log(deltaY);
  }
  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheel);
  }
  removeEventListeners() {
    window.removeEventListener('mousewheel', this.onMouseWheel);
  }
}
