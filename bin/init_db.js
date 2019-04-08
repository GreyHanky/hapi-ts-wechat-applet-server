const { exec } = require('child_process');
// 初始化数据库配置
exec('node_modules/.bin/sequelize init', (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
