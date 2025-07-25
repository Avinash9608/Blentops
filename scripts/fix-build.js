const fs = require('fs');
const path = require('path');

// Function to create the client reference manifest file if it doesn't exist
function createClientReferenceManifest() {
  const buildDir = path.join(process.cwd(), '.next', 'server', 'app');
  
  // Check if the build directory exists
  if (!fs.existsSync(buildDir)) {
    console.log('Build directory not found. Skipping manifest creation.');
    return;
  }

  // Define the content for the client reference manifest file
  const manifestContent = 'self.__RSC_MANIFEST={"ssrModuleMapping":{},"edgeSSRModuleMapping":{},"clientModules":{},"entryCSSFiles":{}};';

  // Specifically check for the (dashboard) directory issue
  const dashboardDir = path.join(buildDir, '(dashboard)');
  if (!fs.existsSync(dashboardDir)) {
    // Create the (dashboard) directory if it doesn't exist
    fs.mkdirSync(dashboardDir, { recursive: true });
    console.log(`Created missing (dashboard) directory: ${dashboardDir}`);
    
    // Create the client reference manifest file
    const manifestPath = path.join(dashboardDir, 'page_client-reference-manifest.js');
    fs.writeFileSync(manifestPath, manifestContent);
    console.log(`Created missing manifest file: ${manifestPath}`);
  }

  // Function to recursively process directories
  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Process subdirectories
        processDirectory(fullPath);
      } else if (entry.name === 'page.js' && !fs.existsSync(path.join(dir, 'page_client-reference-manifest.js'))) {
        // If we find a page.js file but no corresponding client reference manifest, create one
        const manifestPath = path.join(dir, 'page_client-reference-manifest.js');
        console.log(`Creating missing manifest file: ${manifestPath}`);
        fs.writeFileSync(manifestPath, manifestContent);
      }
    }
  }

  // Start processing from the build directory
  processDirectory(buildDir);
  console.log('Client reference manifest check completed.');
}

// Run the function
createClientReferenceManifest();