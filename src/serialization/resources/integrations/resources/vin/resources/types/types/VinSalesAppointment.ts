/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { VinSalesDealer } from "./VinSalesDealer";
import { VinSalesCustomer } from "./VinSalesCustomer";
import { VinSalesLead } from "./VinSalesLead";
import { VinSalesVisit } from "./VinSalesVisit";
import { VinSalesLocation } from "./VinSalesLocation";
import { VinSalesUser } from "./VinSalesUser";

export const VinSalesAppointment: core.serialization.ObjectSchema<
    serializers.integrations.vin.VinSalesAppointment.Raw,
    Keet.integrations.vin.VinSalesAppointment
> = core.serialization.object({
    id: core.serialization.number(),
    dealer: VinSalesDealer,
    customer: VinSalesCustomer,
    lead: VinSalesLead,
    visit: VinSalesVisit.optional(),
    location: VinSalesLocation,
    status: core.serialization.string(),
    purpose: core.serialization.string().optional(),
    isConfirmed: core.serialization.boolean(),
    startTimeUtc: core.serialization.string(),
    endTimeUtc: core.serialization.string(),
    assignedUser: VinSalesUser,
    lastEditedDateUtc: core.serialization.string(),
    completedByUser: VinSalesUser.optional(),
    href: core.serialization.string(),
    appointmentType: core.serialization.string(),
});

export declare namespace VinSalesAppointment {
    export interface Raw {
        id: number;
        dealer: VinSalesDealer.Raw;
        customer: VinSalesCustomer.Raw;
        lead: VinSalesLead.Raw;
        visit?: VinSalesVisit.Raw | null;
        location: VinSalesLocation.Raw;
        status: string;
        purpose?: string | null;
        isConfirmed: boolean;
        startTimeUtc: string;
        endTimeUtc: string;
        assignedUser: VinSalesUser.Raw;
        lastEditedDateUtc: string;
        completedByUser?: VinSalesUser.Raw | null;
        href: string;
        appointmentType: string;
    }
}
