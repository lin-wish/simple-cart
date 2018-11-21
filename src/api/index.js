const CLIENT_ID = '';
const CLIENT_SECRET = '';

// Encode string with base64 encoding
const base64Encode = (encodeData) => {
  const buff = new Buffer(encodeData);
  return buff.toString('base64');
};

// Get ebay access token
const getAccessToken = () => {
  const auth = `Basic ${base64Encode(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;
  const headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: auth,
  });
  const body = {
    grant_type: 'client_credentials',
    redirect_uri: '/',
    scope: 'https://api.ebay.com/oauth/api_scope',
  };
  const req = new Request(
    'https://api.sandbox.ebay.com/identity/v1/oauth2/token', {
      method: 'POST',
      headers,
      body,
    });
  return fetch(req)
    .then(res => res.json())
    .then(res => res.access_token)
    .catch(err => console.log(err));
};

// Search ebay items by keywords
const searchItems = async (kw, limit = 10) => {
  const accessToken = await getAccessToken();
  const searchUrl = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${kw}&limit=${limit}`;
  const auth = `Bearer ${accessToken}`;
  const headers = new Headers({
    Authorization: auth,
  });
  const req = new Request(
    searchUrl, {
      method: 'GET',
      headers,
    },
  );
  return fetch(req)
    .then(res => res.json())
    .then(res => res.itemSummaries);
};

export default searchItems;
