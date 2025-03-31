/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { VinSalesAddress } from "./VinSalesAddress";

export const VinSalesCustomer: core.serialization.ObjectSchema<
    serializers.integrations.vin.VinSalesCustomer.Raw,
    Keet.integrations.vin.VinSalesCustomer
> = core.serialization.object({
    id: core.serialization.number(),
    firstName: core.serialization.string(),
    lastName: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    homePhoneNumber: core.serialization.string().optional(),
    workPhoneNumber: core.serialization.string().optional(),
    cellPhoneNumber: core.serialization.string().optional(),
    address: VinSalesAddress.optional(),
    href: core.serialization.string().optional(),
});

export declare namespace VinSalesCustomer {
    interface Raw {
        id: number;
        firstName: string;
        lastName?: string | null;
        email?: string | null;
        homePhoneNumber?: string | null;
        workPhoneNumber?: string | null;
        cellPhoneNumber?: string | null;
        address?: VinSalesAddress.Raw | null;
        href?: string | null;
    }
}
