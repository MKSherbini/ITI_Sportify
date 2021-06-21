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


export interface NewsDetailsDto { 
    content?: string;
    date?: string;
    description?: string;
    game?: NewsDetailsDto.GameEnum;
    id?: number;
    image?: string;
    publisher?: string;
    title?: string;
}
export namespace NewsDetailsDto {
    export type GameEnum = 'CODMW' | 'DOTA2' | 'LOL' | 'VALORANT';
    export const GameEnum = {
        Codmw: 'CODMW' as GameEnum,
        Dota2: 'DOTA2' as GameEnum,
        Lol: 'LOL' as GameEnum,
        Valorant: 'VALORANT' as GameEnum
    };
}


