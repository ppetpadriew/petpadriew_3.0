import {Component, OnInit} from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Hero} from '../model/Hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
    private heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        // this.heroes = this.heroService.getHeroes();
        // Above code for synchronous service but in real app we rarely use it
        // Usually we will get data from remote server which is asynchronous request like below
        this.heroService.getHeroes().subscribe((heroes) => {
            this.heroes = heroes;
            console.log(this.heroes);
        });
    }

    public getHeroes(): Hero[] {
        return this.heroes;
    }

}
