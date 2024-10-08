/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Keet from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const ChangeStatusRequest: core.serialization.Schema<
    serializers.integrations.ChangeStatusRequest.Raw,
    Keet.integrations.ChangeStatusRequest
> = core.serialization.object({
    statusMessage: core.serialization.string(),
});

export declare namespace ChangeStatusRequest {
    interface Raw {
        statusMessage: string;
    }
}
