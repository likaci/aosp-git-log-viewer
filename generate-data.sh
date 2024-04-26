#!/bin/bash
#set -x

DIR="$(dirname "$0")"
DATA_FILE="$DIR/data.js"


echo "const repoLogs = [];" > "${DATA_FILE}"

repo forall -j1 -v -c '
echo $REPO_PATH
echo "repoLogs.push({ path: \"$REPO_PATH\", logs: [" >> '"${DATA_FILE}"'
git --no-pager log --since=2024-01-01 --pretty=format:"%h|%cs|%ae|%s" |
while IFS="|" read -r hash date author message; do
  message=$(echo "$message" | sed "s/\"/\\\\\"/g" )
  echo "  { hash: \"$hash\", date: \"$date\", author: \"$author\", message: \"$message\" }," >> '"${DATA_FILE}"'
done
echo "]});" >> '"${DATA_FILE}"'
'
