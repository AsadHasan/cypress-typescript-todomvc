#!/bin/bash
docker run -e CYPRESS_RECORD_KEY -it -v $PWD:/e2e -w /e2e cypress/included:7.1.0 --record
