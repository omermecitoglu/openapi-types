import type { OAuthFlowsObject } from "./oauth-flows";

type BaseScheme = {
  /**
   * A description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string,
};

type ApiKeyScheme = {
  /**
   * The type of the security scheme.
   */
  type: "apiKey",
  /**
   * The name of the header, query or cookie parameter to be used.
   */
  name: string,
  /**
   * The location of the API key.
   */
  in: "query" | "header" | "cookie",
};

type HttpScheme = {
  /**
   * The type of the security scheme.
   */
  type: "http",
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235. The values used SHOULD be registered in the IANA Authentication Scheme registry.
   */
  scheme: string,
  /**
   * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
   */
  bearerFormat?: string,
};

type OAuth2Scheme = {
  /**
   * The type of the security scheme.
   */
  type: "oauth2",
  /**
   * An object containing configuration information for the flow types supported.
   */
  flows: OAuthFlowsObject,
};

type MutualTLS_Scheme = {
  /**
   * The type of the security scheme.
   */
  type: "mutualTLS",
};

type OpenIdConnectScheme = {
  /**
   * The type of the security scheme.
   */
  type: "openIdConnect",
  /**
   * OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL. The OpenID Connect standard requires the use of TLS.
   */
  openIdConnectUrl: string,
};

/**
 * Defines a security scheme that can be used by the operations.
 */
export type SecuritySchemeObject = BaseScheme & (ApiKeyScheme | HttpScheme | OAuth2Scheme | MutualTLS_Scheme | OpenIdConnectScheme);
