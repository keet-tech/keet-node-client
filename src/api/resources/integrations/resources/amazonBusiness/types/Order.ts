/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as KeetApi from "../../../../../index";

export interface Order {
    date: Date;
    total: string;
    address?: KeetApi.integrations.Address;
    orderNumber: string;
    items: string[];
}
