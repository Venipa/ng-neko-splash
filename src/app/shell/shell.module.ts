import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { AppSettingsDialogModule } from '@app/dialogs/app-settings-dialog/app-settings-dialog.module';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AppSettingsDialogModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
