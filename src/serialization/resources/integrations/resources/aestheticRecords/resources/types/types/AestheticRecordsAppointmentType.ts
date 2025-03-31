/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { AestheticRecordsService } from "./AestheticRecordsService";

export const AestheticRecordsAppointmentType: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsAppointmentType.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsAppointmentType
> = core.serialization.object({
    services: core.serialization.list(AestheticRecordsService),
    packages: core.serialization.unknown(),
    clinic: core.serialization.unknown(),
});

export declare namespace AestheticRecordsAppointmentType {
    interface Raw {
        services: AestheticRecordsService.Raw[];
        packages?: unknown;
        clinic?: unknown;
    }
}
