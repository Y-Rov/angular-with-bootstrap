import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Lovely house',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Not bad flat',
      Type: 'Flat',
      Price: 6000,
    },
    {
      Id: 3,
      Name: 'Cool villa',
      Type: 'House',
      Price: 20000,
    },
    {
      Id: 4,
      Name: 'Expensive house',
      Type: 'House',
      Price: 20000,
    },
    {
      Id: 5,
      Name: 'Cheap house',
      Type: 'House',
      Price: 3000,
    },
    {
      Id: 6,
      Name: 'Cool house',
      Type: 'House',
      Price: 50000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
