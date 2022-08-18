#!/bin/sh

find . -name "yarn-error.log" -print -type d -depth -exec rm -rf {} \;
echo -e "\033[32m" ----- clean yarn-error.log end ----- "\033[m" 