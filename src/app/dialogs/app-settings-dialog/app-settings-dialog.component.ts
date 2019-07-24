import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/services/app.service';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-app-settings-dialog',
  templateUrl: './app-settings-dialog.component.html',
  styleUrls: ['./app-settings-dialog.component.scss']
})
export class AppSettingsDialogComponent implements OnInit {
  constructor(private appService: AppService) {}

  get darkMode() {
    return this.appService.darkMode;
  }
  set darkMode(val: boolean) {
    this.appService.darkMode = val;
  }

  get enableNSFW() {
    return this.appService.enableNSFW;
  }
  set enableNSFW(val: boolean) {
    this.appService.enableNSFW = val;
  }
  ngOnInit() {}
  setConfig(ev: MatSelectionListChange) {
    this[ev.option.value] = ev.option.selected;
  }
}
