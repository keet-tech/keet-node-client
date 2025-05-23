/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const VinSalesAddress: core.serialization.ObjectSchema<
    serializers.integrations.vin.VinSalesAddress.Raw,
    Keet.integrations.vin.VinSalesAddress
> = core.serialization.object({
    streetAddress: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    postalCode: core.serialization.string().optional(),
});

export declare namespace VinSalesAddress {
    export interface Raw {
        streetAddress?: string | null;
        city?: string | null;
        state?: string | null;
        postalCode?: string | null;
    }
}
