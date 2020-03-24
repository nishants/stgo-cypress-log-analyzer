const fs = require('fs');

const buildId = process.env.buildId;
const agenId = process.env.agenId;

const logText = fs.readFileSync(`./logs_${buildId}/CypressTest ${agenId}/19_run cypress.txt`, 'utf-8');
const testReport = logText.match((/\(Run Finished\)\r\n[\s\S]*All specs passed/))[0];

console.log(testReport);

// buildId=50640 agenId=3 node reader.js 