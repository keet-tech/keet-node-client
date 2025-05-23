/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ResponseStatus } from "../../../../../../common/resources/types/types/ResponseStatus";
import { AestheticRecordsProduct } from "./AestheticRecordsProduct";
import { AestheticRecordsPagination } from "./AestheticRecordsPagination";
import { AestheticRecordsCategoryList } from "./AestheticRecordsCategoryList";

export const GetAestheticRecordsProductsResponse: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.GetAestheticRecordsProductsResponse.Raw,
    Keet.integrations.aestheticRecords.GetAestheticRecordsProductsResponse
> = core.serialization.object({
    status: ResponseStatus,
    products: core.serialization.list(AestheticRecordsProduct),
    pagination: AestheticRecordsPagination,
    categoryList: core.serialization.property(
        "category_list",
        core.serialization.list(AestheticRecordsCategoryList).optional(),
    ),
});

export declare namespace GetAestheticRecordsProductsResponse {
    export interface Raw {
        status: ResponseStatus.Raw;
        products: AestheticRecordsProduct.Raw[];
        pagination: AestheticRecordsPagination.Raw;
        category_list?: AestheticRecordsCategoryList.Raw[] | null;
    }
}
