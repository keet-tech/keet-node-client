/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const CreateDispatchMeCustomerResponse: core.serialization.ObjectSchema<
    serializers.integrations.CreateDispatchMeCustomerResponse.Raw,
    Keet.integrations.CreateDispatchMeCustomerResponse
> = core.serialization.object({
    customer: core.serialization.unknown(),
    status: ResponseStatus,
});

export declare namespace CreateDispatchMeCustomerResponse {
    interface Raw {
        customer?: unknown;
        status: ResponseStatus.Raw;
    }
}
