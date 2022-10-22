import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { FullScreenMapsComponent } from "./full-screen-maps/full-screen-maps.component";
import { VectorMapComponent } from "./vector-map/vector-map.component";

import { MapsRoutes } from "./maps.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    ComponentsModule
  ],
  declarations: [
    GoogleMapsComponent,
    FullScreenMapsComponent,
    VectorMapComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule {}
