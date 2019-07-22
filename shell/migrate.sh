#!/bin/bash

# 执行数据库迁移


## green to echo
function green(){
    echo  "\033[32m[ $1 ]\033[0m"
}

# if [ -z $1 ]; then
#     ENVIRONMENT='development'
# else
#     ENVIRONMENT="$1"
# fi

# echo ""
# green "Migrating for environment: $ENVIRONMENT"
# echo ""
# # 编译迁移文件
# green " -> Step 1/2: Compiling migration scripts."
# echo ""
# node ./node_modules/.bin/typeorm migration:run
# echo ""
# green " -> Compilation completed."
# echo ""

# 执行迁移
echo ""
green " ->  Starting migration."
echo ""
npm run ts-node ./node_modules/typeorm/cli.js migration:run
echo ""
green " -> Migration completed."
echo ""
