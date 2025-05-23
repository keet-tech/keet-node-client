/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Keet from "../../../../../../../index";

export interface AestheticRecordsPagination {
    currentPage: number;
    firstPageUrl: string;
    from: number;
    lastPage: number;
    lastPageUrl?: string;
    links: Keet.integrations.aestheticRecords.AestheticRecordsLink[];
    nextPageUrl?: string;
    path: string;
    perPage?: unknown;
    prevPageUrl?: string;
    to: number;
    total: number;
}
