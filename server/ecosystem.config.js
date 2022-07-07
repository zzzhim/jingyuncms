module.exports = {
  apps: [
    {
      name: 'jingyun-cms-server', // 项目名称
      script: './index.js', // 启动脚本
      args: 'start',
      watch: false, // 是否开启监听
      exec_mode: 'cluster', // 分為 cluster 以及 fork 模式
      instances: '4',
      max_memory_restart: '800M', // 當佔用的 memory 達到 400M, 就自動重啟
      // pm2 會根據此選項內的時間來判定程序是否有成功啟動
      // 格式可使用 number 或 string, number 的話， 3000 代表 3000 ms。 string 的話, 可使用 '1h' 代表一個小時, '5m' 代表五分鐘, '10s' 代表十秒
      min_uptime: '15s',
      listen_timeout: 15000, // 單位為 ms, 如果在該時間內 app 沒有聽 port 的話，強制重啟
      ignore_watch: [ // 不用监听的文件
        "node_modules",
        "logs"
      ],
      autorestart: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/app-err.log", // 错误日志文件
      out_file: "./logs/app-out.log",
      env_dev: {
        "NODE_ENV": "dev",
      },
      env_prep: {
        "NODE_ENV": "prep",
      },
      env_prod: { // 环境变量配置
        "NODE_ENV": "prod",
      },
    }
  ],
  deploy: { // 部署脚本
    dev: { // 测试环境
      user: 'wangyafei', // 服务器的用户名
      host: "192.168.110.4", // 服务器的ip地址
      port: 22, // ssh端口
      // ssh_options: 'StrictHostKeyChecking=no', // SSH 公钥检查
      ref: 'origin/master', // 要拉取的git分支
      repo: 'http://192.168.110.52:9090/novel/web-fiction.git', // 远程仓库地址
      path: '/home/server/web-fiction/', // 拉取到服务器某个目录下
      "pre-deploy": "git fetch --all", // 部署前执行
      "post-deploy": "npm install &&  pm2 reload ecosystem.config.js --env dev", // 部署后执行
      env: {
        NODE_ENV: "dev",
      }
    }
  }
};
