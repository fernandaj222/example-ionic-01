import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  info: {
    title: string;
    subtitle: string;
    description: string;
  } = {
    title: 'Card 1',
    subtitle: 'Card subtitle 1',
    description: 'Lorem ipsum'
  };

  info2: {
    title: string;
    subtitle: string;
    description: string;
  } = {
    title: 'Card 2',
    subtitle: 'Card subtitle 2',
    description: 'Lorem ipsum 2'
  };
}
