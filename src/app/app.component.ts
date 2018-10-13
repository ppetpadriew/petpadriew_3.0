import {Component} from '@angular/core';
import {Hero} from './model/Hero';
import {MessageService} from './services/message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'Turbo Solution';
    public selectedHero: Hero;

    public heroes: Hero[];

    public constructor(private messageService: MessageService) {
    }

    public sayHello(click: boolean) {
        if (click) {
            this.messageService.add('Hello World!!!. The button has been clicked.');
            return;
        }
        this.messageService.add('Nothing happen !!');
    }

    public setSelected(hero: Hero) {
        this.selectedHero = hero;
    }
}
