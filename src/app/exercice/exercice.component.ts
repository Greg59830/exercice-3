import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onChangeUsername(event: Event) {
    this.username = (<HTMLInputElement> event.target).value;
  }

  onResetUsername() {
    this.username = "";
  }

}
