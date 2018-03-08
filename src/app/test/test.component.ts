import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public ganteng = 'Ganteng';
  public number = 1;
  public myID = 'name';

  constructor() { }

  ngOnInit() {
  }

  kamuTidak(): string {
    return 'Hai ' + this.ganteng;
  }

  angka(): number {
    return this.number;
  }

}
