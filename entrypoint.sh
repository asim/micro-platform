#!/bin/dumb-init /bin/sh

set -x
set -e

APP=$1

echo "Running $APP"
./platform $APP &
