type OAuthFlowObject = {
  /**
   * The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  authorizationUrl: string,
  /**
   * The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  tokenUrl: string,
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refreshUrl?: string,
  /**
   * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.
   */
  scopes: Record<string, string>,
};

/**
 * Allows configuration of the supported OAuth Flows.
 */
export type OAuthFlowsObject = {
  /**
   * Configuration for the OAuth Implicit flow
   */
  implicit?: OAuthFlowObject,
  /**
   * Configuration for the OAuth Resource Owner Password flow
   */
  password?: OAuthFlowObject,
  /**
   * Configuration for the OAuth Client Credentials flow. Previously called application in OpenAPI 2.0.
   */
  clientCredentials?: OAuthFlowObject,
  /**
   * Configuration for the OAuth Authorization Code flow. Previously called accessCode in OpenAPI 2.0.
   */
  authorizationCode?: OAuthFlowObject,
};
