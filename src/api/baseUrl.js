// This file helps point the app at the dev api if on localhost and the real api if in production.
// It is used in userApi.js.

export default function getBaseUrl() {
  // const inDevelopment = window.location.hostname === 'localhost'
  // return inDevelopment ? 'http://localhost:3001/' : '/'
  
  // Allows you to use 'localhost:3000/?useMockApi=true' to use mock api.
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/'
}

// said he just got this function off stack overflow!
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

