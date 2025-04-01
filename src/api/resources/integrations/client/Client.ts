/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { AestheticRecords } from "../resources/aestheticRecords/client/Client";
import { Vin } from "../resources/vin/client/Client";

export declare namespace Integrations {
    export interface Options {
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Integrations {
    protected _aestheticRecords: AestheticRecords | undefined;
    protected _vin: Vin | undefined;

    constructor(protected readonly _options: Integrations.Options) {}

    public get aestheticRecords(): AestheticRecords {
        return (this._aestheticRecords ??= new AestheticRecords(this._options));
    }

    public get vin(): Vin {
        return (this._vin ??= new Vin(this._options));
    }
}
