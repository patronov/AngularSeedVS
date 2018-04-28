import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from '../shared/services/uploader.service';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
    imports: [CommonModule, NotFoundRoutingModule],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
    //providers: [UploaderService]
})
export class NotFoundModule { }
