module.exports = {
  apps: [
    {
      name: 'player-server', // 项目名称
      script: './server.js', // 启动脚本
      args: 'start',
      watch: false, // 是否开启监听
      exec_mode: 'cluster', // 分為 cluster 以及 fork 模式
      instances: '2',
      max_memory_restart: '400M', // 當佔用的 memory 達到 400M, 就自動重啟
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
      env_prod: { // 环境变量配置
        "NODE_ENV": "prod",
      },
      env_dev: {
        "NODE_ENV": "dev",
      },
      env_prep: {
        "NODE_ENV": "prep",
      }
    }
  ],
};
