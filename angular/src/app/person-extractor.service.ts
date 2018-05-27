import {Injectable} from '@angular/core';
import * as $ from 'jquery';
import {Person} from './types/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonExtractor {

  constructor() {
  }

  private accsoPath = 'http://accso.de/app/uploads';
  private azureHttpsPath = 'https://accso-image-proxy.azurewebsites.net';

  public transformToHttpsProxyUrl = (imageUrl: string | undefined) => {
    if (!imageUrl) {
      return imageUrl;
    }
    return imageUrl.replace(this.accsoPath, this.azureHttpsPath);
  };

  /**
   * Takes html and extracts persons of the format
   *  <div class='staff' id="491">
   *    <div class='portrait'>
   *      <img src="http://accso.de/app/uploads/2016/04/Lastname-Firstname-Accso-Darmstadt.jpg" alt="Firstname Lastname">
   *    </div>
   *    <div class='info'>
   *      <div class='name'>Firstname Lastname</div>
   *      <div class='position'>Somewhat Engineer</div>
   *    </div>
   *  </div>
   * @param {string} html
   * @param {string} placeholder an image link that shall be filtered for. Persons with this image link will not be extracted.
   * @returns {any[]}
   */
  public extract(html: string, placeholder: string): Person[] {
    const virtualDom = $('<virtual>').html(html)[0];
    const persons = [];

    // find all images and names
    /* expect:
      <div class='staff' id="491">
        <div class='portrait'>
          <img src="http://accso.de/app/uploads/2016/04/Lastname-Firstname-Accso-Darmstadt.jpg" alt="Firstname Lastname">
        </div>
        <div class='info'>
          <div class='name'>Firstname Lastname</div>
          <div class='position'>Somewhat Engineer</div>
        </div>
      </div>
    */
    $(virtualDom).find('div.staff').each((i: number, el) => {
      const image = $(el).find('img').attr('src');
      const name = $(el).find('div.name').text();

      if (image === placeholder) {
        console.log('Skipping ' + name + ' since s_he has no image yet.');
      } else {
        const transformedImage = this.transformToHttpsProxyUrl(image);
        persons.push({
          name: name,
          image: transformedImage,
          preload: (new Image().src = transformedImage)
          // preload: (new Image().src = image) // creating a new JavaScript instance with target-src makes the browser preload all images
          // at once. Promotes image lagging for the currently visible images :(
        });
      }
    });
    return persons;
  }
}
