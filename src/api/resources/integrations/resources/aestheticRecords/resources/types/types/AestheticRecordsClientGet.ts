/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface AestheticRecordsClientGet extends Keet.integrations.aestheticRecords.AestheticRecordsClient {
    upcomingAppointmentCount?: number;
    leadStar?: boolean;
    documentsExpirationDate?: unknown;
    userImageUrl?: string;
    countryName?: unknown;
    lastAppointment?: Keet.integrations.aestheticRecords.AestheticRecordsAppointment[];
    procedure?: unknown[];
    patientMembershipSubscription?: unknown[];
    clinic?: Keet.integrations.aestheticRecords.AestheticRecordsClinic;
}
