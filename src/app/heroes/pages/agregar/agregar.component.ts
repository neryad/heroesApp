import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  hero: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  publishers = [
    { id: 'DC Comics', desc: 'DC-Comics' },
    { id: 'Marvel Comics', desc: 'Marvel-Comics' },
  ];
  constructor(private heroServices: HeroesService) {}

  ngOnInit(): void {}

  guardar() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    this.heroServices.postHero(this.hero).subscribe((res) => {
      console.log('sucees', res);
    });
  }
}
