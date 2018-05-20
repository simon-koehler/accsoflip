import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {FlipperComponent} from './flipper.component';
import {PageLoaderService} from '../page-loader.service';
import {Observable, of} from 'rxjs';


const staticObservable: Observable<string> = of(
  `<html><div class='staff' id="73161">
    <div class='portrait'><img src='http://google.de/app/uploads/2017/10/Pan-Peter-Firma-Woanders.jpg
    srcset="http://google.de/app/uploads/2017/10/Pan-Peter-Firma-Woanders.jpg 2000w, http://google.de/app/uploads/2017/10/Pan-Peter-
    Firma-Woanders-720x612.jpg 720w, http://google.de/app/uploads/2017/10/Pan-Peter-Firma-Woanders-1080x918.jpg 1080w, http://google.de/
    app/uploads/2017/10/Pan-Peter-Firma-Woanders-1620x1377.jpg 1620w, http://google.de/app/uploads/2017/10/Pan-Peter-Firma-Woanders-
    480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt=""></div>
      <div class='info'>
    <div class='name'>Peter Pan</div>
    <div class='position'>Junior Software Engineer</div>
    </div>
    </div>
    <div class='staff' id="6591">
    <div class='portrait'><img src="http://google.de/app/uploads/2016/04/Nachname5-Sandra-Firma-Darmstadt.jpg"
    srcset="http://google.de/app/uploads/2016/04/Nachname5-Sandra-Firma-Darmstadt.jpg 2000w, http://google.de/app/uploads/2016/04/
    Nachname5-Sandra-Firma-Darmstadt-720x612.jpg 720w, http://google.de/app/uploads/2016/04/Nachname5-Sandra-Firma-Darmstadt-1080x918.jpg
     1080w, http://google.de/app/uploads/2016/04/Nachname5-Sandra-Firma-Darmstadt-1620x1377.jpg 1620w, http://google.de/app/uploads/2016/
     04/Nachname5-Sandra-Firma-Darmstadt-480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt="Nachname5-Sandra-Firma-Darmstadt"></div>
      <div class='info'>
    <div class='name'>Dr. Sandra Nachname</div>
    <div class='position'>Managing Consultant</div>
    </div>
    </div>
    <div class='staff' id="69143">
    <div class='portrait'><img src="http://google.de/app/uploads/2017/06/Schmidt-Robert-Firma-Darmstadt.jpg"
    srcset="http://google.de/app/uploads/2017/06/Schmidt-Robert-Firma-Darmstadt.jpg 2000w, http://google.de/app/uploads/2017/06/
    Schmidt-Robert-Firma-Darmstadt-720x612.jpg 720w, http://google.de/app/uploads/2017/06/Schmidt-Robert-Firma-Darmstadt-1080x918.jpg
     1080w, http://google.de/app/uploads/2017/06/Schmidt-Robert-Firma-Darmstadt-1620x1377.jpg 1620w, http://google.de/app/uploads/2017/
     06/Schmidt-Robert-Firma-Darmstadt-480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt=""></div>
      <div class='info'>
    <div class='name'>Robert Schmidt</div>
    <div class='position'>Software Engineer</div>
    </div>
    </div>
    <div class='staff' id="6924">
    <div class='portrait'><img src="http://google.de/app/uploads/2016/04/Müller-Richard-Firma-Woanders-1.jpg"
    srcset="http://google.de/app/uploads/2016/04/Müller-Richard-Firma-Woanders-1.jpg 2000w, http://google.de/app/uploads/2016/04/
    Müller-Richard-Firma-Woanders-1-720x612.jpg 720w, http://google.de/app/uploads/2016/04/Müller-Richard-Firma-Woanders-1-1080x918.jpg
     1080w, http://google.de/app/uploads/2016/04/Müller-Richard-Firma-Woanders-1-1620x1377.jpg 1620w, http://google.de/app/uploads/2016/
     04/Müller-Richard-Firma-Woanders-1-480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt="Müller-Richard-Firma-Woanders"></div>
      <div class='info'>
    <div class='name'>Richard Müller</div>
    <div class='position'>Senior Software Engineer</div>
    </div>
    </div>
    <div class='staff' id="6916">
    <div class='portrait'><img src="http://google.de/app/uploads/2016/04/Reitz-Dietrich-Firma-Woanders.jpg"
    srcset="http://google.de/app/uploads/2016/04/Reitz-Dietrich-Firma-Woanders.jpg 2000w, http://google.de/app/uploads/2016/04/
    Reitz-Dietrich-Firma-Woanders-720x612.jpg 720w, http://google.de/app/uploads/2016/04/Reitz-Dietrich-Firma-Woanders-1080x918.jpg
     1080w, http://google.de/app/uploads/2016/04/Reitz-Dietrich-Firma-Woanders-1620x1377.jpg 1620w, http://google.de/app/uploads/
     2016/04/Reitz-Dietrich-Firma-Woanders-480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt="Reitz-Dietrich-Firma-Woanders"></div>
      <div class='info'>
    <div class='name'>Dietrich Reitz</div>
    <div class='position'>Principal</div>
      </div>
      </div>
      <div class="staff" id="77586">
      <div class="portrait"> 
      <img src="http://accso.de/app/uploads/2016/04/Platzhalter.jpg" alt="">
      </div>
      <div class="info">
      <div class="name">Heinz Meier</div>
      <div class="position">Junior Software Engineer</div>
      </div>
      </div>
      <div class='staff' id="75239">
    <div class='portrait'><img src="http://google.de/app/uploads/2018/01/Schreiner-Lukas-Firma-Irgendwo.jpg"
    srcset="http://google.de/app/uploads/2018/01/Schreiner-Lukas-Firma-Irgendwo.jpg 2000w, http://google.de/app/uploads/2018/01/
    Schreiner-Lukas-Firma-Irgendwo-720x612.jpg 720w, http://google.de/app/uploads/2018/01/Schreiner-Lukas-Firma-Irgendwo-1080x918.jpg
     1080w, http://google.de/app/uploads/2018/01/Schreiner-Lukas-Firma-Irgendwo-1620x1377.jpg 1620w, http://google.de/app/uploads/2018/
     01/Schreiner-Lukas-Firma-Irgendwo-480x408.jpg 480w"
    sizes="(min-width: 768px) 25vw, 100vw"
    alt=""></div>
      <div class='info'>
    <div class='name'>Lukas Schreiner</div>
    </div></html>\n`);

const allNames = ['Peter Pan', 'Robert Schmidt', 'Dietrich Reitz', 'Lukas Schreiner', 'Dr. Sandra Nachname', 'Richard Müller'];
const notExtractedName = 'Heinz Meier';

describe('FlipperComponent (minimal)', () => {

  let fixture: ComponentFixture<FlipperComponent>;
  let component;

  beforeEach(async(() => {
    // Create a fake TwainService object with a getQuote()` spy
    const pageLoaderServiceSpy = jasmine.createSpyObj('PageLoaderService', ['loadMenschenPage']);
    // Make the spy return a synchronous Observable with the test data
    pageLoaderServiceSpy.loadMenschenPage.and.returnValue(staticObservable);

    TestBed.configureTestingModule({
      declarations: [FlipperComponent],
      providers: [{provide: PageLoaderService, useValue: pageLoaderServiceSpy}]
    });
    fixture = TestBed.createComponent(FlipperComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const cardImage = fixture.nativeElement.querySelector('.card .front img');
    expect(cardImage.src).toContain('google.de');

    const cardText = fixture.nativeElement.querySelector('.card .back div');
    expect(cardText.textContent).toBe('Cody');
  });

  it('should not show Platzhalter at start', () => {
    const cardImage = fixture.nativeElement.querySelector('.card .front img');
    expect(cardImage.src).not.toContain('Platzhalter');
  });

  it('should show Cody on the back at start', () => {
    const cardText = fixture.nativeElement.querySelector('.card .back div');
    expect(cardText.textContent).toBe('Cody');
  });


  it('should not be flipped at start', () => {
    const card = fixture.nativeElement.querySelector('.card');
    expect(card.classes).not.toContain('flipped');
    expect(component.frontVisible).toBe(true);
  });

  it('should flip with each click', () => {
    component.onClick();
    expect(component.frontVisible).toBe(false);
    component.onClick();
    expect(component.frontVisible).toBe(true);
    component.onClick();
    expect(component.frontVisible).toBe(false);
    component.onClick();
    expect(component.frontVisible).toBe(true);
    component.onClick();
    expect(component.frontVisible).toBe(false);
    component.onClick();
  });


  it('should show correct name change behaviour when clicked', () => {
    component.onClick();
    expect(component.image).not.toContain('Platzhalter');
    expect(allNames).toContain(component.name);
  });

  it('should show correct name change behaviour when clicked x2', () => {
    component.onClick();
    const previousName = component.name;
    component.onClick();
    expect(component.image).toContain('google.de');
    expect(allNames).toContain(component.name);
    expect(component.name).toBe(previousName);

  });

  it('should show correct name change behaviour when clicked x3', () => {
    component.onClick();
    component.onClick();
    const previousName = component.name;
    component.onClick();

    expect(component.image).toContain('google.de');
    expect(allNames).toContain(component.name);
    expect(component.name).not.toBe(previousName); // not!

  });


  it('should show correct name change behaviour when clicked x4', () => {
    component.onClick();
    component.onClick();
    component.onClick();
    const previousName = component.name;
    component.onClick();

    expect(component.image).toContain('google.de');
    expect(allNames).toContain(component.name);
    expect(component.name).toBe(previousName);
  });

});

