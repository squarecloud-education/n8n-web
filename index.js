console.log('🎓 Square Cloud Education - N8N Automation Platform');
console.log('═══════════════════════════════════════════════════\n');

import { execSync } from 'node:child_process';

try {
    console.log('📋 n8n version:');
    execSync('npx n8n --version', { stdio: 'inherit' });
    
    console.log('\n🚀 Starting N8N...');
    execSync('npm run start', { stdio: 'inherit' });
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
