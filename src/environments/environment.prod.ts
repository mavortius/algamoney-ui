export const environment = {
  production: true,
  apiUrl: 'https://awmoney-api.herokuapp.com',
  tokenWhitelistedDomains: [new RegExp('awmoney-api.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
