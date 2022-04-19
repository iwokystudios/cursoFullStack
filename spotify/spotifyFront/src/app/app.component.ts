import { Component } from '@angular/core';

import { PlayingBarComponent } from './core/components/playing-bar/playing-bar.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { MainViewComponent } from './main-view/main-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotifyFront';
}
