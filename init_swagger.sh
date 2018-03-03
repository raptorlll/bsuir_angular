#!/usr/bin/env bash

rm -rf ${PWD}/src/app/shared/api/generated

echo "${PWD}/src/app/shared/api"

docker pull swaggerapi/swagger-codegen-cli
docker run --rm -v \
    ${PWD}/src/app/shared/api:/local swaggerapi/swagger-codegen-cli \
    generate \
    -i /local/swagger.json \
    -l typescript-angular \
    -o /local/generated
