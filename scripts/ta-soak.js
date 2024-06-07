// Creator: k6 Browser Recorder 0.6.2

import { sleep, group, json } from 'k6'
import http from 'k6/http'
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
    cloud: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
    thresholds: {},
    scenarios: {
        Scenario_1: {
            executor: 'constant-vus',
      startTime: '0s',
      gracefulStop: '3s',
      duration: '3m',
      vus: 200,
      exec: 'scenario_1',
      }
    },
  }

  
const users = JSON.parse(open("./accounts.json"))

export function scenario_1() {
    let response
  
    const vars = {}
  
    group('page_1 - https://playpen.testassessify.com/', function () {
      response = http.get('https://playpen.testassessify.com/', {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
    //   sleep(13.2)
  
      response = http.options('https://platformify-0204.testassessify.com/api/v1/auth/login', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers': 'authorization,cache-control,content-type',
          'access-control-request-method': 'POST',
          origin: 'https://playpen.testassessify.com',
          'sec-fetch-mode': 'cors',
        },
      })
        
//   login
      response = http.post(
        'https://platformify-0204.testassessify.com/api/v1/auth/login',
        `{"account_type":"candidate","email":"${users[__VU-1].email}","password":"${users[__VU-1].password}"}`,
        {
          headers: {
            accept: 'application/json',
            authorization: 'Bearer 33928|lqyV9aWibr0HUxakmQxTea174zoZuD5NhoefnZKd',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
        )
        console.log({status: response.status, data: response.json(), vu:__VU, it:__ITER})
    //   sleep(5.9)
  
    //   response = http.options(
    //     'https://platformify-0204.testassessify.com/api/v1/listings?per_page=10&page=1',
    //     null,
    //     {
    //       headers: {
    //         accept: '*/*',
    //         'access-control-request-headers': 'authorization,cache-control',
    //         'access-control-request-method': 'GET',
    //         origin: 'https://playpen.testassessify.com',
    //         'sec-fetch-mode': 'cors',
    //       },
    //     }
    //   )
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/listings?per_page=10&page=1', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   vars['campaign_id1'] = jsonpath.query(
    //     response.json(),
    //     '$.data.data[0].pipelines[0].campaign_id'
    //   )[0]
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/industries', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/industries', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/functions', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/functions', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/locations', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/locations', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
    // //   sleep(26.2)
  
    //   response = http.options(
    //     'https://platformify-0204.testassessify.com/api/v1/listings?per_page=10&page=1',
    //     null,
    //     {
    //       headers: {
    //         accept: '*/*',
    //         'access-control-request-headers': 'authorization,cache-control',
    //         'access-control-request-method': 'GET',
    //         origin: 'https://playpen.testassessify.com',
    //         'sec-fetch-mode': 'cors',
    //       },
    //     }
    //   )
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/listings?per_page=10&page=1', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/industries', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/industries', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/functions', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/functions', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.get('https://platformify-0204.testassessify.com/api/v1/locations', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //       'cache-control': 'no-cache',
    //       'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //       'sec-ch-ua-mobile': '?0',
    //       'sec-ch-ua-platform': '"Windows"',
    //     },
    //   })
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/locations', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control',
    //       'access-control-request-method': 'GET',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
  
    //   response = http.get(
    //     'https://platformify-0204.testassessify.com/api/v1/listings/5f81140a-e07d-46fb-b522-bfa16d33cf12?link=https://playpen.testassessify.com/job-listings/apply/5f81140a-e07d-46fb-b522-bfa16d33cf12?campaign-id=5f81140a-e07d-46fb-b522-bfa16d33cf12',
    //     {
    //       headers: {
    //         accept: 'application/json',
    //         authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //         'cache-control': 'no-cache',
    //         'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //       },
    //     }
    //   )
  
    //   response = http.options(
    //     'https://platformify-0204.testassessify.com/api/v1/listings/5f81140a-e07d-46fb-b522-bfa16d33cf12?link=https://playpen.testassessify.com/job-listings/apply/5f81140a-e07d-46fb-b522-bfa16d33cf12?campaign-id=5f81140a-e07d-46fb-b522-bfa16d33cf12',
    //     null,
    //     {
    //       headers: {
    //         accept: '*/*',
    //         'access-control-request-headers': 'authorization,cache-control',
    //         'access-control-request-method': 'GET',
    //         origin: 'https://playpen.testassessify.com',
    //         'sec-fetch-mode': 'cors',
    //       },
    //     }
    //   )
  
    //   response = http.post(
    //     'https://platformify-0204.testassessify.com/api/v1/listings',
    //     `{"tag":"a29e0e37e657bb048569fb8382d6e3ee","campaign_id":"${vars['campaign_id1']}","affiliate_slug":null}`,
    //     {
    //       headers: {
    //         accept: 'application/json',
    //         authorization: 'Bearer 33929|yPycN8FnS90mxDctKVlLN4kvXw8WC2wGyegQDLHi',
    //         'cache-control': 'no-cache',
    //         'content-type': 'application/json',
    //         'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //       },
    //     }
    //   )
  
    //   response = http.options('https://platformify-0204.testassessify.com/api/v1/listings', null, {
    //     headers: {
    //       accept: '*/*',
    //       'access-control-request-headers': 'authorization,cache-control,content-type',
    //       'access-control-request-method': 'POST',
    //       origin: 'https://playpen.testassessify.com',
    //       'sec-fetch-mode': 'cors',
    //     },
    //   })
    })
}
  

// export default function main(i) {
//   let response

//     group('page_1 - http://playpen.testassessify.com/', function (j) {
//         // let loginCred = JSON.parse(open("../accounts.json"))
//         console.log({test:"this is a test",users: users[__VU].name, __VU})
//     response = http.get('http://playpenapi.testassessify.com/api/v1/listings?per_page=10&page=1', {
//       headers: {
//         accept: 'application/json',
//         authorization: 'Bearer 18254|1N8GxPXD1lFoveonfGBZNkQu34J9CSoQyNdpBSO0',
//         'cache-control': 'no-cache',
//       },
//     })
//     response = http.options(
//       'http://playpenapi.testassessify.com/api/v1/listings?per_page=10&page=1',
//       null,
//       {
//         headers: {
//           accept: '*/*',
//           'access-control-request-headers': 'authorization,cache-control',
//           'access-control-request-method': 'GET',
//           origin: 'http://playpen.testassessify.com',
//           'sec-fetch-mode': 'cors',
//         },
//       }
//     )
//   })

//   // Automatically added sleep
//   sleep(1)
// }