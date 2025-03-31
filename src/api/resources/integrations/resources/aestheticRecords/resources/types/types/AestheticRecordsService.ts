/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AestheticRecordsService {
    id: number;
    userId: number;
    name: string;
    categoryId: number;
    isDeviceDependent?: number;
    isAvailableOnline?: number;
    isServiceFree?: number;
    isGfeRequired?: number;
    freeConsultation?: number;
    duration: number;
    customDuration: number;
    description: string;
    status: number;
    dateCreated: string;
    dateModified: string;
    orderBy: number;
    surveyId: number;
    addedBy: number;
    modifiedBy: number;
    deletedBy: number;
    deletedOn: string;
    isPrePaymentAccepted: number;
    deposit: number;
    price: string;
    serviceType: string;
    serviceChargeType: string;
    questionnaireType: string;
    mins: number;
    hours: number;
}
