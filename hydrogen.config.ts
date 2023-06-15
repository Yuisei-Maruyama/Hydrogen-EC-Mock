import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'JP',
    defaultLanguageCode: 'JA',
    // storeDomain: import.meta.env.VITE_PUBLIC_STORE_DOMAIN,
    // storefrontToken: import.meta.env.VITE_PUBLIC_STOREFRONT_API_TOKEN,
    // storefrontApiVersion: import.meta.env.VITE_PUBLIC_STOREFRONT_API_VERSION,
    storeDomain: 'hydrogen-preview.myshopify.com',
    storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
