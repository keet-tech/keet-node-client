/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AestheticRecordsUser: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsUser.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsUser
> = core.serialization.object({
    id: core.serialization.number(),
    firstname: core.serialization.string(),
    lastname: core.serialization.string(),
    appointmentColor: core.serialization.property("appointment_color", core.serialization.string()),
    roleName: core.serialization.property("role_name", core.serialization.string().optional()),
    userImageUrl: core.serialization.property("user_image_url", core.serialization.string().optional()),
    signatureUrl: core.serialization.property("signature_url", core.serialization.string().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string()),
});

export declare namespace AestheticRecordsUser {
    export interface Raw {
        id: number;
        firstname: string;
        lastname: string;
        appointment_color: string;
        role_name?: string | null;
        user_image_url?: string | null;
        signature_url?: string | null;
        full_name: string;
    }
}
