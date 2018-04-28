import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NameListService } from './name-list/name-list.service';

import {
    PredictiveModelService, AuthenticationService, HttpErrorHandler,
    RequestCacheWithMap, MessageService, PackageSearchService
} from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, FormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NameListService,
                PredictiveModelService,
                AuthenticationService,
                HttpErrorHandler,
                MessageService,
                PackageSearchService,
                RequestCacheWithMap
            ]
        };
    }
}
