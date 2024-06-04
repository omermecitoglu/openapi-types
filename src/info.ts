/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 */
export type InfoObject = {
  /**
   * The title of the API.
   */
  title: string,
  /**
   * A short summary of the API.
   */
  summary?: string,
  /**
   * A description of the API. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string,
  /**
   * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
   */
  termsOfService?: string,
  /**
   * The contact information for the exposed API.
   */
  contact?: unknown,
  /**
   * The license information for the exposed API.
   */
  license?: unknown,
  /**
   * The version of the OpenAPI document (which is distinct from the OpenAPI Specification version or the API implementation version).
   */
  version: string,
};
