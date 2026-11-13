
const audit = require("simple-audit-trail");

async function main() {
  // Create an audit log
  const entry = await audit.log({
    action: "USER_CREATED",
    userId: "user123",
    entity: "USER",
    entityId: "user456",
    metadata: {
      source: "npm-install-test"
    }
  });

  console.log("Created log:", entry);

  // Retrieve all logs
  const logs = await audit.getLogs();
  console.log("All logs:", logs);

  // Find logs by action
  const filtered = await audit.findLogs({
    action: "USER_CREATED"
  });

  console.log("Filtered logs:", filtered);
}

main().catch(console.error);

