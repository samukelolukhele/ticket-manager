export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_OAUTH_KEY: string;
      GOOGLE_OAUTH_CLIENT: string;
      GOOGLE_OAUTH_CLIENT_KEY: string;
      GITHUB_OAUTH_CLIENT: string;
      GITHUB_OAUTH_CLIENT_KEY: string;
      KINDE_CLIENT_ID: string;
      KINDE_CLIENT_SECRET: string;
      KINDE_ISSUER_URL: string;
      KINDE_SITE_URL: string;
      KINDE_POST_LOGOUT_REDIRECT_URL: string;
      KINDE_POST_LOGIN_REDIRECT_URL: string;
      PLANETSCALE_USERNAME: string;
      PLANETSCALE_PASSWORD: string;
      PLANETSCALE_DATABASE_URL: string;
    }
  }
}
