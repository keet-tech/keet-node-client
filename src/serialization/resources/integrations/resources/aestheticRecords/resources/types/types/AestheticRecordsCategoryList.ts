/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AestheticRecordsCategoryList: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsCategoryList.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsCategoryList
> = core.serialization.object({
    id: core.serialization.number(),
    categoryName: core.serialization.property("category_name", core.serialization.string()),
});

export declare namespace AestheticRecordsCategoryList {
    export interface Raw {
        id: number;
        category_name: string;
    }
}
