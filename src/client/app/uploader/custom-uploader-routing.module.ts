import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploaderComponent } from './custom-uploader.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'upload', component: UploaderComponent }
        ])
    ],
    exports: [RouterModule]
})
export class CustomUploaderRoutingModule { }
