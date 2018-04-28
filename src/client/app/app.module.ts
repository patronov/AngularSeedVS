import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { httpInterceptorProviders } from './http-interceptors/index';
import { CustomUploaderModule } from './uploader/custom-uploader.module';
import { AdminModule } from './admin/admin.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
    imports: [BrowserModule, CoreModule, BrowserAnimationsModule,
        HttpClientModule, AppRoutingModule,
        AboutModule, HomeModule, AdminModule, NotFoundModule,
        SharedModule.forRoot()],
    declarations: [AppComponent],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '<%= APP_BASE %>'
    },
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
