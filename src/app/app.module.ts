import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DetailsComponent } from './components/details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingscreenInterceptor } from './shared/interceptors/loadingscreen.interceptor';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/pipe/search.pipe';
import { StoreModule } from '@ngrx/store';



@NgModule({
    declarations: [
        AppComponent
        
    ],
    providers: [
      {provide:HTTP_INTERCEPTORS,useClass:LoadingscreenInterceptor,multi:true}  
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
         NgxSpinnerModule,
         FormsModule,
         StoreModule.forRoot({}, {})
    ]
})
export class AppModule { }
