#!/bin/bash


# 撤销迁移文件


# 参数
# -a 撤销全部

# [迁移文件名] 撤销的数据表名


## green to echo
function green(){
    echo  "\033[32m[ $1 ]\033[0m"
}

# 编译迁移文件
function compilingMigration(){
    green " -> Compiling migration scripts."
    echo ""
    for filename in ./src/db/migrations/*.ts; do
        yarn tsc -t es6 -module CommonJS -outDir ./migrateBuilds/migrations $filename
    done
    echo ""
    green " -> Compilation completed."
    echo ""
}

all="-a"

if [ $1 = $all ]
then
    compilingMigration
    # 撤销所有迁移
    echo ""
    green " -> migrations undo:all"
    echo ""

    sequelize db:migrate:undo:all

    echo ""
    green "-> migrations undo all completed"
    echo ""

elif [ -n $1 ]
then
    compilingMigration
    # 撤销一个迁移
    echo ""
    green "-> migrations undo table: $1"
    echo ""

    sequelize db:migration:undo --to $1

    echo ""
    green "-> migrations undo table $1 completed"
    echo ""

else
    echo ""
    green "未输入table_name"
    echo ""
fi

rm -rf migrateBuilds/