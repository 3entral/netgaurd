module.exports = {
  apps: [{
    name: "netguard",
    script: "./server.js",
    env: {
      NODE_ENV: "production",
      PORT: 8080
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    node_args: '--experimental-modules'
  }]
}