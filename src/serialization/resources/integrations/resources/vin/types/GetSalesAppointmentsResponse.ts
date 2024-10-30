/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const GetSalesAppointmentsResponse: core.serialization.ObjectSchema<
    serializers.integrations.GetSalesAppointmentsResponse.Raw,
    Keet.integrations.GetSalesAppointmentsResponse
> = core.serialization.object({
    status: ResponseStatus,
    appointments: core.serialization.unknown(),
});

export declare namespace GetSalesAppointmentsResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        appointments?: unknown;
    }
}
