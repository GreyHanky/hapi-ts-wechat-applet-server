#!/bin/bash
## green to echo
function green(){
    echo  "\033[32m[ $1 ]\033[0m"
}

if [ -z "$1" ]; then
 ENVIRONMENT='development'
else
 ENVIRONMENT="$1"
fi

echo ""
green "Migrating for environment: $ENVIRONMENT"
echo ""
# 编译迁移文件
green " -> Step 1/2: Compiling migration scripts."
echo ""
for filename in ./src/db/migrations/*.ts; do
 yarn tsc -t es6 -module CommonJS -outDir ./build/db/migrations $filename
done
echo ""
green " -> Compilation completed."
echo ""

# 执行迁移
echo ""
green " -> Step 2/2: Starting migration."
echo ""
sequelize db:migrate -env $ENVIRONMENT
echo ""
green " -> Migration completed."
echo ""
