module.exports = {
  apps: [
    {
      name: "file-service",
      script: "java",
      args: "-jar ./file-service/target/file-service-1.0.0.jar",
      log_file: "./logs/file-service.log",
      instances: 2,
    },
    {
      name: "user-service",
      script: "java",
      args: "-jar ./user-service/target/user-service-1.0.0.jar",
      log_file: "./logs/user-service.log",
      instances: 2,
    }
  ]
}