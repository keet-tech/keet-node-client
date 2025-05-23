/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         xAccountToken: "X-Account-Token",
 *         firstName: "firstName",
 *         lastName: "lastName"
 *     }
 */
export interface SearchCustomersRequest {
    firstName: string;
    lastName: string;
    /**
     * The account token that is associated with the end user linked to this account
     */
    xAccountToken: string;
}
