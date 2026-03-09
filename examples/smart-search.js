// Example: Smart Search with OpenClaw
// This example shows how to use OpenClaw for research

async function researchTopic(topic) {
  const openclaw = require('@openclaw/cli');
  
  // Ask OpenClaw to research
  const result = await openclaw.ask(`
    Research "${topic}" and provide:
    1. Key findings (bullet points)
    2. Recent developments
    3. Source links
    4. Summary in 3 sentences
  `);
  
  console.log('Research Results:');
  console.log(result);
  
  return result;
}

// Usage
researchTopic('latest AI trends 2024');
