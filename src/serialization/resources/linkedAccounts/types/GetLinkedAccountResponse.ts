/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as KeetApi from "../../../../api/index";
import * as core from "../../../../core";
import { ResponseStatus } from "../../common/resources/types/types/ResponseStatus";
import { LinkedAccount } from "../../common/resources/types/types/LinkedAccount";

export const GetLinkedAccountResponse: core.serialization.ObjectSchema<
    serializers.GetLinkedAccountResponse.Raw,
    KeetApi.GetLinkedAccountResponse
> = core.serialization.object({
    status: ResponseStatus,
    linkedAccount: LinkedAccount,
});

export declare namespace GetLinkedAccountResponse {
    interface Raw {
        status: ResponseStatus.Raw;
        linkedAccount: LinkedAccount.Raw;
    }
}
