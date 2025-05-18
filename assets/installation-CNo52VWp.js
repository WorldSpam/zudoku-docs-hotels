import{Z as o,j as e}from"./entry.client-DwANNYfN.js";const r=`The task specified only creation of SDK client.\r
For that task a python client has been chosen.\r
I can't specify instalation steps, as code python generator every time fails to create proper README file with instructions.`,a=[{depth:1,value:"Installation",id:"installation",children:[{depth:2,value:"Requirements:",id:"requirements"},{depth:2,value:"Installation Steps (From here onvard I am not sure what to do)",id:"installation-steps-from-here-onvard-i-am-not-sure-what-to-do",children:[{depth:3,value:"1. + 2. Install directly from pip route",id:"1--2-install-directly-from-pip-route",children:[{depth:4,value:"Install locally",id:"install-locally"},{depth:4,value:"Install from github",id:"install-from-github"}]},{depth:3,value:"1. Clone the Repository",id:"1-clone-the-repository"},{depth:3,value:"2. Install Dependencies",id:"2-install-dependencies"},{depth:3,value:"3. Run tests",id:"3-run-tests"}]},{depth:2,value:"Usage (default API example taken straight from SDK docs)",id:"usage-default-api-example-taken-straight-from-sdk-docs"}]}],l=void 0;function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"installation",children:"Installation"}),`
`,e.jsx(t.p,{children:`The task specified only creation of SDK client.\r
For that task a python client has been chosen.\r
I can't specify instalation steps, as code python generator every time fails to create proper README file with instructions.`}),`
`,e.jsx(t.p,{children:"I can only go through possible route, based on what I found in instalation files and some help from chatgpt:"}),`
`,e.jsx(t.h2,{id:"requirements",children:"Requirements:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Python 3.9 - 3.13"}),`
`,e.jsxs(t.li,{children:["setuptools ",e.jsx(t.a,{href:"http://pypi.python.org/pypi/setuptools",children:"http://pypi.python.org/pypi/setuptools"})]}),`
`]}),`
`,e.jsx(t.h2,{id:"installation-steps-from-here-onvard-i-am-not-sure-what-to-do",children:"Installation Steps (From here onvard I am not sure what to do)"}),`
`,e.jsx(t.h3,{id:"1--2-install-directly-from-pip-route",children:"1. + 2. Install directly from pip route"}),`
`,e.jsx(t.h4,{id:"install-locally",children:"Install locally"}),`
`,e.jsx(t.p,{children:"pip install ./python-sdk"}),`
`,e.jsx(t.h4,{id:"install-from-github",children:"Install from github"}),`
`,e.jsxs(t.p,{children:["pip install git+",e.jsx(t.a,{href:"https://github.com/WorldSpam/openapi-gen-python-client-hotel-booking-sdk.git",children:"https://github.com/WorldSpam/openapi-gen-python-client-hotel-booking-sdk.git"})]}),`
`,e.jsx(t.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`git clone https://github.com/WorldSpam/openapi-gen-python-client-hotel-booking-sdk.git\r
cd openapi-gen-python-client-hotel-booking-sdk
`})}),`
`,e.jsx(t.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),`
`,e.jsx(t.p,{children:"Use pip to install dependencies:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`pip install -r requirements.txt\r
pip install -r test-requirements.txt
`})}),`
`,e.jsx(t.h3,{id:"3-run-tests",children:"3. Run tests"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`pytest --cov=hotel_booking_sdk
`})}),`
`,e.jsx(t.h2,{id:"usage-default-api-example-taken-straight-from-sdk-docs",children:"Usage (default API example taken straight from SDK docs)"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-python",children:`import hotel_booking_sdk\r
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
`})})]})}function p(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default,r as excerpt,l as frontmatter,a as tableOfContents};
//# sourceMappingURL=installation-CNo52VWp.js.map
