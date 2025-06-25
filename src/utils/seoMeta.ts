// SEO Meta Tags Utility
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

const baseConfig = {
  author: "Kanban Board App",
  siteName: "Kanban Board",
  baseUrl: "https://vanilla-js-kanban-board.netlify.app",
  image: "https://vanilla-js-kanban-board.netlify.app/assets/favicon.svg",
  themeColor: "#3B82F6",
};

// Main page SEO configuration
export const mainPageSEO: SEOConfig = {
  title:
    "Free Kanban Board - Visual Task Management Tool | Drag & Drop Project Board",
  description:
    "Free online Kanban board for visual task management. Organize projects with drag & drop functionality, track progress across To Do, In Progress, Review, and Done columns. Built with TypeScript and modern web technologies.",
  keywords:
    "kanban board, task management, project management, agile, scrum, visual workflow, drag and drop, productivity tool, project tracker, team collaboration, typescript kanban, free kanban board",
  url: baseConfig.baseUrl + "/",
  ogTitle: "Free Kanban Board - Visual Task Management Tool",
  ogDescription:
    "Organize your projects visually with our free Kanban board. Drag & drop tasks, track progress, and boost productivity with this modern task management tool.",
  twitterTitle: "Free Kanban Board - Visual Task Management Tool",
  twitterDescription:
    "Organize your projects visually with our free Kanban board. Drag & drop tasks, track progress, and boost productivity.",
};

// Project details page SEO configuration
export const projectDetailsSEO: SEOConfig = {
  title: "Kanban Board Project Details - TypeScript Task Management System",
  description:
    "Detailed overview of our TypeScript Kanban board project. Learn about features, technical specifications, and architecture of this modern task management system with drag & drop functionality.",
  keywords:
    "kanban board project, typescript kanban, task management system, project details, agile board, scrum tool, drag drop kanban, web development project, javascript kanban",
  url: baseConfig.baseUrl + "/project-details.html",
  ogTitle: "Kanban Board Project Details - TypeScript Task Management",
  ogDescription:
    "Explore the technical details and features of our modern Kanban board built with TypeScript. Complete project overview and specifications.",
  twitterTitle: "Kanban Board Project Details",
  twitterDescription:
    "Technical overview of our TypeScript Kanban board project with modern features and architecture.",
};

// Generate meta tags HTML string
export function generateSEOMetaTags(config: SEOConfig): string {
  return `
    <!-- SEO Meta Tags -->
    <meta name="description" content="${config.description}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="author" content="${baseConfig.author}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${config.ogTitle}" />
    <meta property="og:description" content="${config.ogDescription}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:image" content="${baseConfig.image}" />
    <meta property="og:site_name" content="${baseConfig.siteName}" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${config.twitterTitle}" />
    <meta name="twitter:description" content="${config.twitterDescription}" />
    <meta name="twitter:image" content="${baseConfig.image}" />
    
    <!-- Additional SEO -->
    <link rel="canonical" href="${config.url}" />
    <meta name="theme-color" content="${baseConfig.themeColor}" />
  `.trim();
}

// Generate favicon link
export function generateFaviconLink(): string {
  return `<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />`;
}

// For use in JavaScript/TypeScript files
export function injectSEOMetaTags(config: SEOConfig): void {
  const head = document.head;
  const metaTagsHTML = generateSEOMetaTags(config);

  // Create a temporary div to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = metaTagsHTML;

  // Append each element to head
  Array.from(tempDiv.children).forEach((child) => {
    head.appendChild(child);
  });

  // Add favicon
  const faviconHTML = generateFaviconLink();
  tempDiv.innerHTML = faviconHTML;
  head.appendChild(tempDiv.firstElementChild!);
}
