/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as KeetApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { LinkConfig } from "../../../common/resources/types/types/LinkConfig";

export const CreateLinkRequest: core.serialization.Schema<
    serializers.CreateLinkRequest.Raw,
    KeetApi.CreateLinkRequest
> = core.serialization.object({
    linkConfig: LinkConfig,
});

export declare namespace CreateLinkRequest {
    interface Raw {
        linkConfig: LinkConfig.Raw;
    }
}
