import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widgets",
  templateUrl: "./widgets.component.html",
  styleUrls: ["./widgets.component.css"]
})
export class WidgetsComponent implements OnInit {
  state_default: boolean = true;
  constructor() {}

  ngOnInit() {}
}
