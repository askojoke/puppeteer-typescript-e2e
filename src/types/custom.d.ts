export {};

declare global {
    namespace NodeJS {
      interface Global {
            URL: string;
            HEADLESS: boolean;
            SLOWMO: number;
      }
    }
  }