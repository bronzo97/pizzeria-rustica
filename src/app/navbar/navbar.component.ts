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
    hidden:string = 'hidden';
    ariaExpanded:boolean = false;

    TamerCit() {
        this.tamerCit = "Perche' se poi Robertona cade si la sbuccia la figa";
    }
    Hide(){
        this.tamerCit = '';
    }
    openHamburger() {
        if (this.hidden != '') {
            this.hidden = '';
        } else {
            this.hidden = 'hidden';
        }
        
        // this.ariaExpanded = true;
    }
        
    closeHamburger() {
        this.hidden = 'hidden';
        // this.ariaExpanded = false;
    }

}