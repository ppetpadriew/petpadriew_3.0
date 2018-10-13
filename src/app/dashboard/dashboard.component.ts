import {Component, HostBinding, OnInit} from '@angular/core';
import {HeroService} from '../services/hero.service';
import {Hero} from '../model/Hero';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('pageAnimation', [
            transition(':enter', [
                query('.hero-tile', [
                    style({opacity: 0, transform: 'translateY(-100px)'}),
                    stagger(-30, [
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
                    ])
                ])
            ])
        ])
    ]
})
export class DashboardComponent implements OnInit {
    @HostBinding('@pageAnimation')
    public animatePage = true;

    public heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes = heroes);
    }
}
