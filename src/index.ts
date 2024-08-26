export * as Keet from "./api";
export { KeetError, KeetTimeoutError } from "./errors";
import { Amazon } from "api/resources/integrations/resources/amazon/client/Client";
import { AmazonBusiness } from "api/resources/integrations/resources/amazonBusiness/client/Client";
import { DoorDash } from "api/resources/integrations/resources/doorDash/client/Client";
import { Instagram } from "api/resources/integrations/resources/instagram/client/Client";
import { Linkedin } from "api/resources/integrations/resources/linkedin/client/Client";
import { Uber } from "api/resources/integrations/resources/uber/client/Client";
import { Venmo } from "api/resources/integrations/resources/venmo/client/Client";
import { X } from "api/resources/integrations/resources/x/client/Client";
import { KeetClient as InternalKeetClient } from "./Client";


export class KeetClient extends InternalKeetClient {
    // Override the `_integrations` property with `never` to make it inaccessible
    protected _integrations = {} as never;

    // Override the `integrations` getter with `never` to prevent its use
    public get integrations(): never {
        throw new Error("Property 'integrations' is not available in ExtendedKeetClient.");
    }

    protected _amazon: Amazon | undefined;

    public get amazon(): Amazon {
        return (this._amazon ??= new Amazon(this._options));
    }

    protected _amazonBusiness: AmazonBusiness | undefined;

    public get amazonBusiness(): AmazonBusiness {
        return (this._amazonBusiness ??= new AmazonBusiness(this._options));
    }

    protected _doorDash: DoorDash | undefined;

    public get doorDash(): DoorDash {
        return (this._doorDash ??= new DoorDash(this._options));
    }

    protected _instagram: Instagram | undefined;

    public get instagram(): Instagram {
        return (this._instagram ??= new Instagram(this._options));
    }

    protected _linkedin: Linkedin | undefined;

    public get linkedin(): Linkedin {
        return (this._linkedin ??= new Linkedin(this._options));
    }

    protected _uber: Uber | undefined;

    public get uber(): Uber {
        return (this._uber ??= new Uber(this._options));
    }

    protected _venmo: Venmo | undefined;

    public get venmo(): Venmo {
        return (this._venmo ??= new Venmo(this._options));
    }

    protected _x: X | undefined;

    public get x(): X {
        return (this._x ??= new X(this._options));
    } 
}