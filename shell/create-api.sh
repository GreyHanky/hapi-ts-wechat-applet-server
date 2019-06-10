#!/bin/bash

# 创建api模版到src/api
# npm run createApi [apiName]

if [ -z $1 ]; then
  echo '未输入创建文件件名称'
  exit
else
    APINAME=$1
fi

cp -R ./shell/template/api  ./src/api/$1