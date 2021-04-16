export {};

declare global {
    namespace NodeJS {
      interface Global {
            URL: string;
      }
    }
  }