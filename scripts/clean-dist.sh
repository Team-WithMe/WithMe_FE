#!/bin/sh

find . -name ".next" -print -type d -depth -exec rm -rf {} \;
echo -e "\033[32m" ----- clean .next end ----- "\033[m" 