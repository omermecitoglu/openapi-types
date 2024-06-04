import type { LinkObject } from "./link";
import type { MediaTypeObject } from "./media-type";
import type { ParameterObject } from "./parameter";
import type { ReferenceObject } from "./reference";

type HeaderObject = Omit<ParameterObject, "name" | "in">;

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response.
 */
export type ResponseObject = {
  /**
   * A description of the response. CommonMark syntax MAY be used for rich text representation.
   */
  description: string,
  /**
   * Maps a header name to its definition. RFC7230 states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>,
  /**
   * A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content?: Record<string, MediaTypeObject>,
  /**
   * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
   */
  links?: Record<string, LinkObject | ReferenceObject>,
};

/**
 * Any HTTP status code can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code. This field MUST be enclosed in quotation marks (for example, "200") for compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase wildcard character X. For example, 2XX represents all response codes between [200-299]. Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code.
 */
export type ResponsesObject = {
  /**
   * The documentation of responses other than the ones declared for specific HTTP response codes. Use this field to cover undeclared responses.
   */
  default?: ResponseObject | ReferenceObject,
} & Record<string, ResponseObject | ReferenceObject>;
