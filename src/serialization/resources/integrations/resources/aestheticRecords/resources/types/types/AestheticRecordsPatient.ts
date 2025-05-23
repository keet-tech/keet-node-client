/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AestheticRecordsPatient: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsPatient.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsPatient
> = core.serialization.object({
    id: core.serialization.number(),
    firstname: core.serialization.string(),
    lastname: core.serialization.string(),
    email: core.serialization.string().optional(),
    phoneNumber: core.serialization.string().optional(),
    userImageUrl: core.serialization.property("user_image_url", core.serialization.string().optional()),
    countryName: core.serialization.property("country_name", core.serialization.string().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string()),
});

export declare namespace AestheticRecordsPatient {
    export interface Raw {
        id: number;
        firstname: string;
        lastname: string;
        email?: string | null;
        phoneNumber?: string | null;
        user_image_url?: string | null;
        country_name?: string | null;
        full_name: string;
    }
}
