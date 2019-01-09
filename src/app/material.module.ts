import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
// For MDB Angular Free
import { NavbarModule, 
  WavesModule,
  BreadcrumbModule,
  IconsModule,
  ButtonsModule,
  CollapseModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule,
    NavbarModule,
    WavesModule,
    BreadcrumbModule,
    IconsModule,
    ButtonsModule,
    CollapseModule 
  ],
  exports: [MatButtonModule, 
    MatCheckboxModule,
    NavbarModule,
    WavesModule,
    BreadcrumbModule,
    IconsModule,
    ButtonsModule,
    CollapseModule 
  ],
})
export class BreadCrumbsMaterialModules { }