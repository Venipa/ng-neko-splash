import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MatProgressSpinnerModule, MatProgressBarModule, FlexLayoutModule],
  exports: [LoaderComponent]
})
export class LoaderModule {}
