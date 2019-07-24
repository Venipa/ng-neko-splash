import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { I18nService } from '@app/core';
import { AppService } from '@app/services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { AppSettingsDialogComponent } from '@app/dialogs/app-settings-dialog/app-settings-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(
    private titleService: Title,
    private dialog: MatDialog,
    private i18nService: I18nService,
    private appService: AppService
  ) {}

  ngOnInit() {}
  openSettings() {
    this.dialog.open(AppSettingsDialogComponent);
  }
  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get title(): string {
    return this.titleService.getTitle();
  }
}
