/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @stylistic/indent */

import type { ReferenceObject } from "./reference";

type Schema = {
  /**
   * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other schemas which may satisfy the payload description. See Composition and Inheritance for more details.
   */
  discriminator?: unknown,
  /**
   * This MAY be used only on properties schemas. It has no effect on root schemas. Adds additional metadata to describe the XML representation of this property.
   */
  xml?: unknown,
  /**
   * Additional external documentation for this schema.
   */
  externalDocs?: unknown,
  description?: string,
  readOnly?: boolean,
  writeOnly?: boolean,
  /**
   * @deprecated The nullable keyword has been removed from the Schema Object (null can be used as a type value).
   */
  nullable?: boolean,
  oneOf?: SchemaObject[],
  anyOf?: SchemaObject[],
};

type ObjectSchema = {
  type: "object",
  /**
   * An object is a collection of property/value pairs. The properties keyword is used to define the object properties – you need to list the property names and specify a schema for each property.
   */
  properties?: Record<string, SchemaObject>,
  /**
   * By default, all object properties are optional. You can specify the required properties in the required list
   */
  required?: string[],
  additionalProperties?: Record<string, SchemaObject> | ReferenceObject | false,
  minProperties?: number,
  maxProperties?: number,
};

type StringSchema = {
  type: "string",
  format?: "date" | "date-time" | "password" | "byte" | "binary" | "email" | "uuid" | "uri" | "hostname" | "ipv4" | "ipv6",
  contentMediaType?: string,
  contentEncoding?: "base16" | "base32" | "base64" | "base64url",
  pattern?: string,
  default?: string,
  enum?: string[],
  minLength?: number,
  maxLength?: number,
};

type NumberSchema = {
  type: "number",
  format?: "float" | "double",
  minimum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  exclusiveMaximum?: number,
  default?: number,
  multipleOf?: number,
};

type IntegerSchema = {
  type: "integer",
  format?: "int32" | "int64",
  minimum?: number,
  exclusiveMinimum?: boolean,
  maximum?: number,
  exclusiveMaximum?: boolean,
  default?: number,
  multipleOf?: number,
};

type ArraySchema = {
  type: "array",
  items: SchemaObject | SchemaObject[],
  minItems?: number,
  maxItems?: number,
  uniqueItems?: boolean,
};

type NullSchema = {
  type: "null",
};

type BooleanSchema = {
  type: "boolean",
};

type UnknownSchema = {
  type?: undefined,
};

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 2020-12.
 */
export type SchemaObject = Schema & (
  ObjectSchema |
  StringSchema |
  NumberSchema |
  IntegerSchema |
  ArraySchema |
  NullSchema |
  BooleanSchema
) | (ReferenceObject & UnknownSchema);
