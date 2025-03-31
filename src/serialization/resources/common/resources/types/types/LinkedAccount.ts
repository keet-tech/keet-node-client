/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Integration } from "./Integration";

export const LinkedAccount: core.serialization.ObjectSchema<
    serializers.common.LinkedAccount.Raw,
    Keet.common.LinkedAccount
> = core.serialization.object({
    id: core.serialization.string(),
    endUserId: core.serialization.string(),
    createdAt: core.serialization.date(),
    integrations: core.serialization.list(Integration),
});

export declare namespace LinkedAccount {
    interface Raw {
        id: string;
        endUserId: string;
        createdAt: string;
        integrations: Integration.Raw[];
    }
}
