/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface VinSalesAppointment {
    id: number;
    dealer: Keet.integrations.vin.VinSalesDealer;
    customer: Keet.integrations.vin.VinSalesCustomer;
    lead: Keet.integrations.vin.VinSalesLead;
    visit?: Keet.integrations.vin.VinSalesVisit;
    location: Keet.integrations.vin.VinSalesLocation;
    status: string;
    purpose?: string;
    isConfirmed: boolean;
    startTimeUtc: string;
    endTimeUtc: string;
    assignedUser: Keet.integrations.vin.VinSalesUser;
    lastEditedDateUtc: string;
    completedByUser?: Keet.integrations.vin.VinSalesUser;
    href: string;
    appointmentType: string;
}
