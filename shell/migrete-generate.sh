#!/bin/bash

# 创建一个数据库迁移文件

## green to echo
function green(){
    echo  "\033[32m[ $1 ]\033[0m"
}

if [ -n "$1" ]; then
  TABLE_NAME="$1"

  echo ""
  green "Generates a new migration file: $1"
  echo ""

  # 创建迁移文件
  sequelize migration:generate --name TABLE_NAME

  echo ""
  green "Generates completed"
  echo ""
else
  echo ""
  green "未输入table_name"
  echo ""
fi
