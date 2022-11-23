See [web page](https://catacloud-example-app.vercel.app)

### Integrate with Catacloud

1. Find a [oidc](https://openid.net/connect/) library for your language
   1. We uses [oidc-client-ts](https://www.npmjs.com/package/oidc-client-ts) and [react-oidc-context](https://www.npmjs.com/package/react-oidc-context)
2. First get configuration from [catacloud developers](https://developers.catacloud.com/apps)
   1. Login if you haven't already
   2. ![picture 1](images/223dd1ab90dbc7a9472157fac2420b74dc0a6abd877e537abdaabf305e43735d.png)
   3. Click on ![picture 2](images/23e58d8844488fbfc4cffadaed15b68728948d9309aae637fc317b647c8ef968.png)
   4. Create a .env and copy the content of .env.example
   5. Copy App ID and App Secret into env and full out the yellow input fields ![picture 3](images/015d237976d08caa43222fcfcde98156bd70ca26813e6e78412b9b7e23c02566.png)
3. Test if your app exists in catacloud.com
   1. Go to the [client](https://app.catacloud.com/) you selected in 2. ii.
   2. ![picture 4](images/ef8cdb27f89e7864e577106f9e616061e15bc4ec59240d4e73188f5097e11b2c.png)
   3. Click on your app and install it
   4. Login out and in again to see the app
4. To get token from app.catacloud.com see `utils/getToken.ts`
