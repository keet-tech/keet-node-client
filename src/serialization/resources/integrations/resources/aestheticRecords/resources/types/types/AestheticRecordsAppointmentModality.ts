/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AestheticRecordsAppointmentModality: core.serialization.Schema<
    serializers.integrations.aestheticRecords.AestheticRecordsAppointmentModality.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsAppointmentModality
> = core.serialization.enum_(["in_person", "virtual"]);

export declare namespace AestheticRecordsAppointmentModality {
    export type Raw = "in_person" | "virtual";
}
