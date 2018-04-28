import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from '../shared/services/uploader.service';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
  providers: [UploaderService]
})
export class AboutModule { }
