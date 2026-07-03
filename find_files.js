import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.next') && !file.includes('dist')) {
        results = results.concat(walkDir(file));
      }
    } else {
      results.push({ path: file, size: stat.size });
    }
  });
  return results;
}

const allFiles = walkDir('.');
console.log('ALL FILES IN WORKSPACE:');
allFiles.forEach(f => {
  console.log(`${f.path} (${f.size} bytes)`);
});
