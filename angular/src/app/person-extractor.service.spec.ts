import {TestBed, inject} from '@angular/core/testing';

import {PersonExtractor} from './person-extractor.service';
import {Observable, of} from 'rxjs';
import {Person} from './types/Person';

const html: string = `<html><div class='staff' id="73161">
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
      <img src="http://google.de/app/uploads/2016/04/Platzhalter.jpg" alt="">
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
    </div><nav>
  <ul>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
  </ul>
</nav>
            <form action="#" method="post">
    <div>
         <label for="name">Text Input:</label>
         <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>

    <div>
         <h4>Radio Button Choice</h4>

         <label for="radio-choice-1">Choice 1</label>
         <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

     <label for="radio-choice-2">Choice 2</label>
         <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
    </div>

  <div>
    <label for="select-choice">Select Dropdown Choice:</label>
    <select name="select-choice" id="select-choice">
      <option value="Choice 1">Choice 1</option>
      <option value="Choice 2">Choice 2</option>
      <option value="Choice 3">Choice 3</option>
    </select>
  </div>

  <div>
    <label for="textarea">Textarea:</label>
    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
  </div>

  <div>
      <label for="checkbox">Checkbox:</label>
    <input type="checkbox" name="checkbox" id="checkbox" />
    </div>

  <div>
      <input type="submit" value="Submit" />
    </div>
</form></html>\n`;

const allNames = ['Peter Pan', 'Robert Schmidt', 'Dietrich Reitz', 'Lukas Schreiner', 'Dr. Sandra Nachname', 'Richard Müller'];
const notExtractedName = 'Heinz Meier';
const placeholder = 'http://google.de/app/uploads/2016/04/Platzhalter.jpg';


describe('PersonExtractor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonExtractor]
    });
  });

  it('should be created', inject([PersonExtractor], (service: PersonExtractor) => {
    expect(service).toBeTruthy();
  }));

  it('should not extract person with placeholder image', inject([PersonExtractor], (service: PersonExtractor) => {
    expect(service.extract(html, placeholder)).not.toContain(jasmine.objectContaining({
      name: notExtractedName
    }));
  }));

  it('should extract all relevant person', inject([PersonExtractor], (service: PersonExtractor) => {
    expect(service.extract(html, placeholder).length).toBe(allNames.length);
    allNames.forEach((name) => {
        expect(service.extract(html, placeholder)).toContain(jasmine.objectContaining({
          name: name
        }));
      }
    );
  }));

});
