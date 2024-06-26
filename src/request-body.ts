import type { MediaTypeObject } from "./media-type";

/**
 * Describes a single request body.
 */
export type RequestBodyObject = {
  /**
   * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string,
  /**
   * The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content: Record<string, MediaTypeObject>,
  /**
   * Determines if the request body is required in the request. Defaults to false.
   */
  required?: boolean,
};
