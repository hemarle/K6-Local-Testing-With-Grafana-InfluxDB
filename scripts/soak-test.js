import { sleep, group } from 'k6'
import http from 'k6/http'
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: { http_req_duration: ['p(95)>5000'] },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 50, duration: '1m' },
        { target: 70, duration: '1m' },
        { target: 100, duration: '1m' },
        { target: 200, duration: '1m' },
        { target: 300, duration: '1m' },
        { target: 400, duration: '1m' },
        { target: 400, duration: '1m' },
        { target: 400, duration: '1m' },
        { target: 400, duration: '1m' },
        // { target: 500, duration: '1m' },
        // { target: 600, duration: '1m' },
        // { target: 700, duration: '1m' },
        // { target: 800, duration: '1m' },
        // { target: 900, duration: '1m' },
        // { target: 1000, duration: '1m' },
        // { target: 1100, duration: '1m' },
        // { target: 1500, duration: '1m' },
        // { target: 2000, duration: '1m' },
        // { target: 40, duration: '1m' },
        // { target: 50, duration: '1m' },
        // { target: 40, duration: '1m' },
      ],
      startVUs: 10,
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  group('Login and Play - https://qwizfun.com/login', function () {
    response = http.post(
      'https://fizzle.gamequiz.live/children/event-login',
      '{"unique_id":"test-sixteen@9ijakids.com","event_code":"091098"}',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfaWQiOiJ0ZXN0LXNpeHRlZW5AOWlqYWtpZHMuY29tIiwiaWF0IjoxNzAwNTA1MDUzLCJleHAiOjE3MDA1MDg2NTN9.coEExFj_hO9tOfco8PZ86fEB82H-7r5hc-BssXBebVI',
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['token'] = jsonpath.query(response.json(), '$.data.token')[0]

    vars['public_pin'] = jsonpath.query(response.json(), '$.data.event.public_pin')[0]

    vars['id'] = jsonpath.query(response.json(), '$.data.user.id')[0]

    response = http.options('https://fizzle.gamequiz.live/children/event-login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://qwizfun.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(1)

    response = http.post(
      'https://fizzle.gamequiz.live/quiz/by-event',
      `{"user_id":"${vars['id']}","event_code":"${vars['public_pin']}"}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    vars['id2'] = jsonpath.query(response.json(), '$.data[0].id')[0]

    response = http.options('https://fizzle.gamequiz.live/quiz/by-event', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://qwizfun.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(10)

    response = http.post(
      'https://fizzle.gamequiz.live/quiz/start',
      `{"player_id":"${vars['id']}","quiz_id":"${vars['id2']}"}`,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          authorization: `Bearer ${vars['token']}`,
          'content-type': 'application/json',
          'sec-ch-ua': '"Microsoft Edge";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://fizzle.gamequiz.live/quiz/start', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'authorization,content-type',
        'access-control-request-method': 'POST',
        origin: 'https://qwizfun.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(120)
  })
}
