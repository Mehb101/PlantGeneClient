import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HelloComponent,NavBarComponent]
})
export class AppComponent {
  title = 'PlantGeneClient';
}
