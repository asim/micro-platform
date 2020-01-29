#!/bin/sh

set -x
set -e

APP=$1

echo "Running app $APP"

# go to source
cd $APP && ./$APP
