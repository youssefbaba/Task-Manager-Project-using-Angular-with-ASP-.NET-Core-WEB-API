import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-check-box-printer',
  templateUrl: './check-box-printer.component.html',
  styleUrls: ['./check-box-printer.component.scss']
})
export class CheckBoxPrinterComponent implements OnInit {

  isChecked : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.isChecked = true;
  }

  unChecked(){
    this.isChecked = false;
  }

}
