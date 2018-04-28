import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { PredictiveModelService } from '../shared/services/predictive-model.service';
import { CustomUploaderModule } from '../uploader/custom-uploader.module';

@NgModule({
    imports: [HomeRoutingModule, SharedModule, CustomUploaderModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService, PredictiveModelService]
})
export class HomeModule { }
