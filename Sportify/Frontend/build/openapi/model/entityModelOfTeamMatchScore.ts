/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TeamMatchPrimaryKey } from './teamMatchPrimaryKey';
import { Links } from './links';
import { Team } from './team';


export interface EntityModelOfTeamMatchScore { 
    id?: TeamMatchPrimaryKey;
    links?: Links;
    _new?: boolean;
    score?: number;
    team?: Team;
}
