const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  // Layout containers
  {
    pattern: /max-w-\[1280px\]\s+mx-auto\s+px-[a-z0-9-:]+(?:\s+sm:px-[a-z0-9-:]+)?(?:\s+md:px-[a-z0-9-:]+)?(?:\s+lg:px-[a-z0-9-:]+)?(?:\s+xl:px-[a-z0-9-:]+)?/g,
    replacement: 'layout-container'
  },
  {
    pattern: /max-w-7xl\s+mx-auto\s+px-4\s+sm:px-6\s+lg:px-8/g,
    replacement: 'layout-container'
  },
  
  // Headings
  {
    pattern: /text-\[30px\]\s+md:text-\[36px\]\s+lg:text-\[40px\]/g,
    replacement: 'text-h2'
  },
  {
    pattern: /text-3xl\s+md:text-4xl\s+font-serif/g,
    replacement: 'text-h2 font-serif'
  }
];

let changedFiles = 0;

walkDir(componentsDir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.pattern, r.replacement);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', path.basename(filePath));
      changedFiles++;
    }
  }
});

console.log(`Refactoring complete. ${changedFiles} files updated.`);
