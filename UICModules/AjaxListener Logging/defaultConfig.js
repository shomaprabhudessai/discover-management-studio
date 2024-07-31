{
  "ajaxListener": {
    "skipSafetyCheck": true,
    "xhrEnabled": false,
    "fetchEnabled": false,
    "webSocketEnabled": true,
    "eventSourceEnabled": true,
    "urlBlocklist": [],
    "filters": [
      {
        "log": {
          "requestHeaders": false,
          "requestData": true,
          "responseHeaders": true,
          "responseData": true,
          "queryString": true,
          "parseRequestString": false,
          "sensitiveFields": [
            {
              "field": "John",
              "replacement": "*******"
            }
          ],
          "privacyPatterns": [
            {
              "pattern": {
                "regex": "John",
                "flags": "g"
              },
              "replacement": "***"
            }
          ]
        }
      }
    ]
  }
}
