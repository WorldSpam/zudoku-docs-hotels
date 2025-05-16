import{Z as i,j as e}from"./entry.client-CcQvh7lj.js";const a="Authorization seems to happen through configuration:",s=[{depth:1,value:"Auth",id:"auth",children:[{depth:2,value:"The same example from instalation page",id:"the-same-example-from-instalation-page"}]}],p=void 0;function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"auth",children:"Auth"}),`
`,e.jsx(n.p,{children:"Authorization seems to happen through configuration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`configuration = openapi_client.Configuration(\r
    access_token = "your-access-token"\r
)
`})}),`
`,e.jsx(n.h2,{id:"the-same-example-from-instalation-page",children:"The same example from instalation page"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Api Key Authentication (ApiKeyAuth):"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-python",children:`import hotel_booking_sdk\r
from hotel_booking_sdk.models.hotel import Hotel\r
from hotel_booking_sdk.rest import ApiException\r
from pprint import pprint\r
\r
# Defining the host is optional and defaults to https://api.example.com/v1\r
# See configuration.py for a list of all supported configuration parameters.\r
configuration = hotel_booking_sdk.Configuration(\r
    host = "https://api.example.com/v1"\r
)\r
\r
# The client must configure the authentication and authorization parameters\r
# in accordance with the API server security policy.\r
# Examples for each auth method are provided below, use the example that\r
# satisfies your auth use case.\r
\r
# Configure API key authorization: ApiKeyAuth\r
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]\r
\r
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed\r
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'\r
\r
# Enter a context with an instance of the API client\r
with hotel_booking_sdk.ApiClient(configuration) as api_client:\r
    # Create an instance of the API class\r
    api_instance = hotel_booking_sdk.DefaultApi(api_client)\r
    page = 1 # int | Page number (optional) (default to 1)\r
    size = 10 # int | Page size (optional) (default to 10)\r
\r
    try:\r
        # Get a list of hotels.\r
        api_response = api_instance.hotels_get(page=page, size=size)\r
        print("The response of DefaultApi->hotels_get:\\n")\r
        pprint(api_response)\r
    except Exception as e:\r
        print("Exception when calling DefaultApi->hotels_get: %s\\n" % e)
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default,a as excerpt,p as frontmatter,s as tableOfContents};
//# sourceMappingURL=authorization-DKtaKi31.js.map
