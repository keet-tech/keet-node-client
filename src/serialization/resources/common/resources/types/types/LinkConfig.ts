/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OfferedIntegrations } from "./OfferedIntegrations";

export const LinkConfig: core.serialization.ObjectSchema<serializers.common.LinkConfig.Raw, Keet.common.LinkConfig> =
    core.serialization.object({
        endUserId: core.serialization.string(),
        integration: OfferedIntegrations,
        companyName: core.serialization.string().optional(),
        companyLogoUri: core.serialization.string().optional(),
    });

export declare namespace LinkConfig {
    export interface Raw {
        endUserId: string;
        integration: OfferedIntegrations.Raw;
        companyName?: string | null;
        companyLogoUri?: string | null;
    }
}
