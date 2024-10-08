/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Keet from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Story } from "./Story";

export const StoryResponse: core.serialization.ObjectSchema<
    serializers.integrations.StoryResponse.Raw,
    Keet.integrations.StoryResponse
> = core.serialization.object({
    nextId: core.serialization.string(),
    stories: core.serialization.list(Story),
});

export declare namespace StoryResponse {
    interface Raw {
        nextId: string;
        stories: Story.Raw[];
    }
}
