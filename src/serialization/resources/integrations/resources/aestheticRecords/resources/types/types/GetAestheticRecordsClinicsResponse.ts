/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ResponseStatus } from "../../../../../../common/resources/types/types/ResponseStatus";
import { AestheticRecordsDetailedClinic } from "./AestheticRecordsDetailedClinic";

export const GetAestheticRecordsClinicsResponse: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.GetAestheticRecordsClinicsResponse.Raw,
    Keet.integrations.aestheticRecords.GetAestheticRecordsClinicsResponse
> = core.serialization.object({
    status: ResponseStatus,
    clinics: core.serialization.list(AestheticRecordsDetailedClinic),
});

export declare namespace GetAestheticRecordsClinicsResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
        clinics: AestheticRecordsDetailedClinic.Raw[];
    }
}
