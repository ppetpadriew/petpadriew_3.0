import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../model/Hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    @Input()
    public heroes: Hero[];

    constructor(public heroService: HeroService) {
    }


    public onClick(hero: Hero) {
        this.heroService.selected = hero;
    }

    public ngOnInit() {
        this.getHeroes();
    }

    public getHeroes() {
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
        });
    }
}
