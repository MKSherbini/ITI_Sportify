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
import { Links } from './links';
import { TeamMember } from './teamMember';


export interface EntityModelOfTeam { 
    acronym?: string;
    id?: number;
    imageUrl?: string;
    links?: Links;
    name?: string;
    teamMembers?: Array<TeamMember>;
}
