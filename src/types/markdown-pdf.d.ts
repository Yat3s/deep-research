declare module 'markdown-pdf' {
    interface MarkdownPdfOptions {
        cssPath?: string;
        paperFormat?: string;
        paperOrientation?: string;
        paperBorder?: string;
        runningsPath?: string;
        renderDelay?: number;
        [key: string]: any;
    }

    interface MarkdownPdfChain {
        from: {
            string: (markdown: string) => MarkdownPdfChain;
            path: (path: string) => MarkdownPdfChain;
        };
        to: (path: string, callback: (err: Error | null) => void) => void;
    }

    function markdownpdf(options?: MarkdownPdfOptions): MarkdownPdfChain;

    export default markdownpdf;
} 