#!/bin/bash
#set -x

DIR="$(dirname "$0")"
DATA_FILE="$DIR/data.js"


echo "const repoLogs = [];" > "${DATA_FILE}"
repo forall -j1 -v -c '
#set -x
echo $REPO_PATH
echo "repoLogs.push({ path: \"$REPO_PATH\", logs: [" >> '"${DATA_FILE}"'
git --no-pager log --since=2024-04-01 --pretty=format:"%h|%cs|%ae|%s" |
while IFS="|" read -r hash date author message; do
  message=$(printf "%s\n" "$message" | sed "s/\"/＂/g")
  printf "%s\n" "  { hash: \"$hash\", date: \"$date\", author: \"$author\", message: \"$message\" }," >> '"${DATA_FILE}"'
done
echo "]});" >> '"${DATA_FILE}"'
'