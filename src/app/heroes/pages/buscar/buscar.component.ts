import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroes[] = [];
  heroSelected: Heroes | undefined;
  constructor(private heroServices: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroServices
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }
  opcionSelecionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroSelected = undefined;
      console.log('No hay valor');

      return;
    }
    const hero = event.option.value;
    this.termino = hero.superhero;
    this.heroServices
      .getHero(hero.id)
      .subscribe((hero) => (this.heroSelected = hero));
  }
}
