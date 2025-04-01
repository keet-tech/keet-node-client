/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ResponseStatus } from "../../../../../../common/resources/types/types/ResponseStatus";

export const CreateVinAppointmentResponse: core.serialization.ObjectSchema<
    serializers.integrations.vin.CreateVinAppointmentResponse.Raw,
    Keet.integrations.vin.CreateVinAppointmentResponse
> = core.serialization.object({
    status: ResponseStatus,
});

export declare namespace CreateVinAppointmentResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
    }
}
