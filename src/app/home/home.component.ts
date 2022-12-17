import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
import { AnimationService } from '../../service/animations/animation.service';
declare var Splitting: any;

interface WeDo {
  serviceName: string;
  serviceParagraphs: serviceParagraphs[];
}

interface serviceParagraphs {
  paragraph: string;
}

interface scroll {
  current: number;
  target: number;
  last: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('target') target: any;
  @ViewChild('body') body: any;
  @ViewChild('main') main: any;
  @ViewChild('paragraph') paragraph: any;
  @ViewChild('paragraphTarget') paragraphTarget: any;

  // public observer?: any;

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

  constructor(private animation: AnimationService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    //splitting
    let results = Splitting({
      target: this.target.nativeElement,
      by: 'words',
    });

    //scrolling
    let sx = 0;
    let sy = 0;

    let dx = sx;
    let dy = sy;

    this.body.nativeElement.style.height =
      this.main.nativeElement.clientHeight + 'px';

    this.main.nativeElement.style.position = 'fixed';
    this.main.nativeElement.style.top = 0;
    this.main.nativeElement.style.left = 0;
    this.main.nativeElement.style.right = 0;

    window.addEventListener('scroll', scroll);

    function scroll() {
      sx = window.pageXOffset;
      sy = window.pageYOffset;
    }

    const render = () => {
      dx = gsap.utils.interpolate(dx, sx, 0.1);
      dy = gsap.utils.interpolate(dy, sy, 0.1);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      this.main.nativeElement.style.transform = `translate(-${dx}px, -${dy}px)`;
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);

    //IntersectionObserver
    this.createObserver(
      this.paragraphTarget,
      '.container__tool-tech-description-wrappper-paragraph'
    );
    this.createObserver(this.paragraph, '.container__text-one-p');
  }

  spanStagger() {
    gsap.to('.word, .whitespace', {
      y: '18 px',
      duration: 2,
      ease: 'expo.out',
      stagger: 0.1,
      autoAlpha: 0,
    });
  }

  fadeService(background: string, text: string, icon: string) {
    this.animation.fadeIn(background, text, icon);
  }

  fadeOutService() {
    this.animation.fadeOut();
  }

  //Intersection Observer
  animateIn() {
    gsap.fromTo(
      '.container__tool-tech-description-wrappper-paragraph',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        delay: 0.5,
        y: '0px',
      }
    );
  }
  animateOut() {
    gsap.set('.container__tool-tech-description-wrappper-paragraph', {
      autoAlpha: 0,
      y: '40px',
    });
  }

  animateIn2() {
    gsap.fromTo(
      '.container__text-one',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1.5,
        delay: 0.5,
        y: '0px',
      }
    );
  }
  animateOut2() {
    gsap.set('.container__text-one', {
      autoAlpha: 0,
      y: '40px',
    });
  }

  createObserver(element: any, gClass: string) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animation.animateIn(gClass);
        }
      });
    });

    // this.paragraph._results.map((element: any) =>
    //   observer.observe(element.nativeElement)
    // );

    observer.observe(element.nativeElement);
  }
}
