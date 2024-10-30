import type { ComponentsObject } from "./components";
import type { InfoObject } from "./info";
import type { PathsObject } from "./paths";
import type { SecurityRequirementObject } from "./security-requirement";
import type { ServerObject } from "./server";
import type { TagObject } from "./tag";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

/**
 * This is the root object of the OpenAPI document.
 */
export type OpenApiDocument = {
  /**
   * This string MUST be the version number of the OpenAPI Specification that the OpenAPI document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI document. This is not related to the API info.version string.
   */
  openapi: "3.1.0",
  /**
   * Provides metadata about the API. The metadata MAY be used by tooling as required.
   */
  info: InfoObject,
  /**
   * The default value for the $schema keyword within Schema Objects contained within this OAS document. This MUST be in the form of a URI.
   */
  jsonSchemaDialect?: string,
  /**
   * An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.
   */
  servers?: ServerObject[],
  /**
   * The available paths and operations for the API.
   */
  paths?: PathsObject,
  /**
   * The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement. Closely related to the callbacks feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses. An example is available.
   */
  webhooks?: unknown,
  /**
   * An element to hold various schemas for the document.
   */
  components?: ComponentsObject,
  /**
   * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array.
   */
  security?: SecurityRequirementObject[],
  /**
   * A list of tags used by the document with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
   */
  tags?: TagObject[],
  /**
   * Additional external documentation.
   */
  externalDocs?: unknown,
} & AtLeastOne<{
  paths: PathsObject,
  webhooks: unknown,
  components: ComponentsObject,
}>;
