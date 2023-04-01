import chalk, { Chalk } from "chalk";

export function log(
  message: string,
  level: "info" | "warn" | "error" = "info"
) {
  const now = new Date();
  const timestamp = now.toISOString();
  let levelTag = "";
  let color: Chalk;

  switch (level) {
    case "info":
      levelTag = "INFO";
      color = chalk.greenBright;
      break;
    case "warn":
      levelTag = "WARN";
      color = chalk.yellowBright;
      break;
    case "error":
      levelTag = "ERROR";
      color = chalk.redBright;
      break;
    default:
      levelTag = "INFO";
      color = chalk.greenBright;
      break;
  }

  const logMessage = `[${timestamp}] [${levelTag}] ${message}`;

  console.log(color(logMessage));
}
