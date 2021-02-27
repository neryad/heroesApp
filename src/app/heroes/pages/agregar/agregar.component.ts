import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

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
  constructor(
    private heroServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroServices.getHero(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  guardar() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    if (this.hero.id) {
      this.heroServices.putHero(this.hero).subscribe((res) => {
        this.showSnackBar('Registro actualizado');
        console.log('actulizado', res);
      });
    } else {
      this.heroServices.postHero(this.hero).subscribe((res) => {
        this.showSnackBar('Registro creado');
        console.log('sucees', res);
        this.router.navigate(['/heroes/edit', res.id]);
      });
    }
  }

  borrar() {
    const dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: this.hero,
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.heroServices.deleteHero(this.hero.id!).subscribe((res) => {
          this.showSnackBar('Registro borrado');
          this.router.navigate(['heroes']);
        });
      }
    });
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'ok!', {
      duration: 2500,
    });
  }
}
