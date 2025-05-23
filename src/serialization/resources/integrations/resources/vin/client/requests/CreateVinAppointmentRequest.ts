/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Keet from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const CreateVinAppointmentRequest: core.serialization.Schema<
    serializers.integrations.vin.CreateVinAppointmentRequest.Raw,
    Omit<Keet.integrations.vin.CreateVinAppointmentRequest, "xAccountToken">
> = core.serialization.object({
    leadId: core.serialization.string(),
    customerId: core.serialization.string(),
    dealerId: core.serialization.string(),
    description: core.serialization.string(),
    endDate: core.serialization.string(),
    startDate: core.serialization.string(),
    assignedUserId: core.serialization.string(),
});

export declare namespace CreateVinAppointmentRequest {
    export interface Raw {
        leadId: string;
        customerId: string;
        dealerId: string;
        description: string;
        endDate: string;
        startDate: string;
        assignedUserId: string;
    }
}
