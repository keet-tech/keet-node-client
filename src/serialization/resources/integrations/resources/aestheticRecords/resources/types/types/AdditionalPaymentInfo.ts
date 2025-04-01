/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AdditionalPaymentInfo: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AdditionalPaymentInfo.Raw,
    Keet.integrations.aestheticRecords.AdditionalPaymentInfo
> = core.serialization.object({
    creditCardNumber: core.serialization.number(),
    expirationDate: core.serialization.string(),
    cvv: core.serialization.number(),
});

export declare namespace AdditionalPaymentInfo {
    export interface Raw {
        creditCardNumber: number;
        expirationDate: string;
        cvv: number;
    }
}
