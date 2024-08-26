export * as Keet from "./api";
export { KeetError, KeetTimeoutError } from "./errors";
import { AmazonBusiness } from "api/resources/integrations/resources/amazonBusiness/client/Client";
import { Venmo } from "api/resources/integrations/resources/venmo/client/Client";
import { KeetClient as InternalKeetClient } from "./Client";


export class KeetClient extends InternalKeetClient {
    // Override the `_integrations` property with `never` to make it inaccessible
    protected _integrations = {} as never;

    // Override the `integrations` getter with `never` to prevent its use
    public get integrations(): never {
        throw new Error("Property 'integrations' is not available in ExtendedKeetClient.");
    }

    protected _amazonBusiness: AmazonBusiness | undefined;

    public get amazonBusiness(): AmazonBusiness {
        return (this._amazonBusiness ??= new AmazonBusiness(this._options));
    }

    protected _venmo: Venmo | undefined;

    public get venmo(): Venmo {
        return (this._venmo ??= new Venmo(this._options));
    }    
}