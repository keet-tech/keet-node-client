/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../index";

/**
 * @example
 *     {
 *         xAccountToken: "X-Account-Token",
 *         leadId: "leadId",
 *         customerId: "customerId",
 *         dealerId: "dealerId",
 *         phoneNumber: "phoneNumber",
 *         note: "note",
 *         customerContactedCode: "Y",
 *         numberDialedCode: "Home",
 *         nextCallTimeFrame: 1,
 *         nextCallTimeSpanType: "Days",
 *         outbound: true
 *     }
 */
export interface CreateVinCall {
    /**
     * The account token that is associated with the end user linked to this account
     */
    xAccountToken: string;
    leadId: string;
    customerId: string;
    dealerId: string;
    phoneNumber: string;
    note: string;
    /** Y = Yes, N = No, M = Machine Answered */
    customerContactedCode: Keet.integrations.vin.VinCustomerContactedCodes;
    /** The type of the customers phone number, either home, work, or cell. Found using the getCustomers endpoint. */
    numberDialedCode: Keet.integrations.vin.VinNumberDialedCodes;
    /** The number of days, hours, or months to wait before the next call. */
    nextCallTimeFrame: number;
    /** The time span type for the next call, either days, hours, or months. */
    nextCallTimeSpanType: Keet.integrations.vin.VinNextCallTimeSpanTypes;
    /** Whether the call is outbound or inbound. If inbound, customer contacted code must be Yes. */
    outbound: boolean;
}
