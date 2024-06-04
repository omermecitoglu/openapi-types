/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 */
export type TagObject = {
  /**
   * The name of the tag.
   */
  name: string,
  /**
   * A description for the tag. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string,
  /**
   * Additional external documentation for this tag.
   */
  externalDocs?: unknown,
};
