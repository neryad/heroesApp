import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators/';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  hero!: Heroes;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroServices: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) =>
    //   this.heroServices.getHero(id).subscribe((res) => {
    //     this.hero = res;
    //     console.log(this.hero);
    //   })
    // );

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroServices.getHero(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  backTo() {
    this.router.navigate(['/heroes/list']);
  }
}
