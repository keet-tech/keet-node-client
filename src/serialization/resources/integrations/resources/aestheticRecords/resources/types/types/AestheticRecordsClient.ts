/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as Keet from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const AestheticRecordsClient: core.serialization.ObjectSchema<
    serializers.integrations.aestheticRecords.AestheticRecordsClient.Raw,
    Keet.integrations.aestheticRecords.AestheticRecordsClient
> = core.serialization.object({
    id: core.serialization.number(),
    userId: core.serialization.property("user_id", core.serialization.number()),
    firstname: core.serialization.string(),
    lastname: core.serialization.string(),
    nickName: core.serialization.property("nick_name", core.serialization.string().optional()),
    email: core.serialization.string().optional(),
    email2: core.serialization.property("email_2", core.serialization.string().optional()),
    email3: core.serialization.property("email_3", core.serialization.string().optional()),
    email4: core.serialization.property("email_4", core.serialization.string().optional()),
    referralPerson: core.serialization.property("referral_person", core.serialization.string().optional()),
    referralSource: core.serialization.property("referral_source", core.serialization.unknown().optional()),
    referralSourceSubcategory: core.serialization.property(
        "referral_source_subcategory",
        core.serialization.unknown().optional()
    ),
    phoneNumber: core.serialization.string().optional(),
    phoneNumber2: core.serialization.property("phoneNumber_2", core.serialization.string().optional()),
    phoneNumber3: core.serialization.property("phoneNumber_3", core.serialization.string().optional()),
    phoneNumber4: core.serialization.property("phoneNumber_4", core.serialization.string().optional()),
    gender: core.serialization.string().optional(),
    dateOfBirth: core.serialization.property("date_of_birth", core.serialization.string().optional()),
    addressLine1: core.serialization.property("address_line_1", core.serialization.string().optional()),
    addressLine2: core.serialization.property("address_line_2", core.serialization.string().optional()),
    userImage: core.serialization.property("user_image", core.serialization.string().optional()),
    allergies: core.serialization.unknown().optional(),
    currentMedication: core.serialization.property("current_medication", core.serialization.unknown().optional()),
    pincode: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    treatmentSummary: core.serialization.property("treatment_summary", core.serialization.unknown().optional()),
    created: core.serialization.string().optional(),
    modified: core.serialization.string().optional(),
    status: core.serialization.number().optional(),
    deletedAt: core.serialization.property("deleted_at", core.serialization.unknown().optional()),
    brilliantAccNumber: core.serialization.property("brilliant_acc_number", core.serialization.unknown().optional()),
    brilliantPassword: core.serialization.property("brilliant_password", core.serialization.unknown().optional()),
    aspireAccEmail: core.serialization.property("aspire_acc_email", core.serialization.unknown().optional()),
    aspirePassword: core.serialization.property("aspire_password", core.serialization.unknown().optional()),
    accessPortal: core.serialization.property("access_portal", core.serialization.number().optional()),
    totalSaleRelationship: core.serialization.property(
        "total_sale_relationship",
        core.serialization.number().optional()
    ),
    satisfactionScore: core.serialization.property("satisfaction_score", core.serialization.unknown().optional()),
    averageServiceDays: core.serialization.property("average_service_days", core.serialization.number().optional()),
    isFired: core.serialization.property("is_fired", core.serialization.number().optional()),
    doNotCall: core.serialization.property("do_not_call", core.serialization.number().optional()),
    isMonthlyMembership: core.serialization.property("is_monthly_membership", core.serialization.number().optional()),
    ssnNumber: core.serialization.property("ssn_number", core.serialization.unknown().optional()),
    totalSurveys: core.serialization.property("total_surveys", core.serialization.number().optional()),
    doNotSms: core.serialization.property("do_not_sms", core.serialization.number().optional()),
    referralOther: core.serialization.property("referral_other", core.serialization.unknown().optional()),
    memberType: core.serialization.property("member_type", core.serialization.unknown().optional()),
    emergencyContactName: core.serialization.property(
        "emergency_contact_name",
        core.serialization.unknown().optional()
    ),
    emergencyContactNumber: core.serialization.property(
        "emergency_contact_number",
        core.serialization.unknown().optional()
    ),
    membershipCancelledReason: core.serialization.property(
        "membership_cancelled_reason",
        core.serialization.string().optional()
    ),
    uniqueId: core.serialization.property("unique_id", core.serialization.unknown().optional()),
    clinicId: core.serialization.property("clinic_id", core.serialization.number().optional()),
    middlename: core.serialization.unknown().optional(),
    medicalHistoryConsent: core.serialization.property(
        "medical_history_consent",
        core.serialization.number().optional()
    ),
    cherryPatientId: core.serialization.property("cherry_patient_id", core.serialization.string().optional()),
    cherryCreationProcessing: core.serialization.property(
        "cherry_creation_processing",
        core.serialization.boolean().optional()
    ),
    cherryRefreshingProcessing: core.serialization.property(
        "cherry_refreshing_processing",
        core.serialization.boolean().optional()
    ),
    aspireEnrolledEmail: core.serialization.property("aspire_enrolled_email", core.serialization.string().optional()),
    ghlContactId: core.serialization.property("ghl_contact_id", core.serialization.unknown().optional()),
    xperienceUsername: core.serialization.property("xperience_username", core.serialization.unknown().optional()),
    xperiencePassword: core.serialization.property("xperience_password", core.serialization.unknown().optional()),
    doNotEmail: core.serialization.property("do_not_email", core.serialization.number().optional()),
    stripeCustomerId: core.serialization.property("stripe_customer_id", core.serialization.unknown().optional()),
    nonBinaryBodyTemplate: core.serialization.property(
        "non_binary_body_template",
        core.serialization.number().optional()
    ),
    shopifyCustomerId: core.serialization.property("shopify_customer_id", core.serialization.number().optional()),
    repeatMdPatientId: core.serialization.property("repeat_md_patient_id", core.serialization.unknown().optional()),
    xperienceStatus: core.serialization.property("xperience_status", core.serialization.number().optional()),
    aspireStatus: core.serialization.property("aspire_status", core.serialization.number().optional()),
    evolusStatus: core.serialization.property("evolus_status", core.serialization.number().optional()),
    repeatmdStatus: core.serialization.property("repeatmd_status", core.serialization.number().optional()),
    alleStatus: core.serialization.property("alle_status", core.serialization.number().optional()),
    fullName: core.serialization.property("full_name", core.serialization.string()),
});

export declare namespace AestheticRecordsClient {
    interface Raw {
        id: number;
        user_id: number;
        firstname: string;
        lastname: string;
        nick_name?: string | null;
        email?: string | null;
        email_2?: string | null;
        email_3?: string | null;
        email_4?: string | null;
        referral_person?: string | null;
        referral_source?: unknown | null;
        referral_source_subcategory?: unknown | null;
        phoneNumber?: string | null;
        phoneNumber_2?: string | null;
        phoneNumber_3?: string | null;
        phoneNumber_4?: string | null;
        gender?: string | null;
        date_of_birth?: string | null;
        address_line_1?: string | null;
        address_line_2?: string | null;
        user_image?: string | null;
        allergies?: unknown | null;
        current_medication?: unknown | null;
        pincode?: string | null;
        city?: string | null;
        state?: string | null;
        country?: string | null;
        treatment_summary?: unknown | null;
        created?: string | null;
        modified?: string | null;
        status?: number | null;
        deleted_at?: unknown | null;
        brilliant_acc_number?: unknown | null;
        brilliant_password?: unknown | null;
        aspire_acc_email?: unknown | null;
        aspire_password?: unknown | null;
        access_portal?: number | null;
        total_sale_relationship?: number | null;
        satisfaction_score?: unknown | null;
        average_service_days?: number | null;
        is_fired?: number | null;
        do_not_call?: number | null;
        is_monthly_membership?: number | null;
        ssn_number?: unknown | null;
        total_surveys?: number | null;
        do_not_sms?: number | null;
        referral_other?: unknown | null;
        member_type?: unknown | null;
        emergency_contact_name?: unknown | null;
        emergency_contact_number?: unknown | null;
        membership_cancelled_reason?: string | null;
        unique_id?: unknown | null;
        clinic_id?: number | null;
        middlename?: unknown | null;
        medical_history_consent?: number | null;
        cherry_patient_id?: string | null;
        cherry_creation_processing?: boolean | null;
        cherry_refreshing_processing?: boolean | null;
        aspire_enrolled_email?: string | null;
        ghl_contact_id?: unknown | null;
        xperience_username?: unknown | null;
        xperience_password?: unknown | null;
        do_not_email?: number | null;
        stripe_customer_id?: unknown | null;
        non_binary_body_template?: number | null;
        shopify_customer_id?: number | null;
        repeat_md_patient_id?: unknown | null;
        xperience_status?: number | null;
        aspire_status?: number | null;
        evolus_status?: number | null;
        repeatmd_status?: number | null;
        alle_status?: number | null;
        full_name: string;
    }
}
