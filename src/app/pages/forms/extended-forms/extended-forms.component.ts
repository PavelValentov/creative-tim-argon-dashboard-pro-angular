import { Component, OnInit, Input, TemplateRef, ChangeDetectorRef } from "@angular/core";
import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import noUiSlider from "nouislider";

@Component({
  selector: "app-extended-forms",
  templateUrl: "./extended-forms.component.html",
  styleUrls: ["./extended-forms.component.css"]
})
export class ExtendedFormsComponent implements OnInit {
  tagItems = ["Minimal", "Light", "New", "Friends"];

  simpleSlider = 40;
  doubleSlider = [20, 60];

  state: boolean = true;
  state1: boolean = true;
  state2: boolean = true;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  dropdownList1 = [];
  selectedItems1 = [];
  dropdownSettings1 = {};

  model: NgbDateStruct;
  model1: NgbDateStruct;
  model2: NgbDateStruct;

  today = this.calendar.getToday();

  // @Input() footerTemplate: TemplateRef<any>;

  constructor(private calendar: NgbCalendar, private cdref: ChangeDetectorRef) {}

  ngOnInit() {
    this.dropdownList = [
      { id: 1, itemName: "Roman", category: "All" },
      { id: 2, itemName: "Paris", category: "All" },
      { id: 3, itemName: "Bucharest", category: "All" },
      { id: 4, itemName: "Rome", category: "All" },
      { id: 5, itemName: "New York", category: "All" },
      { id: 6, itemName: "Miami", category: "All" },
      { id: 7, itemName: "Piatra Neamt", category: "All" },
      { id: 8, itemName: "Paris", category: "All" },
      { id: 9, itemName: "Bucharest", category: "All" },
      { id: 10, itemName: "Rome", category: "All" },
      { id: 11, itemName: "New York", category: "All" },
      { id: 12, itemName: "Miami", category: "All" },
      { id: 13, itemName: "Piatra Neamt", category: "All" }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Multiple Select",
      enableSearchFilter: true,
      classes: "",
      groupBy: "category"
    };

    this.dropdownList1 = [
      { id: 1, itemName: "Roman" },
      { id: 2, itemName: "Paris" },
      { id: 3, itemName: "Bucharest" },
      { id: 4, itemName: "Rome" },
      { id: 5, itemName: "New York" },
      { id: 6, itemName: "Miami" },
      { id: 7, itemName: "Piatra Neamt" },
      { id: 8, itemName: "Paris" },
      { id: 9, itemName: "Bucharest" },
      { id: 10, itemName: "Rome" },
      { id: 11, itemName: "New York" },
      { id: 12, itemName: "Miami" },
      { id: 13, itemName: "Piatra Neamt" }
    ];
    this.selectedItems1 = [];
    this.dropdownSettings1 = {
      singleSelection: true,
      text: "Single Select",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "",
      lazyLoading: true
    };

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }

  ngAfterContentChecked() {

  this.cdref.detectChanges();

   }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
