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
export declare const mainPageSEO: SEOConfig;
export declare const projectDetailsSEO: SEOConfig;
export declare function generateSEOMetaTags(config: SEOConfig): string;
export declare function generateFaviconLink(): string;
export declare function injectSEOMetaTags(config: SEOConfig): void;
//# sourceMappingURL=seoMeta.d.ts.map