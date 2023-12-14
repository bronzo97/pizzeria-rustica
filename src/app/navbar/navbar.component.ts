import { Component } from "@angular/core";
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-navbar',
    imports: [RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})

export class Navbar {
    linkMenu = [
        'home', 'menu', 'lavora con noi', 'dove siamo'
    ];
    isPizza = true;
    tamerCit = '';

    TamerCit() {
        this.tamerCit = "Perche' se poi Robertona cade si la sbuccia la figa";
    }
    Hide(){
        this.tamerCit = '';
    }
}