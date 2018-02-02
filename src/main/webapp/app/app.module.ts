import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularSupremev3SharedModule, UserRouteAccessService } from './shared';
import { AngularSupremev3AppRoutingModule} from './app-routing.module';
import { AngularSupremev3HomeModule } from './home/home.module';
import { AngularSupremev3AdminModule } from './admin/admin.module';
import { AngularSupremev3AccountModule } from './account/account.module';
import { AngularSupremev3EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        AngularSupremev3AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AngularSupremev3SharedModule,
        AngularSupremev3HomeModule,
        AngularSupremev3AdminModule,
        AngularSupremev3AccountModule,
        AngularSupremev3EntityModule,
        NgbModule.forRoot(),
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
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
export class AngularSupremev3AppModule {}
