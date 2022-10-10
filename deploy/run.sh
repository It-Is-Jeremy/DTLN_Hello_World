#!/bin/bash


echo "Hello World"
var=$(dhall < ./deploy/tf.dhall)
echo "${var//\'\'/}" > ./deploy/main.tf