import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { HoursandmilesSharedModule, UserRouteAccessService } from './shared';
import { HoursandmilesAppRoutingModule} from './app-routing.module';
import { HoursandmilesHomeModule } from './home/home.module';
import { HoursandmilesAdminModule } from './admin/admin.module';
import { HoursandmilesAccountModule } from './account/account.module';
import { HoursandmilesEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        HoursandmilesAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        HoursandmilesSharedModule,
        HoursandmilesHomeModule,
        HoursandmilesAdminModule,
        HoursandmilesAccountModule,
        HoursandmilesEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class HoursandmilesAppModule {}
