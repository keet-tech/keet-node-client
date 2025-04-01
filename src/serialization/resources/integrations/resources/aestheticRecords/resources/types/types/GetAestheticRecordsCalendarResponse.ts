/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ResponseStatus } from "../../../../../../common/resources/types/types/ResponseStatus";
import { AestheticRecordsCalendar } from "./AestheticRecordsCalendar";

export const GetAestheticRecordsCalendarResponse: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.GetAestheticRecordsCalendarResponse.Raw,
    Keet.integrations.aestheticRecords.GetAestheticRecordsCalendarResponse
> = core.serialization.object({
    status: ResponseStatus,
    calendar: AestheticRecordsCalendar,
});

export declare namespace GetAestheticRecordsCalendarResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
        calendar: AestheticRecordsCalendar.Raw;
    }
}
