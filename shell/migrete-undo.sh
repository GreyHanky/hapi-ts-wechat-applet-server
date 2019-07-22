#!/bin/bash


# 撤销迁移文件


# 参数
# -a 撤销全部

# [迁移文件名] 撤销的数据表名


npm run ts-node ./node_modules/typeorm/cli.js migration:revert

