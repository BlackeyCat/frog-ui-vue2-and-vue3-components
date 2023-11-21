#!/bin/sh
set -e
set -x
echo building project components-docs

cd `dirname $0`
echo download npm modules
cd ../
yarn
echo dowload docs npm modules
cd ./docs
yarn
echo start compiling
yarn build
echo finish building ⭐️