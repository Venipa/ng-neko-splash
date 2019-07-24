import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NekoHomeComponent } from './neko-home.component';

const routes: Routes = [
  {
    path: '',
    component: NekoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NekoHomeRoutingModule {}
