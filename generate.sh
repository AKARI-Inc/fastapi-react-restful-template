#!/bin/bash

GENERATOR=typescript-axios # or typescript-fetch
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i http://back:8000/openapi.json -g ${GENERATOR} -o /local/front/src/generated --skip-validate-spec
