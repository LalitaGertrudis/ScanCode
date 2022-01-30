#!/bin/bash
rm -rf node_modules
rm yarn.lock
rm -rf ./ios/Pods/
rm ./ios/Podfile.lock
yarn install
npx pod-install
(cd ./ios && xcodebuild clean)
(cd ./android && ./gradlew clean)