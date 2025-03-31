/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AestheticRecordsAppointmentCancellationTransaction {
    id: number;
    appointmentId: number;
    status?: string;
    authorizeTransactionId?: string;
    chargeTransactionId?: string;
    cancellationFee: number;
    refundTransactionId?: string;
    created: string;
    modified: string;
    refundDate?: string;
    stripeUserId?: string;
    chargeDays: number;
}
