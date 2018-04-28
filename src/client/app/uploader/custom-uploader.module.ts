import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './custom-uploader.component';
import { CustomUploaderRoutingModule } from './custom-uploader-routing.module';

@NgModule({
    imports: [CommonModule],
    declarations: [UploaderComponent],
    exports: [UploaderComponent]
})
export class CustomUploaderModule { }
