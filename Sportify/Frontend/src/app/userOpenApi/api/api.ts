export * from './authenticatingEndPoint.service';
import { AuthenticatingEndPointService } from './authenticatingEndPoint.service';
export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './usersResource.service';
import { UsersResourceService } from './usersResource.service';
export const APIS = [AuthenticatingEndPointService, BasicErrorControllerService, UsersResourceService];
