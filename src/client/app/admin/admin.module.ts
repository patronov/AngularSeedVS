import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { UploaderService } from '../shared/services/uploader.service';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CustomUploaderModule } from '../uploader/custom-uploader.module';

@NgModule({
    imports: [CommonModule, AdminRoutingModule, CustomUploaderModule, ButtonModule],
    declarations: [AdminComponent],
    exports: [AdminComponent],
    //providers: [UploaderService]
})
export class AdminModule { }
