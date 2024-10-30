/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as Keet from "../../../../../index";
import * as environments from "../../../../../../environments";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Facebook {
    interface Options {
        token: core.Supplier<core.BearerToken>;
        /** Override the X-Account-Token header */
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Account-Token header */
        accountToken?: string | undefined;
    }
}

export class Facebook {
    constructor(protected readonly _options: Facebook.Options) {}

    /**
     * Create a Facebook session that you can connect to via playwright. See [this link](/overview/integrations/custom-automations) for more info.
     *
     * @param {Facebook.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Keet.common.UnAuthorizedError}
     * @throws {@link Keet.common.InternalServerError}
     * @throws {@link Keet.common.NotFoundError}
     * @throws {@link Keet.common.BadRequestError}
     * @throws {@link Keet.common.NotImplementedError}
     *
     * @example
     *     await client.integrations.facebook.createSession()
     */
    public async createSession(requestOptions?: Facebook.RequestOptions): Promise<Keet.common.CreateSessionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.KeetEnvironment.Production, "/v1/facebook/session"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@keet-tech/keet-node-client",
                "X-Fern-SDK-Version": "0.0.15",
                "User-Agent": "@keet-tech/keet-node-client/0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.common.CreateSessionResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Keet.common.UnAuthorizedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.InternalServerError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Keet.common.NotFoundError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Keet.common.BadRequestError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.NotImplementedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.KeetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KeetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.KeetTimeoutError();
            case "unknown":
                throw new errors.KeetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Post a message to a group
     *
     * @param {string} groupId
     * @param {Keet.integrations.PostGroupMessage} request
     * @param {Facebook.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Keet.common.UnAuthorizedError}
     * @throws {@link Keet.common.InternalServerError}
     * @throws {@link Keet.common.NotFoundError}
     * @throws {@link Keet.common.BadRequestError}
     * @throws {@link Keet.common.NotImplementedError}
     *
     * @example
     *     await client.integrations.facebook.postGroupMessage("string", {
     *         message: "string"
     *     })
     */
    public async postGroupMessage(
        groupId: string,
        request: Keet.integrations.PostGroupMessage,
        requestOptions?: Facebook.RequestOptions
    ): Promise<Keet.integrations.PostGroupMessageResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.KeetEnvironment.Production,
                `/v1/facebook/groups/${encodeURIComponent(groupId)}/message`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@keet-tech/keet-node-client",
                "X-Fern-SDK-Version": "0.0.15",
                "User-Agent": "@keet-tech/keet-node-client/0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.integrations.PostGroupMessage.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.integrations.PostGroupMessageResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Keet.common.UnAuthorizedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.InternalServerError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Keet.common.NotFoundError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Keet.common.BadRequestError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.NotImplementedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.KeetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KeetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.KeetTimeoutError();
            case "unknown":
                throw new errors.KeetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Join a group
     *
     * @param {string} groupId
     * @param {Facebook.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Keet.common.UnAuthorizedError}
     * @throws {@link Keet.common.InternalServerError}
     * @throws {@link Keet.common.NotFoundError}
     * @throws {@link Keet.common.BadRequestError}
     * @throws {@link Keet.common.NotImplementedError}
     *
     * @example
     *     await client.integrations.facebook.joinGroup("string")
     */
    public async joinGroup(
        groupId: string,
        requestOptions?: Facebook.RequestOptions
    ): Promise<Keet.integrations.JoinGroupResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.KeetEnvironment.Production,
                `/v1/facebook/groups/${encodeURIComponent(groupId)}/join`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@keet-tech/keet-node-client",
                "X-Fern-SDK-Version": "0.0.15",
                "User-Agent": "@keet-tech/keet-node-client/0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.integrations.JoinGroupResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Keet.common.UnAuthorizedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.InternalServerError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Keet.common.NotFoundError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Keet.common.BadRequestError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.NotImplementedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.KeetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KeetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.KeetTimeoutError();
            case "unknown":
                throw new errors.KeetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Search for groups
     *
     * @param {Keet.integrations.SearchGroups} request
     * @param {Facebook.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Keet.common.UnAuthorizedError}
     * @throws {@link Keet.common.InternalServerError}
     * @throws {@link Keet.common.NotFoundError}
     * @throws {@link Keet.common.BadRequestError}
     * @throws {@link Keet.common.NotImplementedError}
     *
     * @example
     *     await client.integrations.facebook.searchGroups({
     *         query: "string"
     *     })
     */
    public async searchGroups(
        request: Keet.integrations.SearchGroups,
        requestOptions?: Facebook.RequestOptions
    ): Promise<Keet.integrations.SearchGroupsResponse> {
        const { query } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["query"] = query;
        const _response = await core.fetcher({
            url: urlJoin(environments.KeetEnvironment.Production, "/v1/facebook/groups"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@keet-tech/keet-node-client",
                "X-Fern-SDK-Version": "0.0.15",
                "User-Agent": "@keet-tech/keet-node-client/0.0.15",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.integrations.SearchGroupsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Keet.common.UnAuthorizedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.InternalServerError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Keet.common.NotFoundError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new Keet.common.BadRequestError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Keet.common.NotImplementedError(
                        serializers.common.BaseError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.KeetError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.KeetError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.KeetTimeoutError();
            case "unknown":
                throw new errors.KeetError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
