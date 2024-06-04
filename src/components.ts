import type { ExampleObject } from "./example";
import type { LinkObject } from "./link";
import type { ParameterObject } from "./parameter";
import type { PathItemObject } from "./paths";
import type { ReferenceObject } from "./reference";
import type { RequestBodyObject } from "./request-body";
import type { ResponseObject } from "./response";
import type { SchemaObject } from "./schema";

type HeaderObject = unknown;
type SecuritySchemeObject = unknown;
type CallbackObject = unknown;

/**
* Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
*/
export type ComponentsObject = {
  /**
   * An object to hold reusable Schema Objects.
   */
  schemas?: Record<string, SchemaObject>,
  /**
   * An object to hold reusable Response Objects.
   */
  responses?: Record<string, ResponseObject | ReferenceObject>,
  /**
   * An object to hold reusable Parameter Objects.
   */
  parameters?: Record<string, ParameterObject | ReferenceObject>,
  /**
   * An object to hold reusable Example Objects.
   */
  examples?: Record<string, ExampleObject | ReferenceObject>,
  /**
   * An object to hold reusable Request Body Objects.
   */
  requestBodies?: Record<string, RequestBodyObject | ReferenceObject>,
  /**
   * An object to hold reusable Header Objects.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>,
  /**
   * An object to hold reusable Security Scheme Objects.
   */
  securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>,
  /**
   * An object to hold reusable Link Objects.
   */
  links?: Record<string, LinkObject | ReferenceObject>,
  /**
   * An object to hold reusable Callback Objects.
   */
  callbacks?: Record<string, CallbackObject | ReferenceObject>,
  /**
   * An object to hold reusable Path Item Object.
   */
  pathItems?: Record<string, PathItemObject | ReferenceObject>,
};
