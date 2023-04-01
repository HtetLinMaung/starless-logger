import chalk, { Chalk } from "chalk";

export function log(
  message: string | object | any[],
  level: "info" | "warn" | "error" = "info"
) {
  const now = new Date();
  const timestamp = now.toISOString();
  let levelTag = "";
  let color: Chalk;

  switch (level) {
    case "info":
      levelTag = "INFO";
      color = chalk.hex("#8A2BE2").bold;
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
      color = chalk.hex("#8A2BE2").bold;
      break;
  }

  const logMessage = `[${timestamp}] [${levelTag}]`;

  if (typeof message === "object") {
    console.log(color(logMessage));
    console.dir(message, { colors: true });
  } else {
    console.log(color(`${logMessage} ${message}`));
  }
}
