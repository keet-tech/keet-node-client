/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface AestheticRecordsAppointmentExt
    extends Keet.integrations.aestheticRecords.AestheticRecordsAppointmentService {
    appointmentId: number;
    serviceId: number;
    created: string;
    modified: string;
    service: Keet.integrations.aestheticRecords.AestheticRecordsServiceAppointment;
}
