# Build Scripts

## fix-build.js

This script addresses a specific issue with Next.js builds on Vercel where the client reference manifest file is missing for certain routes, particularly for the `(dashboard)` route.

### What it does

1. Creates the `(dashboard)` directory in the `.next/server/app` folder if it doesn't exist
2. Adds the required `page_client-reference-manifest.js` file with the necessary content
3. Recursively checks all directories in the build output for missing manifest files and creates them as needed

### How it's integrated

The script is automatically run as part of the build process through:

1. The main build command: `next build && node scripts/fix-build.js`
2. A postbuild hook: `postbuild: node scripts/fix-build.js`

This ensures the fix is applied both during local builds and Vercel deployments.

### Why this is needed

Next.js 15.3.3 with app router sometimes has issues with route groups (directories with parentheses like `(dashboard)`) during the build process on Vercel. This script ensures that all necessary files are created to prevent the `ENOENT: no such file or directory` error for client reference manifest files.