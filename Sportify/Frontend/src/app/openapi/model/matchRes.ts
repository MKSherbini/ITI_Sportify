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
import { Game } from './game';
import { TeamMatchScoreRes } from './teamMatchScoreRes';


export interface MatchRes { 
    game?: Game;
    id?: number;
    name?: string;
    pandoraId?: number;
    scheduledAt?: string;
    status?: MatchRes.StatusEnum;
    teams?: Array<TeamMatchScoreRes>;
}
export namespace MatchRes {
    export type StatusEnum = 'CANCELED' | 'FINISHED' | 'NOT_STARTED' | 'POSTPONED' | 'RUNNING';
    export const StatusEnum = {
        Canceled: 'CANCELED' as StatusEnum,
        Finished: 'FINISHED' as StatusEnum,
        NotStarted: 'NOT_STARTED' as StatusEnum,
        Postponed: 'POSTPONED' as StatusEnum,
        Running: 'RUNNING' as StatusEnum
    };
}

