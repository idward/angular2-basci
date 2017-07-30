import {NgModule} from "@angular/core";
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from "@angular/material";

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
  ],
})

export class MyOwnCustomMaterialModule {
}
