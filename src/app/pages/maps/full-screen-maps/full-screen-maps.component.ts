import { Component, OnInit, OnDestroy } from "@angular/core";
declare const google: any;

@Component({
  selector: "app-full-screen-maps",
  templateUrl: "./full-screen-maps.component.html",
  styleUrls: ["./full-screen-maps.component.css"]
})
export class FullScreenMapsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    var navbar = document.getElementsByClassName("navbar")[0];
    body.classList.add("full-screen-map");
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("bg-white");

    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: []
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    var navbar = document.getElementsByClassName("navbar")[0];
    body.classList.remove("full-screen-map");
    navbar.classList.remove("bg-white");
    navbar.classList.add("navbar-transparent");
  }
}
