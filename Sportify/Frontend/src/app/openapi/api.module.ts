import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { BasicErrorControllerService } from './api/basicErrorController.service';
import { GamesControllerService } from './api/gamesController.service';
import { MatchesControllerService } from './api/matchesController.service';
import { NewsControllerService } from './api/newsController.service';
import { PlayerControllerService } from './api/playerController.service';
import { ProfileControllerService } from './api/profileController.service';
import { PublishTestService } from './api/publishTest.service';
import { TeamsControllerService } from './api/teamsController.service';

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
