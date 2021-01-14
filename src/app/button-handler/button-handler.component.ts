import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-handler',
  templateUrl: './button-handler.component.html',
  styleUrls: ['./button-handler.component.css']
})
export class ButtonHandlerComponent implements OnInit, OnChanges {

  @Input() buttonState: string;

  @Output() btnEventEmit = new EventEmitter();

  _buttonState: string;
  constructor() { }

  ngOnInit() {
    this._buttonState = this.buttonState;
  }
  ngOnChanges() {
    this._buttonState = this.buttonState;
  }


  buttonOnClick() {
    console.log('clicked');
    this.btnEventEmit.emit('clicked');
  }
}

