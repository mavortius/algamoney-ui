export const environment = {
  production: true,
  apiUrl: 'https://awmoney-api.herokuapp.com',
  tokenWhitelistedDomains: [ /awmoney-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
