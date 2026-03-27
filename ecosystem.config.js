module.exports = {
  apps: [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy project-dcd7ebfa-287a-4be7-9af:asia-southeast1:postgres-db-fileshre --private-ip",
      log_file: "./logs/cloud-sql-proxy.log"
    },
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