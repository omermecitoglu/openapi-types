# OpenAPI 3.1 Types

[![npm version](https://badge.fury.io/js/%40omer-x%2Fopenapi-types.svg)](https://badge.fury.io/js/%40omer-x%2Fopenapi-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript types for the OpenAPI Specification.

## Installation

You can install this package via npm:

```bash
npm install -D @omer-x/openapi-types
```

or via yarn:

```bash
yarn add -D @omer-x/openapi-types
```

## Usage

Import the types you need in your TypeScript project:

```typescript
import { OpenAPIObject, InfoObject, PathsObject } from '@omer-x/openapi-types';

// Example usage
const openApiSpec: OpenAPIObject = {
  openapi: "3.1.0",
  info: {
    title: "Sample API",
    version: "1.0.0"
  },
  paths: {}
};
```

You can also import specific types directly:

```typescript
import type { ComponentsObject } from "@omer-x/openapi-types/components";
import type { ExampleObject } from "@omer-x/openapi-types/example";
import type { InfoObject } from "@omer-x/openapi-types/info";
import type { LinkObject } from "@omer-x/openapi-types/link";
import type { MediaTypeObject } from "@omer-x/openapi-types/media-type";
import type { OperationObject } from "@omer-x/openapi-types/operation";
import type { ParameterObject } from "@omer-x/openapi-types/parameter";
import type { PathItemObject, PathsObject } from "@omer-x/openapi-types/paths";
import type { ReferenceObject } from "@omer-x/openapi-types/reference";
import type { RequestBodyObject } from "@omer-x/openapi-types/request-body";
import type { ResponseObject, ResponsesObject } from "@omer-x/openapi-types/response";
import type { SchemaObject } from "@omer-x/openapi-types/schema";
import type { TagObject } from "@omer-x/openapi-types/tag";
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
