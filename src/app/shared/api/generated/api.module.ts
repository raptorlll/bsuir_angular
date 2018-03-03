import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AssetsControllerService } from './api/assetsController.service';
import { ConsultantGroupControllerService } from './api/consultantGroupController.service';
import { ConsultantGroupUserControllerService } from './api/consultantGroupUserController.service';
import { ConsultantInformationControllerService } from './api/consultantInformationController.service';
import { ConversationControllerService } from './api/conversationController.service';
import { ConversationMessageControllerService } from './api/conversationMessageController.service';
import { ConversationStatusControllerService } from './api/conversationStatusController.service';
import { CustomerInformationControllerService } from './api/customerInformationController.service';
import { CustomerPaymentControllerService } from './api/customerPaymentController.service';
import { ResourceControllerService } from './api/resourceController.service';
import { SummaryPaymentsControllerService } from './api/summaryPaymentsController.service';
import { UserControllerService } from './api/userController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AssetsControllerService,
    ConsultantGroupControllerService,
    ConsultantGroupUserControllerService,
    ConsultantInformationControllerService,
    ConversationControllerService,
    ConversationMessageControllerService,
    ConversationStatusControllerService,
    CustomerInformationControllerService,
    CustomerPaymentControllerService,
    ResourceControllerService,
    SummaryPaymentsControllerService,
    UserControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
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
