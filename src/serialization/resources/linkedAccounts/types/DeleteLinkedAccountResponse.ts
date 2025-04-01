/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Keet from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseStatus } from "../../common/resources/types/types/ResponseStatus";

export const DeleteLinkedAccountResponse: core.serialization.ObjectSchema<
    serializers.DeleteLinkedAccountResponse.Raw,
    Keet.DeleteLinkedAccountResponse
> = core.serialization.object({
    status: ResponseStatus,
});

export declare namespace DeleteLinkedAccountResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
    }
}
