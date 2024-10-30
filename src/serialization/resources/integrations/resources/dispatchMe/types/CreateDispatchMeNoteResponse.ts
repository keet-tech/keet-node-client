/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ResponseStatus } from "../../../../common/resources/types/types/ResponseStatus";

export const CreateDispatchMeNoteResponse: core.serialization.ObjectSchema<
    serializers.integrations.CreateDispatchMeNoteResponse.Raw,
    Keet.integrations.CreateDispatchMeNoteResponse
> = core.serialization.object({
    status: ResponseStatus,
});

export declare namespace CreateDispatchMeNoteResponse {
    interface Raw {
        status: ResponseStatus.Raw;
    }
}
