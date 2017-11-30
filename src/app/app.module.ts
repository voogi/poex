import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BackendService} from "./services/backend.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material";
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClearNamePipe } from './pipes/clear-name.pipe';


@NgModule({
    declarations: [
        AppComponent,
        FilterByNamePipe,
        NameFilterPipe,
        ClearNamePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
