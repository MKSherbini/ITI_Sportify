export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './matchesResource.service';
import { MatchesResourceService } from './matchesResource.service';
export * from './userPrediction.service';
import { UserPredictionService } from './userPrediction.service';
export const APIS = [BasicErrorControllerService, MatchesResourceService, UserPredictionService];
