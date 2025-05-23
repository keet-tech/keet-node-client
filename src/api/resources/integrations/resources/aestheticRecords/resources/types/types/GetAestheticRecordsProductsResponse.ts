/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface GetAestheticRecordsProductsResponse {
    status: Keet.common.ResponseStatus;
    products: Keet.integrations.aestheticRecords.AestheticRecordsProduct[];
    pagination: Keet.integrations.aestheticRecords.AestheticRecordsPagination;
    categoryList?: Keet.integrations.aestheticRecords.AestheticRecordsCategoryList[];
}
