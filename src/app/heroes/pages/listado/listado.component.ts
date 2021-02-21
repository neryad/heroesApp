import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  heroes: Heroes[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((res) => {
      this.heroes = res;
    });
  }
}
