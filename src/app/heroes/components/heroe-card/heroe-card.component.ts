import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {
  @Input() hero!: Heroes;
  constructor() {}

  ngOnInit(): void {}
}
