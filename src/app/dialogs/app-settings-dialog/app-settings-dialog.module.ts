import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsDialogComponent } from './app-settings-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppSettingsDialogComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [AppSettingsDialogComponent],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: <MatDialogConfig>{
        ...MAT_DIALOG_DEFAULT_OPTIONS,
        width: '400px',
        hasBackdrop: true
      }
    }
  ],
  entryComponents: [AppSettingsDialogComponent]
})
export class AppSettingsDialogModule {}
