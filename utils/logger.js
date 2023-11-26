// utils/logger.js
import fs from 'fs';
import path from 'path';

function getCurrentDateTime() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toLocaleTimeString([], { hour12: false });
  return `${date} ${time}`;
}

function logToFile(logEntry) {
  const dateTime = getCurrentDateTime();
  const logLine = `[${dateTime}] ${logEntry}`;
  
  const logFilePath = path.join(process.cwd(), 'logs/logfile.txt');
  fs.appendFileSync(logFilePath, `${logLine}\n`);
}

export { logToFile };
