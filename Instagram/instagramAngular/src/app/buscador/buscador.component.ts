import { Component, OnInit } from '@angular/core';

import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass
  constructor() { }

  ngOnInit(): void {
  }

}
