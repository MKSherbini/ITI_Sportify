import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { BasicErrorControllerService } from './api/basicErrorController.service';
import { GameDetailsControllerService } from './api/gameDetailsController.service';
import { GameEntityService } from './api/gameEntity.service';
import { MatchEntityService } from './api/matchEntity.service';
import { NewsEntityService } from './api/newsEntity.service';
import { ProfileControllerService } from './api/profileController.service';
import { PublishTestService } from './api/publishTest.service';
import { TeamEntityService } from './api/teamEntity.service';
import { TeamMatchScoreEntityService } from './api/teamMatchScoreEntity.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
