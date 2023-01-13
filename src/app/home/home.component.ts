import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  Renderer2,
} from '@angular/core';
import { gsap } from 'gsap';
import { OglService } from '../../service/ogl/ogl.service';
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
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('body') body!: ElementRef;
  @ViewChild('main') main!: ElementRef;
  @ViewChildren('paragraph') paragraph!: ElementRef;
  @ViewChild('paragraphTarget') paragraphTarget!: ElementRef;
  @ViewChild('test') test!: ElementRef;
  @ViewChild('canv') canv!: ElementRef;
  @ViewChild('canvas') canvasRef!: ElementRef;

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

  constructor(
    private animation: AnimationService,
    private oglService: OglService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.oglService.onResize();
    // this.oglService.createRenderer(this.canv.nativeElement);
    // this.oglService.createCamera();
    // this.oglService.createScene();
    // this.oglService.createCube();
    // this.oglService.update();
    // this.oglService.createRenderer(this.canvasRef.nativeElement);
  }

  bodyScrolling(e: string) {
    this.body.nativeElement.style.height = e;
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
}
