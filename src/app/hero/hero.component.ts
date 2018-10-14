import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../model/Hero';
import {HeroService} from '../services/hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    @Input()
    public hero: Hero;

    @Output()
    public isClicked = new EventEmitter<boolean>();

    @Input('name')
    public aliasTest: string;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    public onClick() {
        this.isClicked.emit(true);
    }

}
