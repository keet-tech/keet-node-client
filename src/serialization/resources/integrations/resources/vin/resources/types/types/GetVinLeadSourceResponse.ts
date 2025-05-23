/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ResponseStatus } from "../../../../../../common/resources/types/types/ResponseStatus";
import { VinLeadSource } from "./VinLeadSource";

export const GetVinLeadSourceResponse: core.serialization.ObjectSchema<
    serializers.integrations.vin.GetVinLeadSourceResponse.Raw,
    Keet.integrations.vin.GetVinLeadSourceResponse
> = core.serialization.object({
    status: ResponseStatus,
    leadSource: core.serialization.list(VinLeadSource),
});

export declare namespace GetVinLeadSourceResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
        leadSource: VinLeadSource.Raw[];
    }
}
