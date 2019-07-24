import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NekoHomeComponent } from './neko-home.component';
import { RouterModule } from '@angular/router';
import { NekoHomeRoutingModule } from './neko-home-routing.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NekoHomeComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, NekoHomeRoutingModule],
  exports: [NekoHomeRoutingModule]
})
export class NekoHomeModule {}
