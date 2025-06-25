import { generateSEOMetaTags, generateFaviconLink, mainPageSEO, projectDetailsSEO, } from "../utils/seoMeta.js";
// Generate complete head section for HTML pages
export function generateHeadSection(seoConfig) {
    return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${seoConfig.title}</title>
    
    ${generateSEOMetaTags(seoConfig)}
    
    <!-- Favicon -->
    ${generateFaviconLink()}
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    
    <!-- Custom CSS -->
    <link href="assets/css/style.css" rel="stylesheet" />
  `.trim();
}
// Generate head section specifically for the main page
export function generateMainPageHead() {
    return generateHeadSection(mainPageSEO);
}
// Generate head section specifically for the project details page
export function generateProjectDetailsHead() {
    return generateHeadSection(projectDetailsSEO);
}
//# sourceMappingURL=seoTemplate.js.map