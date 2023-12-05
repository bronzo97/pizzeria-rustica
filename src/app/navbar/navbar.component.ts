import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-navbar',
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