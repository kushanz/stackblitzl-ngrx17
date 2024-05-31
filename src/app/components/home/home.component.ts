import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  textareaContent = '';
  signalVal = signal('kushan');
  constructor() {}

  ngOnInit() {}
}
