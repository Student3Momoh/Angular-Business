import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // Define variables
  name: string = "Gibbo (T.I" +
    ")";
  isSpecial: boolean = true;
  textColor: string = "blue";
  bgColor: string = "lightgray";
}
