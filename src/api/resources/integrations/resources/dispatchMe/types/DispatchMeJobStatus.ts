/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type DispatchMeJobStatus = "offered" | "scheduled" | "un-scheduled" | "paused" | "in_progress" | "complete";

export const DispatchMeJobStatus = {
    Offered: "offered",
    Scheduled: "scheduled",
    Unscheduled: "un-scheduled",
    Paused: "paused",
    InProgress: "in_progress",
    Complete: "complete",
} as const;
