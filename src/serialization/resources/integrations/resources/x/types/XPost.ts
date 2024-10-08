/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const XPost: core.serialization.ObjectSchema<serializers.integrations.XPost.Raw, Keet.integrations.XPost> =
    core.serialization.object({
        id: core.serialization.string(),
    });

export declare namespace XPost {
    interface Raw {
        id: string;
    }
}
