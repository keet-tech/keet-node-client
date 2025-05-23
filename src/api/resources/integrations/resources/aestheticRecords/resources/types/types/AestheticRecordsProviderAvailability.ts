/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface AestheticRecordsProviderAvailability {
    availableDays: Record<string, Record<string, string[]>>;
    provider: Keet.integrations.aestheticRecords.AestheticRecordsDetailedProvider;
    uniqueDates: string[];
    /** First available date for each service. If the provider has no availability this will be null. */
    firstAvailable?: Record<string, Record<string, string[]>>;
    timeFormat: string;
}
