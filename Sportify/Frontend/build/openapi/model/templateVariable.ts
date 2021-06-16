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


export interface TemplateVariable { 
    description?: string;
    name?: string;
    type?: TemplateVariable.TypeEnum;
}
export namespace TemplateVariable {
    export type TypeEnum = 'COMPOSITE_PARAM' | 'FRAGMENT' | 'PATH_VARIABLE' | 'REQUEST_PARAM' | 'REQUEST_PARAM_CONTINUED' | 'SEGMENT';
    export const TypeEnum = {
        CompositeParam: 'COMPOSITE_PARAM' as TypeEnum,
        Fragment: 'FRAGMENT' as TypeEnum,
        PathVariable: 'PATH_VARIABLE' as TypeEnum,
        RequestParam: 'REQUEST_PARAM' as TypeEnum,
        RequestParamContinued: 'REQUEST_PARAM_CONTINUED' as TypeEnum,
        Segment: 'SEGMENT' as TypeEnum
    };
}


