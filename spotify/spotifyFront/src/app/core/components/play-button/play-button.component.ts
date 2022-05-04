import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss']
})
export class PlayButtonComponent implements OnInit {

  @Input() text: string = "";
  @Output() onPressMyButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  onClick() {
    this.onPressMyButton.emit();
  }
}
