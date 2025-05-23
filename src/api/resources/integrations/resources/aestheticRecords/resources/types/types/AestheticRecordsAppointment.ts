/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AestheticRecordsAppointment {
    id: number;
    patientId: number;
    appointmentDatetime: string;
    appointmentStartOn: string;
    appointmentEndtime: string;
    date?: string;
    time?: string;
    formatTime?: string;
    formatDate?: string;
    meetingUrl?: string;
    startTime?: string;
    endTime?: string;
    appointmentTimezoneAbbr?: string;
    displayStatus?: string;
}
