import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-panels",
  templateUrl: "./panels.component.html",
  styleUrls: ["./panels.component.css"]
})
export class PanelsComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  activeTab1 = 1;
  activeTab2 = 1;
  activeTab3 = 1;
  activeTab4 = 1;

  constructor() {}

  ngOnInit() {}
}
