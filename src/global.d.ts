// global.d.ts (or at the top of your component file)

declare global {
    interface Window {
      SubstackFeedWidget: {
        substackUrl: string;
        posts: number;
        filter:string,
        layout: string,
        colors?: {
          primary: string;
          secondary: string;
          background: string;
        };
      };
    }
  }
  
  export {};
  