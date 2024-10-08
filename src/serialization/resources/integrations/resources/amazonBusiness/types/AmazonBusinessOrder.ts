/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { AmazonBusinessAddress } from "./AmazonBusinessAddress";

export const AmazonBusinessOrder: core.serialization.ObjectSchema<
    serializers.integrations.AmazonBusinessOrder.Raw,
    Keet.integrations.AmazonBusinessOrder
> = core.serialization.object({
    date: core.serialization.date(),
    total: core.serialization.string(),
    address: AmazonBusinessAddress.optional(),
    orderNumber: core.serialization.string(),
    items: core.serialization.list(core.serialization.string()),
});

export declare namespace AmazonBusinessOrder {
    interface Raw {
        date: string;
        total: string;
        address?: AmazonBusinessAddress.Raw | null;
        orderNumber: string;
        items: string[];
    }
}
