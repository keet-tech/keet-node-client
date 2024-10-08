/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const AmazonBusinessItem: core.serialization.ObjectSchema<
    serializers.integrations.AmazonBusinessItem.Raw,
    Keet.integrations.AmazonBusinessItem
> = core.serialization.object({
    title: core.serialization.string(),
    brand: core.serialization.string(),
    price: core.serialization.string(),
    url: core.serialization.string(),
    pricePerUnit: core.serialization.string().optional(),
    rating: core.serialization.string().optional(),
    reviewCount: core.serialization.string().optional(),
    imageUrl: core.serialization.string(),
    merchant: core.serialization.string().optional(),
    availability: core.serialization.string(),
    purchaseDate: core.serialization.string().optional(),
});

export declare namespace AmazonBusinessItem {
    interface Raw {
        title: string;
        brand: string;
        price: string;
        url: string;
        pricePerUnit?: string | null;
        rating?: string | null;
        reviewCount?: string | null;
        imageUrl: string;
        merchant?: string | null;
        availability: string;
        purchaseDate?: string | null;
    }
}
