import {Component, OnInit} from '@angular/core';
import {PageLoaderService} from '../page-loader.service';
import {PersonExtractor} from '../person-extractor.service';
import {Person} from '../types/Person'; // for html-parsing and finding elements in an external DOM (via <virtual>)


@Component({
  selector: 'app-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.css']
})
export class FlipperComponent implements OnInit {

  constructor(private pageLoaderService: PageLoaderService, private personExtractor: PersonExtractor) {
  }

  private people = Array<Person>();
  private placeholder = 'http://accso.de/app/uploads/2016/04/Platzhalter.jpg';
  private cody = new Person('Cody', this.placeholder);
  private currentPerson = this.cody; // for internal use. no bindings on it

  name = this.currentPerson.name; // for bindings. it is required that the name is not printed instantly when the currentPerson changes!
  image = this.currentPerson.image; // for bindings
  frontVisible = true; // whether flipped or not
  showLoading = true;

  ngOnInit() {
    // call accso.de via no-cors-proxy
    const pageObservable = this.pageLoaderService.loadMenschenPage();
    pageObservable.subscribe((html: string) => {
      this.people = this.personExtractor.extract(html, this.placeholder);

      this.onFinishedLoading();
    });
  }

  private onFinishedLoading() {
    if (!this.showLoading) {
      return;
    }

    // don't show Cody at first
    this.loadNext();
    this.setImage();
    this.showLoading = false;
  }

  onClick() {
    if (this.frontVisible) {
      this.setName();
    } else {
      this.loadNext();
      this.setImage();
    }

    this.frontVisible = !this.frontVisible;
  }

  private setImage() {
    this.image = (this.currentPerson === null) ? this.placeholder : this.currentPerson.image;
  }

  private setName() {
    this.name = (this.currentPerson === null) ? 'Cody' : this.currentPerson.name;
  }

  private loadNext() {
    if (this.people.length === 0) {
      this.currentPerson.image = this.placeholder;
      this.currentPerson.name = 'Cody';
    } else {
      const index = Math.floor(Math.random() * this.people.length);
      this.currentPerson = this.people[index];
      this.people.splice(index, 1);
    }
  }

}
