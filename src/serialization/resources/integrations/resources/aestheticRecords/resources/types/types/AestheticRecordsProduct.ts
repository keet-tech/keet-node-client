/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { AestheticRecordsCategory } from "./AestheticRecordsCategory";
import { AestheticRecordsProductPrice } from "./AestheticRecordsProductPrice";

export const AestheticRecordsProduct: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsProduct.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsProduct
> = core.serialization.object({
    id: core.serialization.number(),
    batchId: core.serialization.property("batch_id", core.serialization.unknown().optional()),
    categoryId: core.serialization.property("category_id", core.serialization.string()),
    productName: core.serialization.property("product_name", core.serialization.string()),
    matchPattern: core.serialization.property("match_pattern", core.serialization.unknown().optional()),
    productSku: core.serialization.property("product_sku", core.serialization.unknown().optional()),
    productDescription: core.serialization.property("product_description", core.serialization.string().optional()),
    productImage: core.serialization.property("product_image", core.serialization.unknown().optional()),
    tax: core.serialization.number().optional(),
    type: core.serialization.string().optional(),
    productType: core.serialization.property("product_type", core.serialization.string()),
    productTypeLabel: core.serialization.property("product_type_label", core.serialization.string().optional()),
    isSystemProduct: core.serialization.property("is_system_product", core.serialization.number()),
    pricePerUnit: core.serialization.property("price_per_unit", core.serialization.number().optional()),
    costPerUnit: core.serialization.property("cost_per_unit", core.serialization.number().optional()),
    availableStock: core.serialization.property("available_stock", core.serialization.number()),
    stockAlert: core.serialization.property("stock_alert", core.serialization.number()),
    labId: core.serialization.property("lab_id", core.serialization.unknown().optional()),
    toxinType: core.serialization.property("toxin_type", core.serialization.string()),
    fillerMoleculeId: core.serialization.unknown().optional(),
    status: core.serialization.number(),
    price: core.serialization.number().optional(),
    copied: core.serialization.number().optional(),
    systemProductId: core.serialization.property("system_product_id", core.serialization.number().optional()),
    isNewProduct: core.serialization.property("is_new_product", core.serialization.number().optional()),
    created: core.serialization.string().optional(),
    modified: core.serialization.string().optional(),
    isInventoryEnabled: core.serialization.property("is_inventory_enabled", core.serialization.number().optional()),
    isStockInventoryEnabled: core.serialization.property(
        "is_stock_inventory_enabled",
        core.serialization.number().optional()
    ),
    isSupplierEnabled: core.serialization.property("is_supplier_enabled", core.serialization.number().optional()),
    isTaxEnabled: core.serialization.property("is_tax_enabled", core.serialization.number().optional()),
    isProductActive: core.serialization.property("is_product_active", core.serialization.number().optional()),
    costToCompany: core.serialization.property("cost_to_company", core.serialization.number()),
    pricePerUnitMembers: core.serialization.property("price_per_unit_members", core.serialization.unknown().optional()),
    countUnitsBy: core.serialization.property("count_units_by", core.serialization.number().optional()),
    startAtUnit: core.serialization.property("start_at_unit", core.serialization.number().optional()),
    productRatioEnabled: core.serialization.property("product_ratio_enabled", core.serialization.number().optional()),
    ratio: core.serialization.number().optional(),
    productService: core.serialization.property("product_service", core.serialization.string().optional()),
    keywords: core.serialization.string().optional(),
    billForWholeUnit: core.serialization.property("bill_for_whole_unit", core.serialization.number().optional()),
    accountMedicalSuppliesInReports: core.serialization.property(
        "account_medical_supplies_in_reports",
        core.serialization.number().optional()
    ),
    isAutodeductEnabled: core.serialization.property("is_autodeduct_enabled", core.serialization.number().optional()),
    productPerClinic: core.serialization.property("product_per_clinic", core.serialization.number().optional()),
    isEvolusProduct: core.serialization.property("is_evolus_product", core.serialization.boolean().optional()),
    shopifyProductId: core.serialization.property("shopify_product_id", core.serialization.number().optional()),
    shopifyProductVariantId: core.serialization.property(
        "shopify_product_variant_id",
        core.serialization.number().optional()
    ),
    shopifyDefaultClinicId: core.serialization.property(
        "shopify_default_clinic_id",
        core.serialization.number().optional()
    ),
    inventoryType: core.serialization.property("inventory_type", core.serialization.unknown().optional()),
    catId: core.serialization.property("cat_id", core.serialization.number().optional()),
    categoryName: core.serialization.property("category_name", core.serialization.string().optional()),
    productImageUrl: core.serialization.property("product_image_url", core.serialization.string().optional()),
    category: AestheticRecordsCategory.optional(),
    productInventory: core.serialization.property(
        "product_inventory",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
    totalAvailableUnits: core.serialization.property("total_available_units", core.serialization.number().optional()),
    productPricePerClinic: core.serialization.property(
        "product_price_per_clinic",
        core.serialization.list(AestheticRecordsProductPrice).optional()
    ),
});

export declare namespace AestheticRecordsProduct {
    interface Raw {
        id: number;
        batch_id?: unknown | null;
        category_id: string;
        product_name: string;
        match_pattern?: unknown | null;
        product_sku?: unknown | null;
        product_description?: string | null;
        product_image?: unknown | null;
        tax?: number | null;
        type?: string | null;
        product_type: string;
        product_type_label?: string | null;
        is_system_product: number;
        price_per_unit?: number | null;
        cost_per_unit?: number | null;
        available_stock: number;
        stock_alert: number;
        lab_id?: unknown | null;
        toxin_type: string;
        fillerMoleculeId?: unknown | null;
        status: number;
        price?: number | null;
        copied?: number | null;
        system_product_id?: number | null;
        is_new_product?: number | null;
        created?: string | null;
        modified?: string | null;
        is_inventory_enabled?: number | null;
        is_stock_inventory_enabled?: number | null;
        is_supplier_enabled?: number | null;
        is_tax_enabled?: number | null;
        is_product_active?: number | null;
        cost_to_company: number;
        price_per_unit_members?: unknown | null;
        count_units_by?: number | null;
        start_at_unit?: number | null;
        product_ratio_enabled?: number | null;
        ratio?: number | null;
        product_service?: string | null;
        keywords?: string | null;
        bill_for_whole_unit?: number | null;
        account_medical_supplies_in_reports?: number | null;
        is_autodeduct_enabled?: number | null;
        product_per_clinic?: number | null;
        is_evolus_product?: boolean | null;
        shopify_product_id?: number | null;
        shopify_product_variant_id?: number | null;
        shopify_default_clinic_id?: number | null;
        inventory_type?: unknown | null;
        cat_id?: number | null;
        category_name?: string | null;
        product_image_url?: string | null;
        category?: AestheticRecordsCategory.Raw | null;
        product_inventory?: unknown[] | null;
        total_available_units?: number | null;
        product_price_per_clinic?: AestheticRecordsProductPrice.Raw[] | null;
    }
}
