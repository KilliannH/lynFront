import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark, PlayCircle, PlayCircleFill } from 'ng-bootstrap-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  PlayCircle,
  PlayCircleFill,
  Bookmark
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
