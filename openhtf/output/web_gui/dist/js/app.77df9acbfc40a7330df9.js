webpackJsonp(
    [1], {
      21: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.waiting = 11] = 'waiting', e[e.running = 12] = 'running',
                        e[e.pass = 13] = 'pass', e[e.fail = 14] = 'fail',
                        e[e.error = 15] = 'error',
                        e[e.timeout = 16] = 'timeout',
                        e[e.aborted = 17] = 'aborted'
        }(t.TestStatus || (t.TestStatus = {}));
        var r = function() {
          return function PlugDescriptor() {}
        }();
        t.PlugDescriptor = r;
        var i = function() {
          return function TestState(e) {
            Object.assign(this, e)
          }
        }();
        t.TestState = i
      },
      233: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            n.d(t, 'HttpBackend', function() {
              return d
            }), n.d(t, 'HttpHandler', function() {
              return p
            }), n.d(t, 'HttpClient', function() {
              return C
            }), n.d(t, 'HttpHeaders', function() {
              return f
            }), n.d(t, 'HTTP_INTERCEPTORS', function() {
              return T
            }), n.d(t, 'JsonpClientBackend', function() {
              return O
            }), n.d(t, 'JsonpInterceptor', function() {
              return I
            }), n.d(t, 'HttpClientJsonpModule', function() {
              return B
            }), n.d(t, 'HttpClientModule', function() {
              return H
            }), n.d(t, 'HttpClientXsrfModule', function() {
              return j
            }), n.d(t, 'ɵinterceptingHandler', function() {
              return interceptingHandler
            }), n.d(t, 'HttpParams', function() {
              return m
            }), n.d(t, 'HttpUrlEncodingCodec', function() {
              return h
            }), n.d(t, 'HttpRequest', function() {
              return y
            }), n.d(t, 'HttpErrorResponse', function() {
              return S
            }), n.d(t, 'HttpEventType', function() {
              return g
            }), n.d(t, 'HttpHeaderResponse', function() {
              return b
            }), n.d(t, 'HttpResponse', function() {
              return _
            }), n.d(t, 'HttpResponseBase', function() {
              return v
            }), n.d(t, 'HttpXhrBackend', function() {
              return D
            }), n.d(t, 'XhrFactory', function() {
              return L
            }), n.d(t, 'HttpXsrfTokenExtractor', function() {
              return R
            }), n.d(t, 'ɵa', function() {
              return w
            }), n.d(t, 'ɵb', function() {
              return P
            }), n.d(t, 'ɵc', function() {
              return jsonpCallbackContext
            }), n.d(t, 'ɵd', function() {
              return x
            }), n.d(t, 'ɵg', function() {
              return V
            }), n.d(t, 'ɵh', function() {
              return k
            }), n.d(t, 'ɵe', function() {
              return M
            }), n.d(t, 'ɵf', function() {
              return F
            });
        var r = n(16), i = n(2), o = n(56), s = (n.n(o), n(74)),
            a = (n.n(s), n(81)), u = (n.n(a), n(57)), l = (n.n(u), n(19)),
            c = n(0),
            p = (n.n(c), function() {
              function HttpHandler() {}
              return HttpHandler.prototype.handle = function(e) {}, HttpHandler
            }()), d = function() {
              function HttpBackend() {}
              return HttpBackend.prototype.handle = function(e) {}, HttpBackend
            }(), h = function() {
              function HttpUrlEncodingCodec() {}
              return HttpUrlEncodingCodec.prototype.encodeKey = function(e) {
                return standardEncoding(e)
              }, HttpUrlEncodingCodec.prototype.encodeValue = function(e) {
                return standardEncoding(e)
              }, HttpUrlEncodingCodec.prototype.decodeKey = function(e) {
                return decodeURIComponent(e)
              }, HttpUrlEncodingCodec.prototype.decodeValue = function(e) {
                return decodeURIComponent(e)
              }, HttpUrlEncodingCodec
            }();
        function standardEncoding(e) {
          return encodeURIComponent(e)
              .replace(/%40/gi, '@')
              .replace(/%3A/gi, ':')
              .replace(/%24/gi, '$')
              .replace(/%2C/gi, ',')
              .replace(/%3B/gi, ';')
              .replace(/%2B/gi, '+')
              .replace(/%3D/gi, '=')
              .replace(/%3F/gi, '?')
              .replace(/%2F/gi, '/')
        }
        var m = function() {
          function HttpParams(e) {
            void 0 === e && (e = {}),
                this.updates = null, this.cloneFrom = null,
                this.encoder = e.encoder || new h,
                this.map = e.fromString ? function paramParser(e, t) {
                  var n = new Map;
                  return e.length > 0 && e.split('&').forEach(function(e) {
                    var r = e.indexOf('='),
                        i = -1 == r ? [t.decodeKey(e), ''] :
                                      [
                                        t.decodeKey(e.slice(0, r)),
                                        t.decodeValue(e.slice(r + 1))
                                      ],
                        o = i[0], s = i[1], a = n.get(o) || [];
                    a.push(s), n.set(o, a)
                  }),
                         n
                }(e.fromString, this.encoder) : null
          }
          return HttpParams.prototype.has = function(e) {
            return this.init(), this.map.has(e)
          }, HttpParams.prototype.get = function(e) {
            this.init();
            var t = this.map.get(e);
            return t ? t[0] : null
          }, HttpParams.prototype.getAll = function(e) {
            return this.init(), this.map.get(e) || null
          }, HttpParams.prototype.keys = function() {
            return this.init(), Array.from(this.map.keys())
          }, HttpParams.prototype.append = function(e, t) {
            return this.clone({param: e, value: t, op: 'a'})
          }, HttpParams.prototype.set = function(e, t) {
            return this.clone({param: e, value: t, op: 's'})
          }, HttpParams.prototype.delete = function(e, t) {
            return this.clone({param: e, value: t, op: 'd'})
          }, HttpParams.prototype.toString = function() {
            var e = this;
            return this.init(),
                   this.keys()
                       .map(function(t) {
                         var n = e.encoder.encodeKey(t);
                         return e.map.get(t)
                             .map(function(t) {
                               return n + '=' + e.encoder.encodeValue(t)
                             })
                             .join('&')
                       })
                       .join('&')
          }, HttpParams.prototype.clone = function(e) {
            var t = new HttpParams({encoder: this.encoder});
            return t.cloneFrom = this.cloneFrom || this,
                   t.updates = (this.updates || []).concat([e]), t
          }, HttpParams.prototype.init = function() {
            var e = this;
            null === this.map && (this.map = new Map),
                null !== this.cloneFrom &&
                (this.cloneFrom.init(),
                 this.cloneFrom.keys().forEach(function(t) {
                   return e.map.set(t, e.cloneFrom.map.get(t))
                 }),
                 this.updates.forEach(function(t) {
                   switch (t.op) {
                     case 'a':
                     case 's':
                       var n =
                           ('a' === t.op ? e.map.get(t.param) : void 0) || [];
                       n.push(t.value), e.map.set(t.param, n);
                       break;
                     case 'd':
                       if (void 0 === t.value) {
                         e.map.delete(t.param);
                         break
                       }
                       var r = e.map.get(t.param) || [], i = r.indexOf(t.value);
                       -1 !== i && r.splice(i, 1),
                           r.length > 0 ? e.map.set(t.param, r) :
                                          e.map.delete(t.param)
                   }
                 }),
                 this.cloneFrom = null)
          }, HttpParams
        }(), f = function() {
          function HttpHeaders(e) {
            var t = this;
            this.normalizedNames = new Map, this.lazyUpdate = null,
            e ? this.lazyInit = 'string' == typeof e ? function() {
              t.headers = new Map, e.split('\n').forEach(function(e) {
                var n = e.indexOf(':');
                if (n > 0) {
                  var r = e.slice(0, n), i = r.toLowerCase(),
                      o = e.slice(n + 1).trim();
                  t.maybeSetNormalizedName(r, i),
                      t.headers.has(i) ? t.headers.get(i).push(o) :
                                         t.headers.set(i, [o])
                }
              })
            } : function() {
              t.headers = new Map, Object.keys(e).forEach(function(n) {
                var r = e[n], i = n.toLowerCase();
                'string' == typeof r && (r = [r]),
                    r.length > 0 &&
                    (t.headers.set(i, r), t.maybeSetNormalizedName(n, i))
              })
            } : this.headers = new Map
          }
          return HttpHeaders.prototype.has = function(e) {
            return this.init(), this.headers.has(e.toLowerCase())
          }, HttpHeaders.prototype.get = function(e) {
            this.init();
            var t = this.headers.get(e.toLowerCase());
            return t && t.length > 0 ? t[0] : null
          }, HttpHeaders.prototype.keys = function() {
            return this.init(), Array.from(this.normalizedNames.values())
          }, HttpHeaders.prototype.getAll = function(e) {
            return this.init(), this.headers.get(e.toLowerCase()) || null
          }, HttpHeaders.prototype.append = function(e, t) {
            return this.clone({name: e, value: t, op: 'a'})
          }, HttpHeaders.prototype.set = function(e, t) {
            return this.clone({name: e, value: t, op: 's'})
          }, HttpHeaders.prototype.delete = function(e, t) {
            return this.clone({name: e, value: t, op: 'd'})
          }, HttpHeaders.prototype.maybeSetNormalizedName = function(e, t) {
            this.normalizedNames.has(t) || this.normalizedNames.set(t, e)
          }, HttpHeaders.prototype.init = function() {
            var e = this;
            this.lazyInit &&
                (this.lazyInit instanceof HttpHeaders ?
                     this.copyFrom(this.lazyInit) :
                     this.lazyInit(),
                 this.lazyInit = null,
                 this.lazyUpdate &&
                     (this.lazyUpdate.forEach(function(t) {
                       return e.applyUpdate(t)
                     }),
                      this.lazyUpdate = null))
          }, HttpHeaders.prototype.copyFrom = function(e) {
            var t = this;
            e.init(), Array.from(e.headers.keys()).forEach(function(n) {
              t.headers.set(n, e.headers.get(n)),
                  t.normalizedNames.set(n, e.normalizedNames.get(n))
            })
          }, HttpHeaders.prototype.clone = function(e) {
            var t = new HttpHeaders;
            return t.lazyInit =
                       this.lazyInit && this.lazyInit instanceof HttpHeaders ?
                       this.lazyInit :
                       this,
                   t.lazyUpdate = (this.lazyUpdate || []).concat([e]), t
          }, HttpHeaders.prototype.applyUpdate = function(e) {
            var t = e.name.toLowerCase();
            switch (e.op) {
              case 'a':
              case 's':
                var n = e.value;
                if ('string' == typeof n && (n = [n]), 0 === n.length) return;
                this.maybeSetNormalizedName(e.name, t);
                var r = ('a' === e.op ? this.headers.get(t) : void 0) || [];
                r.push.apply(r, n), this.headers.set(t, r);
                break;
              case 'd':
                var i = e.value;
                if (i) {
                  var o = this.headers.get(t);
                  if (!o) return;
                  0 === (o = o.filter(function(e) {
                          return -1 === i.indexOf(e)
                        })).length ?
                      (this.headers.delete(t), this.normalizedNames.delete(t)) :
                      this.headers.set(t, o)
                } else
                  this.headers.delete(t), this.normalizedNames.delete(t)
            }
          }, HttpHeaders.prototype.forEach = function(e) {
            var t = this;
            this.init(),
                Array.from(this.normalizedNames.keys()).forEach(function(n) {
                  return e(t.normalizedNames.get(n), t.headers.get(n))
                })
          }, HttpHeaders
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function isArrayBuffer(e) {
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
        }
        function isBlob(e) {
          return 'undefined' != typeof Blob && e instanceof Blob
        }
        function isFormData(e) {
          return 'undefined' != typeof FormData && e instanceof FormData
        }
        var y = function() {
          function HttpRequest(e, t, n, r) {
            var i;
            if (this.url = t, this.body = null, this.reportProgress = !1,
                this.withCredentials = !1, this.responseType = 'json',
                this.method = e.toUpperCase(),
                /**
                 * @license
                 * Copyright Google Inc. All Rights Reserved.
                 *
                 * Use of this source code is governed by an MIT-style license
                 * that can be found in the LICENSE file at
                 * https://angular.io/license
                 */
                function mightHaveBody(e) {
                  switch (e) {
                    case 'DELETE':
                    case 'GET':
                    case 'HEAD':
                    case 'OPTIONS':
                    case 'JSONP':
                      return !1;
                    default:
                      return !0
                  }
                }(this.method) ||
                        r ?
                    (this.body = n || null, i = r) :
                    i = n,
                i &&
                    (this.reportProgress = !!i.reportProgress,
                     this.withCredentials = !!i.withCredentials,
                     i.responseType && (this.responseType = i.responseType),
                     i.headers && (this.headers = i.headers),
                     i.params && (this.params = i.params)),
                this.headers || (this.headers = new f), this.params) {
              var o = this.params.toString();
              if (0 === o.length)
                this.urlWithParams = t;
              else {
                var s = t.indexOf('?'),
                    a = -1 === s     ? '?' :
                    s < t.length - 1 ? '&' :
                                       '';
                this.urlWithParams = t + a + o
              }
            } else
              this.params = new m, this.urlWithParams = t
          }
          return HttpRequest.prototype.serializeBody = function() {
            return null === this.body ? null :
                isArrayBuffer(this.body) || isBlob(this.body) ||
                    isFormData(this.body) || 'string' == typeof this.body ?
                                        this.body :
                this.body instanceof m ? this.body.toString() :
                'object' == typeof this.body || 'boolean' == typeof this.body ||
                    Array.isArray(this.body) ?
                                         JSON.stringify(this.body) :
                                         this.body.toString()
          }, HttpRequest.prototype.detectContentTypeHeader = function() {
            return null === this.body ?
                null :
                isFormData(this.body) ?
                null :
                isBlob(this.body) ?
                this.body.type || null :
                isArrayBuffer(this.body) ?
                null :
                'string' == typeof this.body ?
                'text/plain' :
                this.body instanceof m ?
                'application/x-www-form-urlencoded;charset=UTF-8' :
                'object' == typeof this.body || 'number' == typeof this.body ||
                    Array.isArray(this.body) ?
                'application/json' :
                null
          }, HttpRequest.prototype.clone = function(e) {
            void 0 === e && (e = {});
            var t = e.method || this.method, n = e.url || this.url,
                r = e.responseType || this.responseType,
                i = void 0 !== e.body ? e.body : this.body,
                o = void 0 !== e.withCredentials ? e.withCredentials :
                                                   this.withCredentials,
                s = void 0 !== e.reportProgress ? e.reportProgress :
                                                  this.reportProgress,
                a = e.headers || this.headers, u = e.params || this.params;
            return void 0 !== e.setHeaders &&
                       (a = Object.keys(e.setHeaders)
                                .reduce(
                                    function(t, n) {
                                      return t.set(n, e.setHeaders[n])
                                    },
                                    a)),
                   e.setParams &&
                       (u = Object.keys(e.setParams)
                                .reduce(
                                    function(t, n) {
                                      return t.set(n, e.setParams[n])
                                    },
                                    u)),
                   new HttpRequest(t, n, i, {
                     params: u,
                     headers: a,
                     reportProgress: s,
                     responseType: r,
                     withCredentials: o
                   })
          }, HttpRequest
        }(), g = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        g[g.Sent] = 'Sent',
        g[g.UploadProgress] = 'UploadProgress',
        g[g.ResponseHeader] = 'ResponseHeader',
        g[g.DownloadProgress] = 'DownloadProgress', g[g.Response] = 'Response',
        g[g.User] = 'User';
        var v = function() {
          return function HttpResponseBase(e, t, n) {
            void 0 === t && (t = 200), void 0 === n && (n = 'OK'),
                this.headers = e.headers || new f,
                this.status = void 0 !== e.status ? e.status : t,
                this.statusText = e.statusText || n, this.url = e.url || null,
                this.ok = this.status >= 200 && this.status < 300
          }
        }(), b = function(e) {
          function HttpHeaderResponse(t) {
            void 0 === t && (t = {});
            var n = e.call(this, t) || this;
            return n.type = g.ResponseHeader, n
          }
          return r.a(HttpHeaderResponse, e),
                 HttpHeaderResponse.prototype.clone = function(e) {
                   return void 0 === e && (e = {}), new HttpHeaderResponse({
                            headers: e.headers || this.headers,
                            status: void 0 !== e.status ? e.status :
                                                          this.status,
                            statusText: e.statusText || this.statusText,
                            url: e.url || this.url || void 0
                          })
                 }, HttpHeaderResponse
        }(v), _ = function(e) {
          function HttpResponse(t) {
            void 0 === t && (t = {});
            var n = e.call(this, t) || this;
            return n.type = g.Response, n.body = t.body || null, n
          }
          return r.a(HttpResponse, e),
                 HttpResponse.prototype.clone = function(e) {
                   return void 0 === e && (e = {}), new HttpResponse({
                            body: void 0 !== e.body ? e.body : this.body,
                            headers: e.headers || this.headers,
                            status: void 0 !== e.status ? e.status :
                                                          this.status,
                            statusText: e.statusText || this.statusText,
                            url: e.url || this.url || void 0
                          })
                 }, HttpResponse
        }(v), S = function(e) {
          function HttpErrorResponse(t) {
            var n = e.call(this, t, 0, 'Unknown Error') || this;
            return n.name = 'HttpErrorResponse', n.ok = !1,
                   n.status >= 200 && n.status < 300 ?
                       n.message = 'Http failure during parsing for ' +
                           (t.url || '(unknown url)') :
                       n.message = 'Http failure response for ' +
                           (t.url || '(unknown url)') + ': ' + t.status + ' ' +
                           t.statusText,
                   n.error = t.error || null, n
          }
          return r.a(HttpErrorResponse, e), HttpErrorResponse
        }(v);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function addBody(e, t) {
          return {
            body: t, headers: e.headers, observe: e.observe, params: e.params,
                reportProgress: e.reportProgress, responseType: e.responseType,
                withCredentials: e.withCredentials
          }
        }
        var C = function() {
          function HttpClient(e) {
            this.handler = e
          }
          return HttpClient.prototype.request = function(e, t, n) {
            var r, i = this;
            void 0 === n && (n = {}),
                r = e instanceof y ? e : new y(e, t, n.body || null, {
                  headers: n.headers,
                  params: n.params,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials
                });
            var l = s.concatMap.call(Object(o.of)(r), function(e) {
              return i.handler.handle(e)
            });
            if (e instanceof y || 'events' === n.observe) return l;
            var c = a.filter.call(l, function(e) {
              return e instanceof _
            });
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return u.map.call(c, function(e) {
                      if (null !== e.body && !(e.body instanceof ArrayBuffer))
                        throw new Error('Response is not an ArrayBuffer.');
                      return e.body
                    });
                  case 'blob':
                    return u.map.call(c, function(e) {
                      if (null !== e.body && !(e.body instanceof Blob))
                        throw new Error('Response is not a Blob.');
                      return e.body
                    });
                  case 'text':
                    return u.map.call(c, function(e) {
                      if (null !== e.body && 'string' != typeof e.body)
                        throw new Error('Response is not a string.');
                      return e.body
                    });
                  case 'json':
                  default:
                    return u.map.call(c, function(e) {
                      return e.body
                    })
                }
              case 'response':
                return c;
              default:
                throw new Error(
                    'Unreachable: unhandled observe type ' + n.observe + '}')
            }
          }, HttpClient.prototype.delete = function(e, t) {
            return void 0 === t && (t = {}), this.request('DELETE', e, t)
          }, HttpClient.prototype.get = function(e, t) {
            return void 0 === t && (t = {}), this.request('GET', e, t)
          }, HttpClient.prototype.head = function(e, t) {
            return void 0 === t && (t = {}), this.request('HEAD', e, t)
          }, HttpClient.prototype.jsonp = function(e, t) {
            return this.request('JSONP', e, {
              params: (new m).append(t, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            })
          }, HttpClient.prototype.options = function(e, t) {
            return void 0 === t && (t = {}), this.request('OPTIONS', e, t)
          }, HttpClient.prototype.patch = function(e, t, n) {
            return void 0 === n && (n = {}),
                   this.request('PATCH', e, addBody(n, t))
          }, HttpClient.prototype.post = function(e, t, n) {
            return void 0 === n && (n = {}),
                   this.request('POST', e, addBody(n, t))
          }, HttpClient.prototype.put = function(e, t, n) {
            return void 0 === n && (n = {}),
                   this.request('PUT', e, addBody(n, t))
          }, HttpClient
        }();
        C.decorators = [{type: i.Injectable}], C.ctorParameters = function() {
          return [{type: p}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var A = function() {
          function HttpInterceptorHandler(e, t) {
            this.next = e, this.interceptor = t
          }
          return HttpInterceptorHandler.prototype.handle = function(e) {
            return this.interceptor.intercept(e, this.next)
          }, HttpInterceptorHandler
        }(), T = new i.InjectionToken('HTTP_INTERCEPTORS'), w = function() {
          function NoopInterceptor() {}
          return NoopInterceptor.prototype.intercept = function(e, t) {
            return t.handle(e)
          }, NoopInterceptor
        }();
        w.decorators = [{type: i.Injectable}], w.ctorParameters = function() {
          return []
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var E = 0, P = function() {
          return function JsonpCallbackContext() {}
        }(), O = function() {
          function JsonpClientBackend(e, t) {
            this.callbackMap = e, this.document = t
          }
          return JsonpClientBackend
                     .prototype.nextCallback =
                     function() {
            return 'ng_jsonp_callback_' + E++
          },
   JsonpClientBackend.prototype.handle = function(e) {
     var t = this;
     if ('JSONP' !== e.method)
       throw new Error('JSONP requests must use JSONP request method.');
     if ('json' !== e.responseType)
       throw new Error('JSONP requests must use Json response type.');
     return new c.Observable(function(n) {
       var r = t.nextCallback(),
           i = e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, '=' + r + '$1'),
           o = t.document.createElement('script');
       o.src = i;
       var s = null, a = !1, u = !1;
       t.callbackMap[r] = function(e) {
         delete t.callbackMap[r], u || (s = e, a = !0)
       };
       var l = function() {
         o.parentNode && o.parentNode.removeChild(o), delete t.callbackMap[r]
       }, c = function(e) {
         u ||
             (l(),
              a ? (n.next(
                       new _({body: s, status: 200, statusText: 'OK', url: i})),
                   n.complete()) :
                  n.error(new S({
                    url: i,
                    status: 0,
                    statusText: 'JSONP Error',
                    error: new Error(
                        'JSONP injected script did not invoke callback.')
                  })))
       }, p = function(e) {
         u ||
             (l(),
              n.error(new S(
                  {error: e, status: 0, statusText: 'JSONP Error', url: i})))
       };
       return o.addEventListener('load', c), o.addEventListener('error', p),
              t.document.body.appendChild(o), n.next({type: g.Sent}),
              function() {
                u = !0, o.removeEventListener('load', c),
                o.removeEventListener('error', p), l()
              }
     })
   }, JsonpClientBackend
        }();
        O.decorators = [{type: i.Injectable}], O.ctorParameters = function() {
          return [
            {type: P},
            {type: void 0, decorators: [{type: i.Inject, args: [l.DOCUMENT]}]}
          ]
        };
        var I = function() {
          function JsonpInterceptor(e) {
            this.jsonp = e
          }
          return JsonpInterceptor.prototype.intercept = function(e, t) {
            return 'JSONP' === e.method ? this.jsonp.handle(e) : t.handle(e)
          }, JsonpInterceptor
        }();
        I.decorators = [{type: i.Injectable}], I.ctorParameters = function() {
          return [{type: O}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var N = /^\)\]\}',?\n/;
        var L = function() {
          function XhrFactory() {}
          return XhrFactory.prototype.build = function() {}, XhrFactory
        }(), x = function() {
          function BrowserXhr() {}
          return BrowserXhr.prototype.build = function() {
            return new XMLHttpRequest
          }, BrowserXhr
        }();
        x.decorators = [{type: i.Injectable}], x.ctorParameters = function() {
          return []
        };
        var D = function() {
          function HttpXhrBackend(e) {
            this.xhrFactory = e
          }
          return HttpXhrBackend.prototype.handle = function(e) {
            var t = this;
            if ('JSONP' === e.method)
              throw new Error(
                  'Attempted to construct Jsonp request without JsonpClientModule installed.');
            return new c.Observable(function(n) {
              var r = t.xhrFactory.build();
              if (r.open(e.method, e.urlWithParams),
                  e.withCredentials && (r.withCredentials = !0),
                  e.headers.forEach(function(e, t) {
                    return r.setRequestHeader(e, t.join(','))
                  }),
                  e.headers.has('Accept') ||
                      r.setRequestHeader(
                          'Accept', 'application/json, text/plain, */*'),
                  !e.headers.has('Content-Type')) {
                var i = e.detectContentTypeHeader();
                null !== i && r.setRequestHeader('Content-Type', i)
              }
              if (e.responseType) {
                var o = e.responseType.toLowerCase();
                r.responseType = 'json' !== o ? o : 'text'
              }
              var s = e.serializeBody(), a = null, u = function() {
                if (null !== a) return a;
                var t = 1223 === r.status ? 204 : r.status,
                    n = r.statusText || 'OK',
                    i = new f(r.getAllResponseHeaders()),
                    o = function getResponseUrl(e) {
                      return 'responseURL' in e && e.responseURL ?
                          e.responseURL :
                          /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ?
                          e.getResponseHeader('X-Request-URL') :
                          null
                    }(r) || e.url;
                return a = new b({headers: i, status: t, statusText: n, url: o})
              }, l = function() {
                var t = u(), i = t.headers, o = t.status, s = t.statusText,
                    a = t.url, l = null;
                204 !== o &&
                    (l = void 0 === r.response ? r.responseText : r.response),
                    0 === o && (o = l ? 200 : 0);
                var c = o >= 200 && o < 300;
                if (c && 'json' === e.responseType && 'string' == typeof l) {
                  l = l.replace(N, '');
                  try {
                    l = JSON.parse(l)
                  } catch (e) {
                    c = !1, l = { error: e, text: l }
                  }
                } else if (
                    !c && 'json' === e.responseType && 'string' == typeof l)
                  try {
                    l = JSON.parse(l)
                  } catch (e) {
                  }
                c ? (n.next(new _({
                  body: l,
                  headers: i,
                  status: o,
                  statusText: s,
                  url: a || void 0
                })),
                     n.complete()) :
                    n.error(new S({
                      error: l,
                      headers: i,
                      status: o,
                      statusText: s,
                      url: a || void 0
                    }))
              }, c = function(e) {
                var t = new S({
                  error: e,
                  status: r.status || 0,
                  statusText: r.statusText || 'Unknown Error'
                });
                n.error(t)
              }, p = !1, d = function(t) {
                p || (n.next(u()), p = !0);
                var i = {type: g.DownloadProgress, loaded: t.loaded};
                t.lengthComputable && (i.total = t.total),
                    'text' === e.responseType && r.responseText &&
                    (i.partialText = r.responseText),
                    n.next(i)
              }, h = function(e) {
                var t = {type: g.UploadProgress, loaded: e.loaded};
                e.lengthComputable && (t.total = e.total), n.next(t)
              };
              return r.addEventListener('load', l),
                     r.addEventListener('error', c),
                     e.reportProgress &&
                         (r.addEventListener('progress', d),
                          null !== s && r.upload &&
                              r.upload.addEventListener('progress', h)),
                     r.send(s), n.next({type: g.Sent}), function() {
                       r.removeEventListener('error', c),
                           r.removeEventListener('load', l),
                           e.reportProgress &&
                           (r.removeEventListener('progress', d),
                            null !== s && r.upload &&
                                r.upload.removeEventListener('progress', h)),
                           r.abort()
                     }
            })
          }, HttpXhrBackend
        }();
        D.decorators = [{type: i.Injectable}], D.ctorParameters = function() {
          return [{type: L}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var M = new i.InjectionToken('XSRF_COOKIE_NAME'),
            F = new i.InjectionToken('XSRF_HEADER_NAME'), R = function() {
              function HttpXsrfTokenExtractor() {}
              return HttpXsrfTokenExtractor.prototype.getToken = function() {},
                     HttpXsrfTokenExtractor
            }(), V = function() {
              function HttpXsrfCookieExtractor(e, t, n) {
                this.doc = e, this.platform = t, this.cookieName = n,
                this.lastCookieString = '', this.lastToken = null,
                this.parseCount = 0
              }
              return HttpXsrfCookieExtractor.prototype.getToken = function() {
                if ('server' === this.platform) return null;
                var e = this.doc.cookie || '';
                return e !== this.lastCookieString &&
                           (this.parseCount++,
                            this.lastToken = Object(l['ɵparseCookieValue'])(
                                e, this.cookieName),
                            this.lastCookieString = e),
                       this.lastToken
              }, HttpXsrfCookieExtractor
            }();
        V.decorators = [{type: i.Injectable}], V.ctorParameters = function() {
          return [
            {type: void 0, decorators: [{type: i.Inject, args: [l.DOCUMENT]}]},
            {
              type: void 0,
              decorators: [{type: i.Inject, args: [i.PLATFORM_ID]}]
            },
            {type: void 0, decorators: [{type: i.Inject, args: [M]}]}
          ]
        };
        var k = function() {
          function HttpXsrfInterceptor(e, t) {
            this.tokenService = e, this.headerName = t
          }
          return HttpXsrfInterceptor.prototype.intercept = function(e, t) {
            var n = e.url.toLowerCase();
            if ('GET' === e.method || 'HEAD' === e.method ||
                n.startsWith('http://') || n.startsWith('https://'))
              return t.handle(e);
            var r = this.tokenService.getToken();
            return null === r || e.headers.has(this.headerName) ||
                       (e = e.clone(
                            {headers: e.headers.set(this.headerName, r)})),
                   t.handle(e)
          }, HttpXsrfInterceptor
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function interceptingHandler(e, t) {
          return void 0 === t && (t = []), t ? t.reduceRight(function(e, t) {
            return new A(e, t)
          }, e) : e
        }
        function jsonpCallbackContext() {
          return 'object' == typeof window ? window : {}
        }
        k.decorators = [{type: i.Injectable}], k.ctorParameters = function() {
          return [
            {type: R}, {type: void 0, decorators: [{type: i.Inject, args: [F]}]}
          ]
        };
        var j = function() {
          function HttpClientXsrfModule() {}
          return HttpClientXsrfModule.disable = function() {
            return {
              ngModule: HttpClientXsrfModule,
                  providers: [{provide: k, useClass: w}]
            }
          }, HttpClientXsrfModule.withOptions = function(e) {
            return void 0 === e && (e = {}), {
              ngModule: HttpClientXsrfModule, providers: [
                e.cookieName ? {provide: M, useValue: e.cookieName} : [],
                e.headerName ? {provide: F, useValue: e.headerName} : []
              ]
            }
          }, HttpClientXsrfModule
        }();
        j.decorators = [{
          type: i.NgModule,
          args: [{
            providers: [
              k, {provide: T, useExisting: k, multi: !0},
              {provide: R, useClass: V}, {provide: M, useValue: 'XSRF-TOKEN'},
              {provide: F, useValue: 'X-XSRF-TOKEN'}
            ]
          }]
        }],
        j.ctorParameters = function() {
          return []
        };
        var H = function() {
          return function HttpClientModule() {}
        }();
        H.decorators = [{
          type: i.NgModule,
          args: [{
            imports: [j.withOptions(
                {cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN'})],
            providers: [
              C, {
                provide: p,
                useFactory: interceptingHandler,
                deps: [d, [new i.Optional, new i.Inject(T)]]
              },
              D, {provide: d, useExisting: D}, x, {provide: L, useExisting: x}
            ]
          }]
        }],
        H.ctorParameters = function() {
          return []
        };
        var B = function() {
          return function HttpClientJsonpModule() {}
        }();
        B.decorators = [{
          type: i.NgModule,
          args: [{
            providers: [
              O, {provide: P, useFactory: jsonpCallbackContext},
              {provide: T, useClass: I, multi: !0}
            ]
          }]
        }],
        B.ctorParameters = function() {
          return []
        }
      },
      234: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            n.d(t, 'AbstractControlDirective', function() {
              return l
            }), n.d(t, 'AbstractFormGroupDirective', function() {
              return R
            }), n.d(t, 'CheckboxControlValueAccessor', function() {
              return g
            }), n.d(t, 'ControlContainer', function() {
              return c
            }), n.d(t, 'NG_VALUE_ACCESSOR', function() {
              return f
            }), n.d(t, 'COMPOSITION_BUFFER_MODE', function() {
              return b
            }), n.d(t, 'DefaultValueAccessor', function() {
              return _
            }), n.d(t, 'NgControl', function() {
              return A
            }), n.d(t, 'NgControlStatus', function() {
              return j
            }), n.d(t, 'NgControlStatusGroup', function() {
              return H
            }), n.d(t, 'NgForm', function() {
              return K
            }), n.d(t, 'NgModel', function() {
              return ie
            }), n.d(t, 'NgModelGroup', function() {
              return te
            }), n.d(t, 'RadioControlValueAccessor', function() {
              return E
            }), n.d(t, 'FormControlDirective', function() {
              return ae
            }), n.d(t, 'FormControlName', function() {
              return fe
            }), n.d(t, 'FormGroupDirective', function() {
              return le
            }), n.d(t, 'FormArrayName', function() {
              return he
            }), n.d(t, 'FormGroupName', function() {
              return pe
            }), n.d(t, 'NgSelectOption', function() {
              return L
            }), n.d(t, 'SelectControlValueAccessor', function() {
              return N
            }), n.d(t, 'SelectMultipleControlValueAccessor', function() {
              return D
            }), n.d(t, 'CheckboxRequiredValidator', function() {
              return be
            }), n.d(t, 'EmailValidator', function() {
              return Se
            }), n.d(t, 'MaxLengthValidator', function() {
              return we
            }), n.d(t, 'MinLengthValidator', function() {
              return Ae
            }), n.d(t, 'PatternValidator', function() {
              return Pe
            }), n.d(t, 'RequiredValidator', function() {
              return ve
            }), n.d(t, 'FormBuilder', function() {
              return Oe
            }), n.d(t, 'AbstractControl', function() {
              return B
            }), n.d(t, 'FormArray', function() {
              return q
            }), n.d(t, 'FormControl', function() {
              return G
            }), n.d(t, 'FormGroup', function() {
              return U
            }), n.d(t, 'NG_ASYNC_VALIDATORS', function() {
              return d
            }), n.d(t, 'NG_VALIDATORS', function() {
              return p
            }), n.d(t, 'Validators', function() {
              return m
            }), n.d(t, 'VERSION', function() {
              return Ie
            }), n.d(t, 'FormsModule', function() {
              return Fe
            }), n.d(t, 'ReactiveFormsModule', function() {
              return Re
            }), n.d(t, 'ɵba', function() {
              return Me
            }), n.d(t, 'ɵz', function() {
              return De
            }), n.d(t, 'ɵx', function() {
              return Le
            }), n.d(t, 'ɵy', function() {
              return xe
            }), n.d(t, 'ɵa', function() {
              return y
            }), n.d(t, 'ɵb', function() {
              return v
            }), n.d(t, 'ɵc', function() {
              return V
            }), n.d(t, 'ɵd', function() {
              return k
            }), n.d(t, 'ɵe', function() {
              return W
            }), n.d(t, 'ɵf', function() {
              return ne
            }), n.d(t, 'ɵg', function() {
              return ee
            }), n.d(t, 'ɵbf', function() {
              return Ne
            }), n.d(t, 'ɵbb', function() {
              return S
            }), n.d(t, 'ɵbc', function() {
              return C
            }), n.d(t, 'ɵh', function() {
              return T
            }), n.d(t, 'ɵi', function() {
              return w
            }), n.d(t, 'ɵbd', function() {
              return P
            }), n.d(t, 'ɵbe', function() {
              return O
            }), n.d(t, 'ɵj', function() {
              return se
            }), n.d(t, 'ɵk', function() {
              return me
            }), n.d(t, 'ɵl', function() {
              return ue
            }), n.d(t, 'ɵn', function() {
              return de
            }), n.d(t, 'ɵm', function() {
              return ce
            }), n.d(t, 'ɵo', function() {
              return I
            }), n.d(t, 'ɵq', function() {
              return M
            }), n.d(t, 'ɵp', function() {
              return x
            }), n.d(t, 'ɵs', function() {
              return ge
            }), n.d(t, 'ɵt', function() {
              return _e
            }), n.d(t, 'ɵv', function() {
              return Te
            }), n.d(t, 'ɵu', function() {
              return Ce
            }), n.d(t, 'ɵw', function() {
              return Ee
            }), n.d(t, 'ɵr', function() {
              return ye
            });
        var r = n(16), i = n(2), o = n(126), s = (n.n(o), n(80)),
            a = (n.n(s), n(57)), u = (n.n(a), n(27)), l = function() {
              function AbstractControlDirective() {}
              return AbstractControlDirective
                         .prototype.control = function() {},
 Object.defineProperty(AbstractControlDirective.prototype, 'value', {
   get: function() {
     return this.control ? this.control.value : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'valid', {
   get: function() {
     return this.control ? this.control.valid : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'invalid', {
   get: function() {
     return this.control ? this.control.invalid : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'pending', {
   get: function() {
     return this.control ? this.control.pending : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'disabled', {
   get: function() {
     return this.control ? this.control.disabled : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'enabled', {
   get: function() {
     return this.control ? this.control.enabled : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'errors', {
   get: function() {
     return this.control ? this.control.errors : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'pristine', {
   get: function() {
     return this.control ? this.control.pristine : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'dirty', {
   get: function() {
     return this.control ? this.control.dirty : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'touched', {
   get: function() {
     return this.control ? this.control.touched : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'untouched', {
   get: function() {
     return this.control ? this.control.untouched : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'statusChanges', {
   get: function() {
     return this.control ? this.control.statusChanges : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'valueChanges', {
   get: function() {
     return this.control ? this.control.valueChanges : null
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(AbstractControlDirective.prototype, 'path', {
   get: function() {
     return null
   },
   enumerable: !0,
   configurable: !0
 }),
 AbstractControlDirective.prototype.reset = function(e) {
   void 0 === e && (e = void 0), this.control && this.control.reset(e)
 }, AbstractControlDirective.prototype.hasError = function(e, t) {
   return !!this.control && this.control.hasError(e, t)
 }, AbstractControlDirective.prototype.getError = function(e, t) {
   return this.control ? this.control.getError(e, t) : null
 }, AbstractControlDirective
            }(), c = function(e) {
              function ControlContainer() {
                return null !== e && e.apply(this, arguments) || this
              }
              return r.a(ControlContainer, e),
                     Object.defineProperty(
                         ControlContainer.prototype, 'formDirective', {
                           get: function() {
                             return null
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(ControlContainer.prototype, 'path', {
                       get: function() {
                         return null
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     ControlContainer
            }(l);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function isEmptyInputValue(e) {
          return null == e || 0 === e.length
        }
        var p = new i.InjectionToken('NgValidators'),
            d = new i.InjectionToken('NgAsyncValidators'),
            h = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            m = function() {
              function Validators() {}
              return Validators.min = function(e) {
                return function(t) {
                  if (isEmptyInputValue(t.value) || isEmptyInputValue(e))
                    return null;
                  var n = parseFloat(t.value);
                  return !isNaN(n) && n < e ? {min: {min: e, actual: t.value}} :
                                              null
                }
              }, Validators.max = function(e) {
                return function(t) {
                  if (isEmptyInputValue(t.value) || isEmptyInputValue(e))
                    return null;
                  var n = parseFloat(t.value);
                  return !isNaN(n) && n > e ? {max: {max: e, actual: t.value}} :
                                              null
                }
              }, Validators.required = function(e) {
                return isEmptyInputValue(e.value) ? {required: !0} : null
              }, Validators.requiredTrue = function(e) {
                return !0 === e.value ? null : {required: !0}
              }, Validators.email = function(e) {
                return h.test(e.value) ? null : {email: !0}
              }, Validators.minLength = function(e) {
                return function(t) {
                  if (isEmptyInputValue(t.value)) return null;
                  var n = t.value ? t.value.length : 0;
                  return n < e ?
                      {minlength: {requiredLength: e, actualLength: n}} :
                      null
                }
              }, Validators.maxLength = function(e) {
                return function(t) {
                  var n = t.value ? t.value.length : 0;
                  return n > e ?
                      {maxlength: {requiredLength: e, actualLength: n}} :
                      null
                }
              }, Validators.pattern = function(e) {
                return e ?
                    ('string' == typeof e ?
                         (n = '^' + e + '$', t = new RegExp(n)) :
                         (n = e.toString(), t = e),
                     function(e) {
                       if (isEmptyInputValue(e.value)) return null;
                       var r = e.value;
                       return t.test(r) ?
                           null :
                           {pattern: {requiredPattern: n, actualValue: r}}
                     }) :
                    Validators.nullValidator;
                var t, n
              }, Validators.nullValidator = function(e) {
                return null
              }, Validators.compose = function(e) {
                if (!e) return null;
                var t = e.filter(isPresent);
                return 0 == t.length ? null : function(e) {
                  return _mergeErrors(function _executeValidators(e, t) {
                    return t.map(function(t) {
                      return t(e)
                    })
                  }(e, t))
                }
              }, Validators.composeAsync = function(e) {
                if (!e) return null;
                var t = e.filter(isPresent);
                return 0 == t.length ? null : function(e) {
                  var n = function _executeAsyncValidators(e, t) {
                    return t.map(function(t) {
                      return t(e)
                    })
                  }(e, t).map(toObservable);
                  return a.map.call(Object(o.forkJoin)(n), _mergeErrors)
                }
              }, Validators
            }();
        function isPresent(e) {
          return null != e
        }
        function toObservable(e) {
          var t = Object(i['ɵisPromise'])(e) ? Object(s.fromPromise)(e) : e;
          if (!Object(i['ɵisObservable'])(t))
            throw new Error(
                'Expected validator to return Promise or Observable.');
          return t
        }
        function _mergeErrors(e) {
          var t = e.reduce(function(e, t) {
            return null != t ? Object.assign({}, e, t) : e
          }, {});
          return 0 === Object.keys(t).length ? null : t
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var f = new i.InjectionToken('NgValueAccessor'),
            y = {
              provide: f,
              useExisting: Object(i.forwardRef)(function() {
                return g
              }),
              multi: !0
            },
            g = function() {
              function CheckboxControlValueAccessor(e, t) {
                this._renderer = e, this._elementRef = t,
                this.onChange = function(e) {}, this.onTouched = function() {}
              }
              return CheckboxControlValueAccessor.prototype.writeValue =
                         function(e) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement, 'checked', e)
              },
                     CheckboxControlValueAccessor.prototype.registerOnChange =
                         function(e) {
                       this.onChange = e
                     },
                     CheckboxControlValueAccessor.prototype.registerOnTouched =
                         function(e) {
                       this.onTouched = e
                     },
                     CheckboxControlValueAccessor.prototype.setDisabledState =
                         function(e) {
                       this._renderer.setProperty(
                           this._elementRef.nativeElement, 'disabled', e)
                     },
                     CheckboxControlValueAccessor
            }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        g.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [y]
          }]
        }],
        g.ctorParameters = function() {
          return [{type: i.Renderer2}, {type: i.ElementRef}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var v = {
          provide: f,
          useExisting: Object(i.forwardRef)(function() {
            return _
          }),
          multi: !0
        };
        var b = new i.InjectionToken('CompositionEventMode'), _ = function() {
          function DefaultValueAccessor(e, t, n) {
            this._renderer = e, this._elementRef = t, this._compositionMode = n,
            this.onChange = function(e) {}, this.onTouched = function() {},
            this._composing = !1,
            null == this._compositionMode &&
                (this._compositionMode = !function _isAndroid() {
                  var e = Object(u['ɵgetDOM'])() ?
                      Object(u['ɵgetDOM'])().getUserAgent() :
                      '';
                  return /android (\d+)/.test(e.toLowerCase())
                }())
          }
          return DefaultValueAccessor.prototype.writeValue = function(e) {
            var t = null == e ? '' : e;
            this._renderer.setProperty(
                this._elementRef.nativeElement, 'value', t)
          }, DefaultValueAccessor.prototype.registerOnChange = function(e) {
            this.onChange = e
          }, DefaultValueAccessor.prototype.registerOnTouched = function(e) {
            this.onTouched = e
          }, DefaultValueAccessor.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(
                this._elementRef.nativeElement, 'disabled', e)
          }, DefaultValueAccessor.prototype._handleInput = function(e) {
            (!this._compositionMode ||
             this._compositionMode && !this._composing) &&
                this.onChange(e)
          }, DefaultValueAccessor.prototype._compositionStart = function() {
            this._composing = !0
          }, DefaultValueAccessor.prototype._compositionEnd = function(e) {
            this._composing = !1, this._compositionMode && this.onChange(e)
          }, DefaultValueAccessor
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function normalizeValidator(e) {
          return e.validate ? function(t) {
            return e.validate(t)
          } : e
        }
        function normalizeAsyncValidator(e) {
          return e.validate ? function(t) {
            return e.validate(t)
          } : e
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        _.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            host: {
              '(input)': '_handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '_compositionStart()',
              '(compositionend)': '_compositionEnd($event.target.value)'
            },
            providers: [v]
          }]
        }],
        _.ctorParameters = function() {
          return [
            {type: i.Renderer2}, {type: i.ElementRef}, {
              type: void 0,
              decorators: [{type: i.Optional}, {type: i.Inject, args: [b]}]
            }
          ]
        };
        var S = {
          provide: f,
          useExisting: Object(i.forwardRef)(function() {
            return C
          }),
          multi: !0
        },
            C = function() {
              function NumberValueAccessor(e, t) {
                this._renderer = e, this._elementRef = t,
                this.onChange = function(e) {}, this.onTouched = function() {}
              }
              return NumberValueAccessor.prototype.writeValue = function(e) {
                var t = null == e ? '' : e;
                this._renderer.setProperty(
                    this._elementRef.nativeElement, 'value', t)
              }, NumberValueAccessor.prototype.registerOnChange = function(e) {
                this.onChange = function(t) {
                  e('' == t ? null : parseFloat(t))
                }
              }, NumberValueAccessor.prototype.registerOnTouched = function(e) {
                this.onTouched = e
              }, NumberValueAccessor.prototype.setDisabledState = function(e) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement, 'disabled', e)
              }, NumberValueAccessor
            }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function unimplemented() {
          throw new Error('unimplemented')
        }
        C.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [S]
          }]
        }],
        C.ctorParameters = function() {
          return [{type: i.Renderer2}, {type: i.ElementRef}]
        };
        var A =
                function(e) {
          function NgControl() {
            var t = e.apply(this, arguments) || this;
            return t._parent = null, t.name = null, t.valueAccessor = null,
                   t._rawValidators = [], t._rawAsyncValidators = [], t
          }
          return r.a(NgControl, e),
                 Object.defineProperty(NgControl.prototype, 'validator', {
                   get: function() {
                     return unimplemented()
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(NgControl.prototype, 'asyncValidator', {
                   get: function() {
                     return unimplemented()
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 NgControl.prototype.viewToModelUpdate = function(e) {},
                 NgControl
        }(l),
            T = {
              provide: f,
              useExisting: Object(i.forwardRef)(function() {
                return E
              }),
              multi: !0
            },
            w = function() {
              function RadioControlRegistry() {
                this._accessors = []
              }
              return RadioControlRegistry.prototype.add = function(e, t) {
                this._accessors.push([e, t])
              }, RadioControlRegistry.prototype.remove = function(e) {
                for (var t = this._accessors.length - 1; t >= 0; --t)
                  if (this._accessors[t][1] === e)
                    return void this._accessors.splice(t, 1)
              }, RadioControlRegistry.prototype.select = function(e) {
                var t = this;
                this._accessors.forEach(function(n) {
                  t._isSameGroup(n, e) && n[1] !== e &&
                      n[1].fireUncheck(e.value)
                })
              }, RadioControlRegistry.prototype._isSameGroup = function(e, t) {
                return !!e[0].control &&
                    (e[0]._parent === t._control._parent &&
                     e[1].name === t.name)
              }, RadioControlRegistry
            }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        w.decorators = [{type: i.Injectable}],
        w.ctorParameters = function() {
          return []
        };
        var E = function() {
          function RadioControlValueAccessor(e, t, n, r) {
            this._renderer = e, this._elementRef = t, this._registry = n,
            this._injector = r, this.onChange = function() {},
            this.onTouched = function() {}
          }
          return RadioControlValueAccessor.prototype
                     .ngOnInit =
                     function() {
            this._control = this._injector.get(A), this._checkName(),
            this._registry.add(this._control, this)
          },
           RadioControlValueAccessor.prototype.ngOnDestroy =
                     function() {
             this._registry.remove(this)
           },
           RadioControlValueAccessor.prototype.writeValue =
                     function(e) {
             this._state = e === this.value,
             this._renderer.setProperty(
                 this._elementRef.nativeElement, 'checked', this._state)
           },
           RadioControlValueAccessor.prototype.registerOnChange =
                     function(e) {
             var t = this;
             this._fn = e, this.onChange = function() {
               e(t.value), t._registry.select(t)
             }
           },
           RadioControlValueAccessor.prototype.fireUncheck =
                     function(e) {
             this.writeValue(e)
           },
           RadioControlValueAccessor.prototype.registerOnTouched =
                     function(e) {
             this.onTouched = e
           },
           RadioControlValueAccessor.prototype.setDisabledState = function(e) {
             this._renderer.setProperty(
                 this._elementRef.nativeElement, 'disabled', e)
           }, RadioControlValueAccessor.prototype._checkName = function() {
             this.name && this.formControlName &&
                 this.name !== this.formControlName && this._throwNameError(),
                 !this.name && this.formControlName &&
                 (this.name = this.formControlName)
           }, RadioControlValueAccessor.prototype._throwNameError = function() {
             throw new Error(
                 '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
           }, RadioControlValueAccessor
        }();
        E.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {'(change)': 'onChange()', '(blur)': 'onTouched()'},
            providers: [T]
          }]
        }],
        E.ctorParameters = function() {
          return [
            {type: i.Renderer2}, {type: i.ElementRef}, {type: w},
            {type: i.Injector}
          ]
        }, E.propDecorators = {
          name: [{type: i.Input}],
          formControlName: [{type: i.Input}],
          value: [{type: i.Input}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var P = {
          provide: f,
          useExisting: Object(i.forwardRef)(function() {
            return O
          }),
          multi: !0
        },
            O = function() {
              function RangeValueAccessor(e, t) {
                this._renderer = e, this._elementRef = t,
                this.onChange = function(e) {}, this.onTouched = function() {}
              }
              return RangeValueAccessor.prototype.writeValue = function(e) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement, 'value', parseFloat(e))
              }, RangeValueAccessor.prototype.registerOnChange = function(e) {
                this.onChange = function(t) {
                  e('' == t ? null : parseFloat(t))
                }
              }, RangeValueAccessor.prototype.registerOnTouched = function(e) {
                this.onTouched = e
              }, RangeValueAccessor.prototype.setDisabledState = function(e) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement, 'disabled', e)
              }, RangeValueAccessor
            }();
        O.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [P]
          }]
        }],
        O.ctorParameters = function() {
          return [{type: i.Renderer2}, {type: i.ElementRef}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var I = {
          provide: f,
          useExisting: Object(i.forwardRef)(function() {
            return N
          }),
          multi: !0
        };
        function _buildValueString(e, t) {
          return null == e ? '' + t :
                             (t && 'object' == typeof t && (t = 'Object'),
                              (e + ': ' + t).slice(0, 50))
        }
        var N = function() {
          function SelectControlValueAccessor(e, t) {
            this._renderer = e, this._elementRef = t, this._optionMap = new Map,
            this._idCounter = 0, this.onChange = function(e) {},
            this.onTouched = function() {},
            this._compareWith = i['ɵlooseIdentical']
          }
          return Object.defineProperty(
                     SelectControlValueAccessor.prototype, 'compareWith', {
                       set: function(e) {
                         if ('function' != typeof e)
                           throw new Error(
                               'compareWith must be a function, but received ' +
                               JSON.stringify(e));
                         this._compareWith = e
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 SelectControlValueAccessor.prototype.writeValue =
                     function(e) {
                   this.value = e;
                   var t = this._getOptionId(e);
                   null == t &&
                       this._renderer.setProperty(
                           this._elementRef.nativeElement, 'selectedIndex', -1);
                   var n = _buildValueString(t, e);
                   this._renderer.setProperty(
                       this._elementRef.nativeElement, 'value', n)
                 },
                 SelectControlValueAccessor.prototype.registerOnChange =
                     function(e) {
                   var t = this;
                   this.onChange = function(n) {
                     t.value = t._getOptionValue(n), e(t.value)
                   }
                 },
                 SelectControlValueAccessor.prototype.registerOnTouched =
                     function(e) {
                   this.onTouched = e
                 },
                 SelectControlValueAccessor.prototype.setDisabledState =
                     function(e) {
                   this._renderer.setProperty(
                       this._elementRef.nativeElement, 'disabled', e)
                 },
                 SelectControlValueAccessor.prototype._registerOption =
                     function() {
                   return (this._idCounter++).toString()
                 },
                 SelectControlValueAccessor.prototype._getOptionId =
                     function(e) {
                   for (var t = 0, n = Array.from(this._optionMap.keys());
                        t < n.length; t++) {
                     var r = n[t];
                     if (this._compareWith(this._optionMap.get(r), e)) return r
                   }
                   return null
                 },
                 SelectControlValueAccessor.prototype._getOptionValue =
                     function(e) {
                   var t = function _extractId(e) {
                     return e.split(':')[0]
                   }(e);
                   return this._optionMap.has(t) ? this._optionMap.get(t) : e
                 },
                 SelectControlValueAccessor
        }();
        N.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [I]
          }]
        }],
        N.ctorParameters = function() {
          return [{type: i.Renderer2}, {type: i.ElementRef}]
        }, N.propDecorators = {compareWith: [{type: i.Input}]};
        var L = function() {
          function NgSelectOption(e, t, n) {
            this._element = e, this._renderer = t, this._select = n,
            this._select && (this.id = this._select._registerOption())
          }
          return Object.defineProperty(NgSelectOption.prototype, 'ngValue', {
            set: function(e) {
              null != this._select &&
                  (this._select._optionMap.set(this.id, e),
                   this._setElementValue(_buildValueString(this.id, e)),
                   this._select.writeValue(this._select.value))
            },
            enumerable: !0,
            configurable: !0
          }),
                 Object.defineProperty(NgSelectOption.prototype, 'value', {
                   set: function(e) {
                     this._setElementValue(e),
                         this._select &&
                         this._select.writeValue(this._select.value)
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 NgSelectOption.prototype._setElementValue = function(e) {
                   this._renderer.setProperty(
                       this._element.nativeElement, 'value', e)
                 }, NgSelectOption.prototype.ngOnDestroy = function() {
                   this._select &&
                       (this._select._optionMap.delete(this.id),
                        this._select.writeValue(this._select.value))
                 }, NgSelectOption
        }();
        L.decorators = [{type: i.Directive, args: [{selector: 'option'}]}],
        L.ctorParameters = function() {
          return [
            {type: i.ElementRef}, {type: i.Renderer2},
            {type: N, decorators: [{type: i.Optional}, {type: i.Host}]}
          ]
        }, L.propDecorators = {
          ngValue: [{type: i.Input, args: ['ngValue']}],
          value: [{type: i.Input, args: ['value']}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var x = {
          provide: f,
          useExisting: Object(i.forwardRef)(function() {
            return D
          }),
          multi: !0
        };
        function _buildValueString$1(e, t) {
          return null == e ? '' + t :
                             ('string' == typeof t && (t = '\'' + t + '\''),
                              t && 'object' == typeof t && (t = 'Object'),
                              (e + ': ' + t).slice(0, 50))
        }
        var D = function() {
          function SelectMultipleControlValueAccessor(e, t) {
            this._renderer = e, this._elementRef = t, this._optionMap = new Map,
            this._idCounter = 0, this.onChange = function(e) {},
            this.onTouched = function() {},
            this._compareWith = i['ɵlooseIdentical']
          }
          return Object.defineProperty(
                     SelectMultipleControlValueAccessor.prototype,
                     'compareWith', {
                       set: function(e) {
                         if ('function' != typeof e)
                           throw new Error(
                               'compareWith must be a function, but received ' +
                               JSON.stringify(e));
                         this._compareWith = e
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 SelectMultipleControlValueAccessor.prototype
                     .writeValue =
                     function(e) {
                   var t, n = this;
                   if (this.value = e, Array.isArray(e)) {
                     var r = e.map(function(e) {
                       return n._getOptionId(e)
                     });
                     t = function(e, t) {
                       e._setSelected(r.indexOf(t.toString()) > -1)
                     }
                   } else
                     t = function(e, t) {
                       e._setSelected(!1)
                     };
                   this._optionMap.forEach(t)
                 },
           SelectMultipleControlValueAccessor.prototype.registerOnChange =
                     function(e) {
             var t = this;
             this.onChange = function(n) {
               var r = [];
               if (n.hasOwnProperty('selectedOptions'))
                 for (var i = n.selectedOptions, o = 0; o < i.length; o++) {
                   var s = i.item(o), a = t._getOptionValue(s.value);
                   r.push(a)
                 }
               else
                 for (i = n.options, o = 0; o < i.length; o++) {
                   if ((s = i.item(o)).selected) {
                     a = t._getOptionValue(s.value);
                     r.push(a)
                   }
                 }
               t.value = r, e(r)
             }
           },
           SelectMultipleControlValueAccessor.prototype.registerOnTouched =
                     function(e) {
             this.onTouched = e
           },
           SelectMultipleControlValueAccessor.prototype.setDisabledState =
                     function(e) {
             this._renderer.setProperty(
                 this._elementRef.nativeElement, 'disabled', e)
           },
           SelectMultipleControlValueAccessor.prototype._registerOption =
                     function(e) {
             var t = (this._idCounter++).toString();
             return this._optionMap.set(t, e), t
           },
           SelectMultipleControlValueAccessor.prototype._getOptionId =
                     function(e) {
             for (var t = 0, n = Array.from(this._optionMap.keys());
                  t < n.length; t++) {
               var r = n[t];
               if (this._compareWith(this._optionMap.get(r)._value, e)) return r
             }
             return null
           },
           SelectMultipleControlValueAccessor.prototype._getOptionValue =
                     function(e) {
             var t = function _extractId$1(e) {
               return e.split(':')[0]
             }(e);
             return this._optionMap.has(t) ? this._optionMap.get(t)._value : e
           },
           SelectMultipleControlValueAccessor
        }();
        D.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [x]
          }]
        }],
        D.ctorParameters = function() {
          return [{type: i.Renderer2}, {type: i.ElementRef}]
        }, D.propDecorators = {compareWith: [{type: i.Input}]};
        var M = function() {
          function NgSelectMultipleOption(e, t, n) {
            this._element = e, this._renderer = t, this._select = n,
            this._select && (this.id = this._select._registerOption(this))
          }
          return Object.defineProperty(
                     NgSelectMultipleOption.prototype, 'ngValue', {
                       set: function(e) {
                         null != this._select &&
                             (this._value = e,
                              this._setElementValue(
                                  _buildValueString$1(this.id, e)),
                              this._select.writeValue(this._select.value))
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     NgSelectMultipleOption.prototype, 'value', {
                       set: function(e) {
                         this._select ?
                             (this._value = e,
                              this._setElementValue(
                                  _buildValueString$1(this.id, e)),
                              this._select.writeValue(this._select.value)) :
                             this._setElementValue(e)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 NgSelectMultipleOption.prototype._setElementValue =
                     function(e) {
                   this._renderer.setProperty(
                       this._element.nativeElement, 'value', e)
                 },
                 NgSelectMultipleOption.prototype._setSelected = function(e) {
                   this._renderer.setProperty(
                       this._element.nativeElement, 'selected', e)
                 }, NgSelectMultipleOption.prototype.ngOnDestroy = function() {
                   this._select &&
                       (this._select._optionMap.delete(this.id),
                        this._select.writeValue(this._select.value))
                 }, NgSelectMultipleOption
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function controlPath(e, t) {
          return t.path.concat([e])
        }
        function setUpControl(e, t) {
          e || _throwError(t, 'Cannot find control with'),
              t.valueAccessor ||
              _throwError(t, 'No value accessor for form control with'),
              e.validator = m.compose([e.validator, t.validator]),
              e.asyncValidator =
                  m.composeAsync([e.asyncValidator, t.asyncValidator]),
              t.valueAccessor.writeValue(e.value),
              t.valueAccessor.registerOnChange(function(n) {
                t.viewToModelUpdate(n), e.markAsDirty(),
                    e.setValue(n, {emitModelToViewChange: !1})
              }),
              t.valueAccessor.registerOnTouched(function() {
                return e.markAsTouched()
              }),
              e.registerOnChange(function(e, n) {
                t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e)
              }),
              t.valueAccessor.setDisabledState &&
              e.registerOnDisabledChange(function(e) {
                t.valueAccessor.setDisabledState(e)
              }),
              t._rawValidators.forEach(function(t) {
                t.registerOnValidatorChange &&
                    t.registerOnValidatorChange(function() {
                      return e.updateValueAndValidity()
                    })
              }),
              t._rawAsyncValidators.forEach(function(t) {
                t.registerOnValidatorChange &&
                    t.registerOnValidatorChange(function() {
                      return e.updateValueAndValidity()
                    })
              })
        }
        function setUpFormContainer(e, t) {
          null == e && _throwError(t, 'Cannot find control with'),
              e.validator = m.compose([e.validator, t.validator]),
              e.asyncValidator =
                  m.composeAsync([e.asyncValidator, t.asyncValidator])
        }
        function _noControlError(e) {
          return _throwError(
              e,
              'There is no FormControl instance attached to form control element with')
        }
        function _throwError(e, t) {
          var n;
          throw n = e.path.length > 1 ?
              'path: \'' + e.path.join(' -> ') + '\'' :
              e.path[0] ? 'name: \'' + e.path + '\'' :
                          'unspecified name attribute',
                new Error(t + ' ' + n)
        }
        function composeValidators(e) {
          return null != e ? m.compose(e.map(normalizeValidator)) : null
        }
        function composeAsyncValidators(e) {
          return null != e ? m.composeAsync(e.map(normalizeAsyncValidator)) :
                             null
        }
        function isPropertyUpdated(e, t) {
          if (!e.hasOwnProperty('model')) return !1;
          var n = e.model;
          return !!n.isFirstChange() ||
              !Object(i['ɵlooseIdentical'])(t, n.currentValue)
        }
        M.decorators = [{type: i.Directive, args: [{selector: 'option'}]}],
        M.ctorParameters = function() {
          return [
            {type: i.ElementRef}, {type: i.Renderer2},
            {type: D, decorators: [{type: i.Optional}, {type: i.Host}]}
          ]
        }, M.propDecorators = {
          ngValue: [{type: i.Input, args: ['ngValue']}],
          value: [{type: i.Input, args: ['value']}]
        };
        var F = [g, O, C, N, D, E];
        function selectValueAccessor(e, t) {
          if (!t) return null;
          var n = void 0, r = void 0, i = void 0;
          return t.forEach(function(t) {
            t.constructor === _ ?
                n = t :
                !function isBuiltInAccessor(e) {
                  return F.some(function(t) {
                    return e.constructor === t
                  })
                }(t) ?
                (i &&
                     _throwError(
                         e,
                         'More than one custom value accessor matches form control with'),
                 i = t) :
                (r &&
                     _throwError(
                         e,
                         'More than one built-in value accessor matches form control with'),
                 r = t)
          }),
                 i ||
                     (r ||
                      (n ||
                       (_throwError(
                            e, 'No valid value accessor for form control with'),
                        null)))
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var R =
                function(e) {
          function AbstractFormGroupDirective() {
            return null !== e && e.apply(this, arguments) || this
          }
          return r.a(AbstractFormGroupDirective, e),
                 AbstractFormGroupDirective.prototype.ngOnInit =
                     function() {
                   this._checkParentType(),
                       this.formDirective.addFormGroup(this)
                 },
                 AbstractFormGroupDirective.prototype.ngOnDestroy =
                     function() {
                   this.formDirective &&
                       this.formDirective.removeFormGroup(this)
                 },
                 Object.defineProperty(
                     AbstractFormGroupDirective.prototype, 'control', {
                       get: function() {
                         return this.formDirective.getFormGroup(this)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     AbstractFormGroupDirective.prototype, 'path', {
                       get: function() {
                         return controlPath(this.name, this._parent)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     AbstractFormGroupDirective.prototype, 'formDirective', {
                       get: function() {
                         return this._parent ? this._parent.formDirective : null
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     AbstractFormGroupDirective.prototype, 'validator', {
                       get: function() {
                         return composeValidators(this._validators)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     AbstractFormGroupDirective.prototype, 'asyncValidator', {
                       get: function() {
                         return composeAsyncValidators(this._asyncValidators)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 AbstractFormGroupDirective.prototype._checkParentType =
                     function() {},
                 AbstractFormGroupDirective
        }(c),
            V =
                function() {
              function AbstractControlStatus(e) {
                this._cd = e
              }
              return Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassUntouched', {
                           get: function() {
                             return !!this._cd.control &&
                                 this._cd.control.untouched
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassTouched', {
                           get: function() {
                             return !!this._cd.control &&
                                 this._cd.control.touched
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassPristine', {
                           get: function() {
                             return !!this._cd.control &&
                                 this._cd.control.pristine
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassDirty', {
                           get: function() {
                             return !!this._cd.control && this._cd.control.dirty
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassValid', {
                           get: function() {
                             return !!this._cd.control && this._cd.control.valid
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassInvalid', {
                           get: function() {
                             return !!this._cd.control &&
                                 this._cd.control.invalid
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         AbstractControlStatus.prototype, 'ngClassPending', {
                           get: function() {
                             return !!this._cd.control &&
                                 this._cd.control.pending
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     AbstractControlStatus
            }(),
            k = {
              '[class.ng-untouched]': 'ngClassUntouched',
              '[class.ng-touched]': 'ngClassTouched',
              '[class.ng-pristine]': 'ngClassPristine',
              '[class.ng-dirty]': 'ngClassDirty',
              '[class.ng-valid]': 'ngClassValid',
              '[class.ng-invalid]': 'ngClassInvalid',
              '[class.ng-pending]': 'ngClassPending'
            },
            j = function(e) {
              function NgControlStatus(t) {
                return e.call(this, t) || this
              }
              return r.a(NgControlStatus, e), NgControlStatus
            }(V);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        j.decorators = [{
          type: i.Directive,
          args:
              [{selector: '[formControlName],[ngModel],[formControl]', host: k}]
        }],
        j.ctorParameters = function() {
          return [{type: A, decorators: [{type: i.Self}]}]
        };
        var H = function(e) {
          function NgControlStatusGroup(t) {
            return e.call(this, t) || this
          }
          return r.a(NgControlStatusGroup, e), NgControlStatusGroup
        }(V);
        H.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: k
          }]
        }],
        H.ctorParameters = function() {
          return [{type: c, decorators: [{type: i.Self}]}]
        };
        function coerceToValidator(e) {
          return Array.isArray(e) ? composeValidators(e) : e || null
        }
        function coerceToAsyncValidator(e) {
          return Array.isArray(e) ? composeAsyncValidators(e) : e || null
        }
        var B =
                function() {
          function AbstractControl(e, t) {
            this.validator = e, this.asyncValidator = t,
            this._onCollectionChange = function() {}, this._pristine = !0,
            this._touched = !1, this._onDisabledChange = []
          }
          return Object.defineProperty(AbstractControl.prototype, 'value', {
            get: function() {
              return this._value
            },
            enumerable: !0,
            configurable: !0
          }),
                 Object.defineProperty(AbstractControl.prototype, 'parent', {
                   get: function() {
                     return this._parent
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'status', {
                   get: function() {
                     return this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'valid', {
                   get: function() {
                     return 'VALID' === this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'invalid', {
                   get: function() {
                     return 'INVALID' === this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'pending', {
                   get: function() {
                     return 'PENDING' == this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'disabled', {
                   get: function() {
                     return 'DISABLED' === this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'enabled', {
                   get: function() {
                     return 'DISABLED' !== this._status
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'errors', {
                   get: function() {
                     return this._errors
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'pristine', {
                   get: function() {
                     return this._pristine
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'dirty', {
                   get: function() {
                     return !this.pristine
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'touched', {
                   get: function() {
                     return this._touched
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(AbstractControl.prototype, 'untouched', {
                   get: function() {
                     return !this._touched
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(
                     AbstractControl.prototype, 'valueChanges', {
                       get: function() {
                         return this._valueChanges
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     AbstractControl.prototype, 'statusChanges', {
                       get: function() {
                         return this._statusChanges
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 AbstractControl
                     .prototype.setValidators =
                     function(e) {
                   this.validator = coerceToValidator(e)
                 },
      AbstractControl.prototype.setAsyncValidators =
                     function(e) {
        this.asyncValidator = coerceToAsyncValidator(e)
      },
      AbstractControl.prototype.clearValidators =
                     function() {
        this.validator = null
      },
      AbstractControl.prototype.clearAsyncValidators =
                     function() {
        this.asyncValidator = null
      },
      AbstractControl.prototype.markAsTouched =
                     function(e) {
        void 0 === e && (e = {}),
            this._touched = !0,
            this._parent && !e.onlySelf && this._parent.markAsTouched(e)
      },
      AbstractControl.prototype.markAsUntouched =
                     function(e) {
        void 0 === e && (e = {}),
            this._touched = !1, this._forEachChild(function(e) {
              e.markAsUntouched({onlySelf: !0})
            }),
            this._parent && !e.onlySelf && this._parent._updateTouched(e)
      },
      AbstractControl.prototype.markAsDirty =
                     function(e) {
        void 0 === e && (e = {}),
            this._pristine = !1,
            this._parent && !e.onlySelf && this._parent.markAsDirty(e)
      },
      AbstractControl.prototype.markAsPristine =
                     function(e) {
        void 0 === e && (e = {}),
            this._pristine = !0, this._forEachChild(function(e) {
              e.markAsPristine({onlySelf: !0})
            }),
            this._parent && !e.onlySelf && this._parent._updatePristine(e)
      },
      AbstractControl.prototype.markAsPending =
                     function(e) {
        void 0 === e && (e = {}),
            this._status = 'PENDING',
            this._parent && !e.onlySelf && this._parent.markAsPending(e)
      },
      AbstractControl.prototype.disable =
                     function(e) {
        void 0 === e && (e = {}), this._status = 'DISABLED',
                                  this._errors = null,
                                  this._forEachChild(function(e) {
                                    e.disable({onlySelf: !0})
                                  }),
                                  this._updateValue(),
                                  !1 !== e.emitEvent &&
            (this._valueChanges.emit(this._value),
             this._statusChanges.emit(this._status)),
                                  this._updateAncestors(!!e.onlySelf),
                                  this._onDisabledChange.forEach(function(e) {
                                    return e(!0)
                                  })
      },
      AbstractControl.prototype.enable =
                     function(e) {
        void 0 === e && (e = {}),
            this._status = 'VALID', this._forEachChild(function(e) {
              e.enable({onlySelf: !0})
            }),
            this.updateValueAndValidity({onlySelf: !0, emitEvent: e.emitEvent}),
            this._updateAncestors(!!e.onlySelf),
            this._onDisabledChange.forEach(function(e) {
              return e(!1)
            })
      },
      AbstractControl.prototype._updateAncestors =
                     function(e) {
        this._parent && !e &&
            (this._parent.updateValueAndValidity(),
             this._parent._updatePristine(), this._parent._updateTouched())
      },
      AbstractControl.prototype.setParent =
                     function(e) {
        this._parent = e
      },
      AbstractControl.prototype.setValue = function(e, t) {},
      AbstractControl.prototype.patchValue = function(e, t) {},
      AbstractControl.prototype.reset = function(e, t) {},
      AbstractControl.prototype.updateValueAndValidity =
                     function(e) {
        void 0 === e && (e = {}), this._setInitialStatus(), this._updateValue(),
            this.enabled &&
            (this._cancelExistingSubscription(),
             this._errors = this._runValidator(),
             this._status = this._calculateStatus(),
             'VALID' !== this._status && 'PENDING' !== this._status ||
                 this._runAsyncValidator(e.emitEvent)),
            !1 !== e.emitEvent &&
            (this._valueChanges.emit(this._value),
             this._statusChanges.emit(this._status)),
            this._parent && !e.onlySelf &&
            this._parent.updateValueAndValidity(e)
      },
      AbstractControl.prototype._updateTreeValidity =
                     function(e) {
        void 0 === e && (e = {emitEvent: !0}), this._forEachChild(function(t) {
          return t._updateTreeValidity(e)
        }),
            this.updateValueAndValidity({onlySelf: !0, emitEvent: e.emitEvent})
      },
      AbstractControl.prototype._setInitialStatus =
                     function() {
        this._status = this._allControlsDisabled() ? 'DISABLED' : 'VALID'
      },
      AbstractControl.prototype._runValidator =
                     function() {
        return this.validator ? this.validator(this) : null
      },
      AbstractControl.prototype._runAsyncValidator =
                     function(e) {
        var t = this;
        if (this.asyncValidator) {
          this._status = 'PENDING';
          var n = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = n.subscribe(function(n) {
            return t.setErrors(n, {emitEvent: e})
          })
        }
      },
      AbstractControl.prototype._cancelExistingSubscription =
                     function() {
        this._asyncValidationSubscription &&
            this._asyncValidationSubscription.unsubscribe()
      },
      AbstractControl.prototype.setErrors =
                     function(e, t) {
        void 0 === t && (t = {}), this._errors = e,
                                  this._updateControlsErrors(!1 !== t.emitEvent)
      },
      AbstractControl.prototype.get =
                     function(e) {
        return function _find(e, t, n) {
          return null == t ? null :
                             (t instanceof Array || (t = t.split(n)),
                              t instanceof Array && 0 === t.length ?
                                  null :
                                  t.reduce(function(e, t) {
                                    return e instanceof U ?
                                        e.controls[t] || null :
                                        e instanceof q && e.at(t) || null
                                  }, e))
        }(this, e, '.')
      },
      AbstractControl.prototype.getError =
                     function(e, t) {
        var n = t ? this.get(t) : this;
        return n && n._errors ? n._errors[e] : null
      },
      AbstractControl.prototype.hasError =
                     function(e, t) {
        return !!this.getError(e, t)
      },
      Object.defineProperty(AbstractControl.prototype, 'root', {
        get: function() {
          for (var e = this; e._parent;) e = e._parent;
          return e
        },
        enumerable: !0,
        configurable: !0
      }),
      AbstractControl.prototype._updateControlsErrors =
                     function(e) {
        this._status = this._calculateStatus(),
        e && this._statusChanges.emit(this._status),
        this._parent && this._parent._updateControlsErrors(e)
      },
      AbstractControl.prototype._initObservables =
                     function() {
        this._valueChanges = new i.EventEmitter,
        this._statusChanges = new i.EventEmitter
      },
      AbstractControl.prototype._calculateStatus =
                     function() {
        return this._allControlsDisabled()         ? 'DISABLED' :
            this._errors                           ? 'INVALID' :
            this._anyControlsHaveStatus('PENDING') ? 'PENDING' :
            this._anyControlsHaveStatus('INVALID') ? 'INVALID' :
                                                     'VALID'
      },
      AbstractControl.prototype._updateValue = function() {},
      AbstractControl.prototype._forEachChild = function(e) {},
      AbstractControl.prototype._anyControls = function(e) {},
      AbstractControl.prototype._allControlsDisabled = function() {},
      AbstractControl.prototype._anyControlsHaveStatus = function(e) {
        return this._anyControls(function(t) {
          return t.status === e
        })
      }, AbstractControl.prototype._anyControlsDirty = function() {
        return this._anyControls(function(e) {
          return e.dirty
        })
      }, AbstractControl.prototype._anyControlsTouched = function() {
        return this._anyControls(function(e) {
          return e.touched
        })
      }, AbstractControl.prototype._updatePristine = function(e) {
        void 0 === e && (e = {}),
            this._pristine = !this._anyControlsDirty(),
            this._parent && !e.onlySelf && this._parent._updatePristine(e)
      }, AbstractControl.prototype._updateTouched = function(e) {
        void 0 === e && (e = {}),
            this._touched = this._anyControlsTouched(),
            this._parent && !e.onlySelf && this._parent._updateTouched(e)
      }, AbstractControl.prototype._isBoxedValue = function(e) {
        return 'object' == typeof e && null !== e &&
            2 === Object.keys(e).length && 'value' in e && 'disabled' in e
      }, AbstractControl.prototype._registerOnCollectionChange = function(e) {
        this._onCollectionChange = e
      }, AbstractControl
        }(),
            G =
                function(e) {
              function FormControl(t, n, r) {
                void 0 === t && (t = null);
                var i = e.call(
                            this, coerceToValidator(n),
                            coerceToAsyncValidator(r)) ||
                    this;
                return i._onChange = [], i._applyFormState(t),
                       i.updateValueAndValidity({onlySelf: !0, emitEvent: !1}),
                       i._initObservables(), i
              }
              return r.a(FormControl, e),
                     FormControl.prototype
                         .setValue =
                         function(e, t) {
                       var n = this;
                       void 0 === t && (t = {}), this._value = e,
                                                 this._onChange.length &&
                           !1 !== t.emitModelToViewChange &&
                           this._onChange.forEach(function(e) {
                             return e(n._value, !1 !== t.emitViewToModelChange)
                           }),
                                                 this.updateValueAndValidity(t)
                     },
    FormControl.prototype.patchValue = function(e, t) {
      void 0 === t && (t = {}), this.setValue(e, t)
    }, FormControl.prototype.reset = function(e, t) {
      void 0 === e && (e = null), void 0 === t && (t = {}),
          this._applyFormState(e), this.markAsPristine(t),
          this.markAsUntouched(t), this.setValue(this._value, t)
    }, FormControl.prototype._updateValue = function() {
    }, FormControl.prototype._anyControls = function(e) {
      return !1
    }, FormControl.prototype._allControlsDisabled = function() {
      return this.disabled
    }, FormControl.prototype.registerOnChange = function(e) {
      this._onChange.push(e)
    }, FormControl.prototype._clearChangeFns = function() {
      this._onChange = [], this._onDisabledChange = [],
      this._onCollectionChange = function() {}
    }, FormControl.prototype.registerOnDisabledChange = function(e) {
      this._onDisabledChange.push(e)
    }, FormControl.prototype._forEachChild = function(e) {
    }, FormControl.prototype._applyFormState = function(e) {
      this._isBoxedValue(e) ?
          (this._value = e.value,
           e.disabled ? this.disable({onlySelf: !0, emitEvent: !1}) :
                        this.enable({onlySelf: !0, emitEvent: !1})) :
          this._value = e
    }, FormControl
            }(B),
            U =
                function(e) {
              function FormGroup(t, n, r) {
                var i = e.call(this, n || null, r || null) || this;
                return i.controls = t, i._initObservables(), i._setUpControls(),
                       i.updateValueAndValidity({onlySelf: !0, emitEvent: !1}),
                       i
              }
              return r.a(FormGroup, e),
                     FormGroup.prototype
                         .registerControl =
                         function(e, t) {
                       return this.controls[e] ?
                           this.controls[e] :
                           (this.controls[e] = t, t.setParent(this),
                            t._registerOnCollectionChange(
                                this._onCollectionChange),
                            t)
                     },
      FormGroup.prototype.addControl = function(e, t) {
        this.registerControl(e, t), this.updateValueAndValidity(),
            this._onCollectionChange()
      }, FormGroup.prototype.removeControl = function(e) {
        this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(function() {}),
            delete this.controls[e], this.updateValueAndValidity(),
            this._onCollectionChange()
      }, FormGroup.prototype.setControl = function(e, t) {
        this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(function() {}),
            delete this.controls[e], t && this.registerControl(e, t),
            this.updateValueAndValidity(), this._onCollectionChange()
      }, FormGroup.prototype.contains = function(e) {
        return this.controls.hasOwnProperty(e) && this.controls[e].enabled
      }, FormGroup.prototype.setValue = function(e, t) {
        var n = this;
        void 0 === t && (t = {}), this._checkAllValuesPresent(e),
            Object.keys(e).forEach(function(r) {
              n._throwIfControlMissing(r),
                  n.controls[r].setValue(
                      e[r], {onlySelf: !0, emitEvent: t.emitEvent})
            }),
            this.updateValueAndValidity(t)
      }, FormGroup.prototype.patchValue = function(e, t) {
        var n = this;
        void 0 === t && (t = {}), Object.keys(e).forEach(function(r) {
          n.controls[r] &&
              n.controls[r].patchValue(
                  e[r], {onlySelf: !0, emitEvent: t.emitEvent})
        }),
            this.updateValueAndValidity(t)
      }, FormGroup.prototype.reset = function(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}),
            this._forEachChild(function(n, r) {
              n.reset(e[r], {onlySelf: !0, emitEvent: t.emitEvent})
            }),
            this.updateValueAndValidity(t), this._updatePristine(t),
            this._updateTouched(t)
      }, FormGroup.prototype.getRawValue = function() {
        return this._reduceChildren({}, function(e, t, n) {
          return e[n] = t instanceof G ? t.value : t.getRawValue(), e
        })
      }, FormGroup.prototype._throwIfControlMissing = function(e) {
        if (!Object.keys(this.controls).length)
          throw new Error(
              '\n        There are no form controls registered with this group yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
        if (!this.controls[e])
          throw new Error('Cannot find form control with name: ' + e + '.')
      }, FormGroup.prototype._forEachChild = function(e) {
        var t = this;
        Object.keys(this.controls).forEach(function(n) {
          return e(t.controls[n], n)
        })
      }, FormGroup.prototype._setUpControls = function() {
        var e = this;
        this._forEachChild(function(t) {
          t.setParent(e), t._registerOnCollectionChange(e._onCollectionChange)
        })
      }, FormGroup.prototype._updateValue = function() {
        this._value = this._reduceValue()
      }, FormGroup.prototype._anyControls = function(e) {
        var t = this, n = !1;
        return this._forEachChild(function(r, i) {
          n = n || t.contains(i) && e(r)
        }),
               n
      }, FormGroup.prototype._reduceValue = function() {
        var e = this;
        return this._reduceChildren({}, function(t, n, r) {
          return (n.enabled || e.disabled) && (t[r] = n.value), t
        })
      }, FormGroup.prototype._reduceChildren = function(e, t) {
        var n = e;
        return this._forEachChild(function(e, r) {
          n = t(n, e, r)
        }),
               n
      }, FormGroup.prototype._allControlsDisabled = function() {
        for (var e = 0, t = Object.keys(this.controls); e < t.length; e++) {
          var n = t[e];
          if (this.controls[n].enabled) return !1
        }
        return Object.keys(this.controls).length > 0 || this.disabled
      }, FormGroup.prototype._checkAllValuesPresent = function(e) {
        this._forEachChild(function(t, n) {
          if (void 0 === e[n])
            throw new Error(
                'Must supply a value for form control with name: \'' + n +
                '\'.')
        })
      }, FormGroup
            }(B),
            q =
                function(e) {
              function FormArray(t, n, r) {
                var i = e.call(this, n || null, r || null) || this;
                return i.controls = t, i._initObservables(), i._setUpControls(),
                       i.updateValueAndValidity({onlySelf: !0, emitEvent: !1}),
                       i
              }
              return r.a(FormArray, e),
                     FormArray.prototype
                         .at =
                         function(e) {
                       return this.controls[e]
                     },
      FormArray.prototype.push =
                         function(e) {
        this.controls.push(e), this._registerControl(e),
            this.updateValueAndValidity(), this._onCollectionChange()
      },
      FormArray.prototype.insert =
                         function(e, t) {
        this.controls.splice(e, 0, t), this._registerControl(t),
            this.updateValueAndValidity(), this._onCollectionChange()
      },
      FormArray.prototype.removeAt =
                         function(e) {
        this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(function() {}),
            this.controls.splice(e, 1), this.updateValueAndValidity(),
            this._onCollectionChange()
      },
      FormArray.prototype.setControl =
                         function(e, t) {
        this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(function() {}),
            this.controls.splice(e, 1),
            t && (this.controls.splice(e, 0, t), this._registerControl(t)),
            this.updateValueAndValidity(), this._onCollectionChange()
      },
      Object.defineProperty(FormArray.prototype, 'length', {
        get: function() {
          return this.controls.length
        },
        enumerable: !0,
        configurable: !0
      }),
      FormArray.prototype.setValue = function(e, t) {
        var n = this;
        void 0 === t && (t = {}), this._checkAllValuesPresent(e),
            e.forEach(function(e, r) {
              n._throwIfControlMissing(r),
                  n.at(r).setValue(e, {onlySelf: !0, emitEvent: t.emitEvent})
            }),
            this.updateValueAndValidity(t)
      }, FormArray.prototype.patchValue = function(e, t) {
        var n = this;
        void 0 === t && (t = {}), e.forEach(function(e, r) {
          n.at(r) &&
              n.at(r).patchValue(e, {onlySelf: !0, emitEvent: t.emitEvent})
        }),
            this.updateValueAndValidity(t)
      }, FormArray.prototype.reset = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = {}),
            this._forEachChild(function(n, r) {
              n.reset(e[r], {onlySelf: !0, emitEvent: t.emitEvent})
            }),
            this.updateValueAndValidity(t), this._updatePristine(t),
            this._updateTouched(t)
      }, FormArray.prototype.getRawValue = function() {
        return this.controls.map(function(e) {
          return e instanceof G ? e.value : e.getRawValue()
        })
      }, FormArray.prototype._throwIfControlMissing = function(e) {
        if (!this.controls.length)
          throw new Error(
              '\n        There are no form controls registered with this array yet.  If you\'re using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ');
        if (!this.at(e))
          throw new Error('Cannot find form control at index ' + e)
      }, FormArray.prototype._forEachChild = function(e) {
        this.controls.forEach(function(t, n) {
          e(t, n)
        })
      }, FormArray.prototype._updateValue = function() {
        var e = this;
        this._value = this.controls
                          .filter(function(t) {
                            return t.enabled || e.disabled
                          })
                          .map(function(e) {
                            return e.value
                          })
      }, FormArray.prototype._anyControls = function(e) {
        return this.controls.some(function(t) {
          return t.enabled && e(t)
        })
      }, FormArray.prototype._setUpControls = function() {
        var e = this;
        this._forEachChild(function(t) {
          return e._registerControl(t)
        })
      }, FormArray.prototype._checkAllValuesPresent = function(e) {
        this._forEachChild(function(t, n) {
          if (void 0 === e[n])
            throw new Error(
                'Must supply a value for form control at index: ' + n + '.')
        })
      }, FormArray.prototype._allControlsDisabled = function() {
        for (var e = 0, t = this.controls; e < t.length; e++) {
          if (t[e].enabled) return !1
        }
        return this.controls.length > 0 || this.disabled
      }, FormArray.prototype._registerControl = function(e) {
        e.setParent(this),
            e._registerOnCollectionChange(this._onCollectionChange)
      }, FormArray
            }(B),
            W = {
              provide: c,
              useExisting: Object(i.forwardRef)(function() {
                return K
              })
            },
            z = Promise.resolve(null), K = function(e) {
              function NgForm(t, n) {
                var r = e.call(this) || this;
                return r._submitted = !1, r.ngSubmit = new i.EventEmitter,
                       r.form = new U(
                           {}, composeValidators(t), composeAsyncValidators(n)),
                       r
              }
              return r.a(NgForm, e),
                     Object.defineProperty(NgForm.prototype, 'submitted', {
                       get: function() {
                         return this._submitted
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     Object.defineProperty(NgForm.prototype, 'formDirective', {
                       get: function() {
                         return this
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     Object.defineProperty(NgForm.prototype, 'control', {
                       get: function() {
                         return this.form
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     Object.defineProperty(NgForm.prototype, 'path', {
                       get: function() {
                         return []
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     Object.defineProperty(NgForm.prototype, 'controls', {
                       get: function() {
                         return this.form.controls
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                     NgForm.prototype.addControl = function(e) {
                       var t = this;
                       z.then(function() {
                         var n = t._findContainer(e.path);
                         e._control = n.registerControl(e.name, e.control),
                         setUpControl(e.control, e),
                         e.control.updateValueAndValidity({emitEvent: !1})
                       })
                     }, NgForm.prototype.getControl = function(e) {
                       return this.form.get(e.path)
                     }, NgForm.prototype.removeControl = function(e) {
                       var t = this;
                       z.then(function() {
                         var n = t._findContainer(e.path);
                         n && n.removeControl(e.name)
                       })
                     }, NgForm.prototype.addFormGroup = function(e) {
                       var t = this;
                       z.then(function() {
                         var n = t._findContainer(e.path), r = new U({});
                         setUpFormContainer(r, e), n.registerControl(e.name, r),
                             r.updateValueAndValidity({emitEvent: !1})
                       })
                     }, NgForm.prototype.removeFormGroup = function(e) {
                       var t = this;
                       z.then(function() {
                         var n = t._findContainer(e.path);
                         n && n.removeControl(e.name)
                       })
                     }, NgForm.prototype.getFormGroup = function(e) {
                       return this.form.get(e.path)
                     }, NgForm.prototype.updateModel = function(e, t) {
                       var n = this;
                       z.then(function() {
                         n.form.get(e.path).setValue(t)
                       })
                     }, NgForm.prototype.setValue = function(e) {
                       this.control.setValue(e)
                     }, NgForm.prototype.onSubmit = function(e) {
                       return this._submitted = !0, this.ngSubmit.emit(e), !1
                     }, NgForm.prototype.onReset = function() {
                       this.resetForm()
                     }, NgForm.prototype.resetForm = function(e) {
                       void 0 === e && (e = void 0), this.form.reset(e),
                           this._submitted = !1
                     }, NgForm.prototype._findContainer = function(e) {
                       return e.pop(), e.length ? this.form.get(e) : this.form
                     }, NgForm
            }(c);
        K.decorators = [{
          type: i.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
            providers: [W],
            host: {'(submit)': 'onSubmit($event)', '(reset)': 'onReset()'},
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }],
        K.ctorParameters = function() {
          return [
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            }
          ]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var Y = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
            J = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
            Q = '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
            X = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
            $ = '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ',
            Z =
                function() {
              function TemplateDrivenErrors() {}
              return TemplateDrivenErrors
                         .modelParentException =
                         function() {
                throw new Error(
                    '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' +
                    Y +
                    '\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      ' +
                    $)
              },
     TemplateDrivenErrors.formGroupNameException = function() {
       throw new Error(
           '\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ' +
           J +
           '\n\n      Option 2:  Update ngModel\'s parent be ngModelGroup (template-driven strategy):\n\n      ' +
           X)
     }, TemplateDrivenErrors.missingNameException = function() {
       throw new Error(
           'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
     }, TemplateDrivenErrors.modelGroupParentException = function() {
       throw new Error(
           '\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ' +
           J +
           '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' +
           X)
     }, TemplateDrivenErrors
            }(),
            ee = {
              provide: c,
              useExisting: Object(i.forwardRef)(function() {
                return te
              })
            },
            te = function(e) {
              function NgModelGroup(t, n, r) {
                var i = e.call(this) || this;
                return i._parent = t, i._validators = n, i._asyncValidators = r,
                       i
              }
              return r.a(NgModelGroup, e),
                     NgModelGroup.prototype._checkParentType = function() {
                       this._parent instanceof NgModelGroup ||
                           this._parent instanceof K ||
                           Z.modelGroupParentException()
                     }, NgModelGroup
            }(R);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        te.decorators = [{
          type: i.Directive,
          args: [{
            selector: '[ngModelGroup]',
            providers: [ee],
            exportAs: 'ngModelGroup'
          }]
        }],
        te.ctorParameters = function() {
          return [
            {type: c, decorators: [{type: i.Host}, {type: i.SkipSelf}]}, {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            }
          ]
        }, te.propDecorators = {
          name: [{type: i.Input, args: ['ngModelGroup']}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var ne = {
          provide: A,
          useExisting: Object(i.forwardRef)(function() {
            return ie
          })
        },
            re = Promise.resolve(null), ie = function(e) {
              function NgModel(t, n, r, o) {
                var s = e.call(this) || this;
                return s._control = new G, s._registered = !1,
                       s.update = new i.EventEmitter, s._parent = t,
                       s._rawValidators = n || [],
                       s._rawAsyncValidators = r || [],
                       s.valueAccessor = selectValueAccessor(s, o), s
              }
              return r.a(NgModel, e),
                     NgModel.prototype
                         .ngOnChanges =
                         function(e) {
                       this._checkForErrors(),
                           this._registered || this._setUpControl(),
                           'isDisabled' in e && this._updateDisabled(e),
                           isPropertyUpdated(e, this.viewModel) &&
                           (this._updateValue(this.model),
                            this.viewModel = this.model)
                     },
        NgModel.prototype.ngOnDestroy =
                         function() {
          this.formDirective && this.formDirective.removeControl(this)
        },
        Object.defineProperty(NgModel.prototype, 'control', {
          get: function() {
            return this._control
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(NgModel.prototype, 'path', {
          get: function() {
            return this._parent ? controlPath(this.name, this._parent) :
                                  [this.name]
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(NgModel.prototype, 'formDirective', {
          get: function() {
            return this._parent ? this._parent.formDirective : null
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(NgModel.prototype, 'validator', {
          get: function() {
            return composeValidators(this._rawValidators)
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(NgModel.prototype, 'asyncValidator', {
          get: function() {
            return composeAsyncValidators(this._rawAsyncValidators)
          },
          enumerable: !0,
          configurable: !0
        }),
        NgModel.prototype.viewToModelUpdate = function(e) {
          this.viewModel = e, this.update.emit(e)
        }, NgModel.prototype._setUpControl = function() {
          this._isStandalone() ? this._setUpStandalone() :
                                 this.formDirective.addControl(this),
              this._registered = !0
        }, NgModel.prototype._isStandalone = function() {
          return !this._parent || !(!this.options || !this.options.standalone)
        }, NgModel.prototype._setUpStandalone = function() {
          setUpControl(this._control, this),
              this._control.updateValueAndValidity({emitEvent: !1})
        }, NgModel.prototype._checkForErrors = function() {
          this._isStandalone() || this._checkParentType(), this._checkName()
        }, NgModel.prototype._checkParentType = function() {
          !(this._parent instanceof te) && this._parent instanceof R ?
              Z.formGroupNameException() :
              this._parent instanceof te || this._parent instanceof K ||
                  Z.modelParentException()
        }, NgModel.prototype._checkName = function() {
          this.options && this.options.name && (this.name = this.options.name),
              this._isStandalone() || this.name || Z.missingNameException()
        }, NgModel.prototype._updateValue = function(e) {
          var t = this;
          re.then(function() {
            t.control.setValue(e, {emitViewToModelChange: !1})
          })
        }, NgModel.prototype._updateDisabled = function(e) {
          var t = this, n = e.isDisabled.currentValue,
              r = '' === n || n && 'false' !== n;
          re.then(function() {
            r && !t.control.disabled ?
                t.control.disable() :
                !r && t.control.disabled && t.control.enable()
          })
        }, NgModel
            }(A);
        ie.decorators = [{
          type: i.Directive,
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [ne],
            exportAs: 'ngModel'
          }]
        }],
        ie.ctorParameters = function() {
          return [
            {type: c, decorators: [{type: i.Optional}, {type: i.Host}]}, {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [f]}
              ]
            }
          ]
        }, ie.propDecorators = {
          name: [{type: i.Input}],
          isDisabled: [{type: i.Input, args: ['disabled']}],
          model: [{type: i.Input, args: ['ngModel']}],
          options: [{type: i.Input, args: ['ngModelOptions']}],
          update: [{type: i.Output, args: ['ngModelChange']}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var oe =
                function() {
          function ReactiveErrors() {}
          return ReactiveErrors
                     .controlParentException =
                     function() {
            throw new Error(
                'formControlName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' +
                Y)
          },
       ReactiveErrors.ngModelGroupException = function() {
         throw new Error(
             'formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' +
             J +
             '\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ' +
             X)
       }, ReactiveErrors.missingFormException = function() {
         throw new Error(
             'formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ' +
             Y)
       }, ReactiveErrors.groupParentException = function() {
         throw new Error(
             'formGroupName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ' +
             J)
       }, ReactiveErrors.arrayParentException = function() {
         throw new Error(
             'formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ' +
             Q)
       }, ReactiveErrors.disabledAttrWarning = function() {
         console.warn(
             '\n      It looks like you\'re using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid \'changed after checked\' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: \'Nancy\', disabled: true}, Validators.required),\n        last: new FormControl(\'Drew\', Validators.required)\n      });\n    ')
       }, ReactiveErrors
        }(),
            se = {
              provide: A,
              useExisting: Object(i.forwardRef)(function() {
                return ae
              })
            },
            ae = function(e) {
              function FormControlDirective(t, n, r) {
                var o = e.call(this) || this;
                return o.update = new i.EventEmitter,
                       o._rawValidators = t || [],
                       o._rawAsyncValidators = n || [],
                       o.valueAccessor = selectValueAccessor(o, r), o
              }
              return r.a(FormControlDirective, e),
                     Object.defineProperty(
                         FormControlDirective.prototype, 'isDisabled', {
                           set: function(e) {
                             oe.disabledAttrWarning()
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     FormControlDirective
                         .prototype.ngOnChanges =
                         function(e) {
                       this._isControlChanged(e) &&
                           (setUpControl(this.form, this),
                            this.control.disabled &&
                                this.valueAccessor.setDisabledState &&
                                this.valueAccessor.setDisabledState(!0),
                            this.form.updateValueAndValidity({emitEvent: !1})),
                           isPropertyUpdated(e, this.viewModel) &&
                           (this.form.setValue(this.model),
                            this.viewModel = this.model)
                     },
     Object.defineProperty(FormControlDirective.prototype, 'path', {
       get: function() {
         return []
       },
       enumerable: !0,
       configurable: !0
     }),
     Object.defineProperty(FormControlDirective.prototype, 'validator', {
       get: function() {
         return composeValidators(this._rawValidators)
       },
       enumerable: !0,
       configurable: !0
     }),
     Object.defineProperty(FormControlDirective.prototype, 'asyncValidator', {
       get: function() {
         return composeAsyncValidators(this._rawAsyncValidators)
       },
       enumerable: !0,
       configurable: !0
     }),
     Object.defineProperty(FormControlDirective.prototype, 'control', {
       get: function() {
         return this.form
       },
       enumerable: !0,
       configurable: !0
     }),
     FormControlDirective.prototype.viewToModelUpdate = function(e) {
       this.viewModel = e, this.update.emit(e)
     }, FormControlDirective.prototype._isControlChanged = function(e) {
       return e.hasOwnProperty('form')
     }, FormControlDirective
            }(A);
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        ae.decorators = [{
          type: i.Directive,
          args:
              [{selector: '[formControl]', providers: [se], exportAs: 'ngForm'}]
        }],
        ae.ctorParameters = function() {
          return [
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [f]}
              ]
            }
          ]
        }, ae.propDecorators = {
          form: [{type: i.Input, args: ['formControl']}],
          model: [{type: i.Input, args: ['ngModel']}],
          update: [{type: i.Output, args: ['ngModelChange']}],
          isDisabled: [{type: i.Input, args: ['disabled']}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var ue = {
          provide: c,
          useExisting: Object(i.forwardRef)(function() {
            return le
          })
        },
            le = function(e) {
              function FormGroupDirective(t, n) {
                var r = e.call(this) || this;
                return r._validators = t, r._asyncValidators = n,
                       r._submitted = !1, r.directives = [], r.form = null,
                       r.ngSubmit = new i.EventEmitter, r
              }
              return r.a(FormGroupDirective, e),
                     FormGroupDirective
                         .prototype.ngOnChanges =
                         function(e) {
                       this._checkFormPresent(),
                           e.hasOwnProperty('form') &&
                           (this._updateValidators(), this._updateDomValue(),
                            this._updateRegistrations())
                     },
       Object.defineProperty(FormGroupDirective.prototype, 'submitted', {
         get: function() {
           return this._submitted
         },
         enumerable: !0,
         configurable: !0
       }),
       Object.defineProperty(FormGroupDirective.prototype, 'formDirective', {
         get: function() {
           return this
         },
         enumerable: !0,
         configurable: !0
       }),
       Object.defineProperty(FormGroupDirective.prototype, 'control', {
         get: function() {
           return this.form
         },
         enumerable: !0,
         configurable: !0
       }),
       Object.defineProperty(FormGroupDirective.prototype, 'path', {
         get: function() {
           return []
         },
         enumerable: !0,
         configurable: !0
       }),
       FormGroupDirective.prototype.addControl = function(e) {
         var t = this.form.get(e.path);
         return setUpControl(t, e), t.updateValueAndValidity({emitEvent: !1}),
                this.directives.push(e), t
       }, FormGroupDirective.prototype.getControl = function(e) {
         return this.form.get(e.path)
       }, FormGroupDirective.prototype.removeControl = function(e) {
         !function remove(e, t) {
           var n = e.indexOf(t);
           n > -1 && e.splice(n, 1)
         }
         /**
          * @license
          * Copyright Google Inc. All Rights Reserved.
          *
          * Use of this source code is governed by an MIT-style license that can
          * be found in the LICENSE file at https://angular.io/license
          */
         (this.directives, e)
       }, FormGroupDirective.prototype.addFormGroup = function(e) {
         var t = this.form.get(e.path);
         setUpFormContainer(t, e), t.updateValueAndValidity({emitEvent: !1})
       }, FormGroupDirective.prototype.removeFormGroup = function(e) {
       }, FormGroupDirective.prototype.getFormGroup = function(e) {
         return this.form.get(e.path)
       }, FormGroupDirective.prototype.addFormArray = function(e) {
         var t = this.form.get(e.path);
         setUpFormContainer(t, e), t.updateValueAndValidity({emitEvent: !1})
       }, FormGroupDirective.prototype.removeFormArray = function(e) {
       }, FormGroupDirective.prototype.getFormArray = function(e) {
         return this.form.get(e.path)
       }, FormGroupDirective.prototype.updateModel = function(e, t) {
         this.form.get(e.path).setValue(t)
       }, FormGroupDirective.prototype.onSubmit = function(e) {
         return this._submitted = !0, this.ngSubmit.emit(e), !1
       }, FormGroupDirective.prototype.onReset = function() {
         this.resetForm()
       }, FormGroupDirective.prototype.resetForm = function(e) {
         void 0 === e && (e = void 0), this.form.reset(e), this._submitted = !1
       }, FormGroupDirective.prototype._updateDomValue = function() {
         var e = this;
         this.directives.forEach(function(t) {
           var n = e.form.get(t.path);
           t._control !== n && (!function cleanUpControl(e, t) {
             t.valueAccessor.registerOnChange(function() {
               return _noControlError(t)
             }),
                 t.valueAccessor.registerOnTouched(function() {
                   return _noControlError(t)
                 }),
                 t._rawValidators.forEach(function(e) {
                   e.registerOnValidatorChange &&
                       e.registerOnValidatorChange(null)
                 }),
                 t._rawAsyncValidators.forEach(function(e) {
                   e.registerOnValidatorChange &&
                       e.registerOnValidatorChange(null)
                 }),
                 e && e._clearChangeFns()
           }(t._control, t), n && setUpControl(n, t), t._control = n)
         }),
             this.form._updateTreeValidity({emitEvent: !1})
       }, FormGroupDirective.prototype._updateRegistrations = function() {
         var e = this;
         this.form._registerOnCollectionChange(function() {
           return e._updateDomValue()
         }),
             this._oldForm &&
             this._oldForm._registerOnCollectionChange(function() {}),
             this._oldForm = this.form
       }, FormGroupDirective.prototype._updateValidators = function() {
         var e = composeValidators(this._validators);
         this.form.validator = m.compose([this.form.validator, e]);
         var t = composeAsyncValidators(this._asyncValidators);
         this.form.asyncValidator =
             m.composeAsync([this.form.asyncValidator, t])
       }, FormGroupDirective.prototype._checkFormPresent = function() {
         this.form || oe.missingFormException()
       }, FormGroupDirective
            }(c);
        le.decorators = [{
          type: i.Directive,
          args: [{
            selector: '[formGroup]',
            providers: [ue],
            host: {'(submit)': 'onSubmit($event)', '(reset)': 'onReset()'},
            exportAs: 'ngForm'
          }]
        }],
        le.ctorParameters = function() {
          return [
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            }
          ]
        }, le.propDecorators = {
          form: [{type: i.Input, args: ['formGroup']}],
          ngSubmit: [{type: i.Output}]
        };
        var ce = {
          provide: c,
          useExisting: Object(i.forwardRef)(function() {
            return pe
          })
        },
            pe = function(e) {
              function FormGroupName(t, n, r) {
                var i = e.call(this) || this;
                return i._parent = t, i._validators = n, i._asyncValidators = r,
                       i
              }
              return r.a(FormGroupName, e),
                     FormGroupName.prototype._checkParentType = function() {
                       _hasInvalidParent(this._parent) &&
                           oe.groupParentException()
                     }, FormGroupName
            }(R);
        pe.decorators = [{
          type: i.Directive,
          args: [{selector: '[formGroupName]', providers: [ce]}]
        }],
        pe.ctorParameters = function() {
          return [
            {
              type: c,
              decorators:
                  [{type: i.Optional}, {type: i.Host}, {type: i.SkipSelf}]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            }
          ]
        }, pe.propDecorators = {
          name: [{type: i.Input, args: ['formGroupName']}]
        };
        var de = {
          provide: c,
          useExisting: Object(i.forwardRef)(function() {
            return he
          })
        },
            he = function(e) {
              function FormArrayName(t, n, r) {
                var i = e.call(this) || this;
                return i._parent = t, i._validators = n, i._asyncValidators = r,
                       i
              }
              return r.a(FormArrayName, e),
                     FormArrayName.prototype
                         .ngOnInit =
                         function() {
                       this._checkParentType(),
                           this.formDirective.addFormArray(this)
                     },
  FormArrayName.prototype.ngOnDestroy =
                         function() {
    this.formDirective && this.formDirective.removeFormArray(this)
  },
  Object.defineProperty(FormArrayName.prototype, 'control', {
    get: function() {
      return this.formDirective.getFormArray(this)
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(FormArrayName.prototype, 'formDirective', {
    get: function() {
      return this._parent ? this._parent.formDirective : null
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(FormArrayName.prototype, 'path', {
    get: function() {
      return controlPath(this.name, this._parent)
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(FormArrayName.prototype, 'validator', {
    get: function() {
      return composeValidators(this._validators)
    },
    enumerable: !0,
    configurable: !0
  }),
  Object.defineProperty(FormArrayName.prototype, 'asyncValidator', {
    get: function() {
      return composeAsyncValidators(this._asyncValidators)
    },
    enumerable: !0,
    configurable: !0
  }),
  FormArrayName.prototype._checkParentType = function() {
    _hasInvalidParent(this._parent) && oe.arrayParentException()
  }, FormArrayName
            }(c);
        function _hasInvalidParent(e) {
          return !(e instanceof pe || e instanceof le || e instanceof he)
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        he.decorators = [{
          type: i.Directive,
          args: [{selector: '[formArrayName]', providers: [de]}]
        }],
        he.ctorParameters = function() {
          return [
            {
              type: c,
              decorators:
                  [{type: i.Optional}, {type: i.Host}, {type: i.SkipSelf}]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            }
          ]
        }, he.propDecorators = {
          name: [{type: i.Input, args: ['formArrayName']}]
        };
        var me = {
          provide: A,
          useExisting: Object(i.forwardRef)(function() {
            return fe
          })
        },
            fe = function(e) {
              function FormControlName(t, n, r, o) {
                var s = e.call(this) || this;
                return s._added = !1, s.update = new i.EventEmitter,
                       s._parent = t, s._rawValidators = n || [],
                       s._rawAsyncValidators = r || [],
                       s.valueAccessor = selectValueAccessor(s, o), s
              }
              return r.a(FormControlName, e),
                     Object.defineProperty(
                         FormControlName.prototype, 'isDisabled', {
                           set: function(e) {
                             oe.disabledAttrWarning()
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     FormControlName
                         .prototype.ngOnChanges =
                         function(e) {
                       this._added || this._setUpControl(),
                           isPropertyUpdated(e, this.viewModel) &&
                           (this.viewModel = this.model,
                            this.formDirective.updateModel(this, this.model))
                     },
          FormControlName.prototype.ngOnDestroy =
                         function() {
            this.formDirective && this.formDirective.removeControl(this)
          },
          FormControlName.prototype.viewToModelUpdate =
                         function(e) {
            this.viewModel = e, this.update.emit(e)
          },
          Object.defineProperty(FormControlName.prototype, 'path', {
            get: function() {
              return controlPath(this.name, this._parent)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(FormControlName.prototype, 'formDirective', {
            get: function() {
              return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(FormControlName.prototype, 'validator', {
            get: function() {
              return composeValidators(this._rawValidators)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(FormControlName.prototype, 'asyncValidator', {
            get: function() {
              return composeAsyncValidators(this._rawAsyncValidators)
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(FormControlName.prototype, 'control', {
            get: function() {
              return this._control
            },
            enumerable: !0,
            configurable: !0
          }),
          FormControlName.prototype._checkParentType = function() {
            !(this._parent instanceof pe) && this._parent instanceof R ?
                oe.ngModelGroupException() :
                this._parent instanceof pe || this._parent instanceof le ||
                    this._parent instanceof he || oe.controlParentException()
          }, FormControlName.prototype._setUpControl = function() {
            this._checkParentType(),
                this._control = this.formDirective.addControl(this),
                this.control.disabled && this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
                this._added = !0
          }, FormControlName
            }(A);
        fe.decorators = [{
          type: i.Directive,
          args: [{selector: '[formControlName]', providers: [me]}]
        }],
        fe.ctorParameters = function() {
          return [
            {
              type: c,
              decorators:
                  [{type: i.Optional}, {type: i.Host}, {type: i.SkipSelf}]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [p]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [d]}
              ]
            },
            {
              type: Array,
              decorators: [
                {type: i.Optional}, {type: i.Self}, {type: i.Inject, args: [f]}
              ]
            }
          ]
        }, fe.propDecorators = {
          name: [{type: i.Input, args: ['formControlName']}],
          model: [{type: i.Input, args: ['ngModel']}],
          update: [{type: i.Output, args: ['ngModelChange']}],
          isDisabled: [{type: i.Input, args: ['disabled']}]
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var ye = {
          provide: p,
          useExisting: Object(i.forwardRef)(function() {
            return ve
          }),
          multi: !0
        },
            ge = {
              provide: p,
              useExisting: Object(i.forwardRef)(function() {
                return be
              }),
              multi: !0
            },
            ve = function() {
              function RequiredValidator() {}
              return Object.defineProperty(
                         RequiredValidator.prototype, 'required', {
                           get: function() {
                             return this._required
                           },
                           set: function(e) {
                             this._required =
                                 null != e && !1 !== e && '' + e != 'false',
                             this._onChange && this._onChange()
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     RequiredValidator.prototype.validate =
                         function(e) {
                       return this.required ? m.required(e) : null
                     },
                     RequiredValidator.prototype.registerOnValidatorChange =
                         function(e) {
                       this._onChange = e
                     },
                     RequiredValidator
            }();
        ve.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [ye],
            host: {'[attr.required]': 'required ? "" : null'}
          }]
        }],
        ve.ctorParameters = function() {
          return []
        }, ve.propDecorators = {required: [{type: i.Input}]};
        var be = function(e) {
          function CheckboxRequiredValidator() {
            return null !== e && e.apply(this, arguments) || this
          }
          return r.a(CheckboxRequiredValidator, e),
                 CheckboxRequiredValidator.prototype.validate = function(e) {
                   return this.required ? m.requiredTrue(e) : null
                 }, CheckboxRequiredValidator
        }(ve);
        be.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [ge],
            host: {'[attr.required]': 'required ? "" : null'}
          }]
        }],
        be.ctorParameters = function() {
          return []
        };
        var _e = {
          provide: p,
          useExisting: Object(i.forwardRef)(function() {
            return Se
          }),
          multi: !0
        },
            Se = function() {
              function EmailValidator() {}
              return Object.defineProperty(EmailValidator.prototype, 'email', {
                set: function(e) {
                  this._enabled = '' === e || !0 === e || 'true' === e,
                  this._onChange && this._onChange()
                },
                enumerable: !0,
                configurable: !0
              }),
                     EmailValidator.prototype.validate =
                         function(e) {
                       return this._enabled ? m.email(e) : null
                     },
                     EmailValidator.prototype.registerOnValidatorChange =
                         function(e) {
                       this._onChange = e
                     },
                     EmailValidator
            }();
        Se.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [_e]
          }]
        }],
        Se.ctorParameters = function() {
          return []
        }, Se.propDecorators = {email: [{type: i.Input}]};
        var Ce = {
          provide: p,
          useExisting: Object(i.forwardRef)(function() {
            return Ae
          }),
          multi: !0
        },
            Ae = function() {
              function MinLengthValidator() {}
              return MinLengthValidator
                         .prototype.ngOnChanges =
                         function(e) {
                'minlength' in e &&
                    (this._createValidator(),
                     this._onChange && this._onChange())
              },
       MinLengthValidator.prototype.validate = function(e) {
         return null == this.minlength ? null : this._validator(e)
       }, MinLengthValidator.prototype.registerOnValidatorChange = function(e) {
         this._onChange = e
       }, MinLengthValidator.prototype._createValidator = function() {
         this._validator = m.minLength(parseInt(this.minlength, 10))
       }, MinLengthValidator
            }();
        Ae.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [Ce],
            host: {'[attr.minlength]': 'minlength ? minlength : null'}
          }]
        }],
        Ae.ctorParameters = function() {
          return []
        }, Ae.propDecorators = {minlength: [{type: i.Input}]};
        var Te = {
          provide: p,
          useExisting: Object(i.forwardRef)(function() {
            return we
          }),
          multi: !0
        },
            we = function() {
              function MaxLengthValidator() {}
              return MaxLengthValidator
                         .prototype.ngOnChanges =
                         function(e) {
                'maxlength' in e &&
                    (this._createValidator(),
                     this._onChange && this._onChange())
              },
       MaxLengthValidator.prototype.validate = function(e) {
         return null != this.maxlength ? this._validator(e) : null
       }, MaxLengthValidator.prototype.registerOnValidatorChange = function(e) {
         this._onChange = e
       }, MaxLengthValidator.prototype._createValidator = function() {
         this._validator = m.maxLength(parseInt(this.maxlength, 10))
       }, MaxLengthValidator
            }();
        we.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [Te],
            host: {'[attr.maxlength]': 'maxlength ? maxlength : null'}
          }]
        }],
        we.ctorParameters = function() {
          return []
        }, we.propDecorators = {maxlength: [{type: i.Input}]};
        var Ee = {
          provide: p,
          useExisting: Object(i.forwardRef)(function() {
            return Pe
          }),
          multi: !0
        },
            Pe = function() {
              function PatternValidator() {}
              return PatternValidator
                         .prototype.ngOnChanges =
                         function(e) {
                'pattern' in e &&
                    (this._createValidator(),
                     this._onChange && this._onChange())
              },
         PatternValidator.prototype.validate = function(e) {
           return this._validator(e)
         }, PatternValidator.prototype.registerOnValidatorChange = function(e) {
           this._onChange = e
         }, PatternValidator.prototype._createValidator = function() {
           this._validator = m.pattern(this.pattern)
         }, PatternValidator
            }();
        Pe.decorators = [{
          type: i.Directive,
          args: [{
            selector:
                '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [Ee],
            host: {'[attr.pattern]': 'pattern ? pattern : null'}
          }]
        }],
        Pe.ctorParameters = function() {
          return []
        }, Pe.propDecorators = {pattern: [{type: i.Input}]};
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var Oe = function() {
          function FormBuilder() {}
          return FormBuilder.prototype.group = function(e, t) {
            void 0 === t && (t = null);
            var n = this._reduceControls(e), r = null != t ? t.validator : null,
                i = null != t ? t.asyncValidator : null;
            return new U(n, r, i)
          }, FormBuilder.prototype.control = function(e, t, n) {
            return new G(e, t, n)
          }, FormBuilder.prototype.array = function(e, t, n) {
            var r = this, i = e.map(function(e) {
              return r._createControl(e)
            });
            return new q(i, t, n)
          }, FormBuilder.prototype._reduceControls = function(e) {
            var t = this, n = {};
            return Object.keys(e).forEach(function(r) {
              n[r] = t._createControl(e[r])
            }),
                   n
          }, FormBuilder.prototype._createControl = function(e) {
            if (e instanceof G || e instanceof U || e instanceof q) return e;
            if (Array.isArray(e)) {
              var t = e[0], n = e.length > 1 ? e[1] : null,
                  r = e.length > 2 ? e[2] : null;
              return this.control(t, n, r)
            }
            return this.control(e)
          }, FormBuilder
        }();
        Oe.decorators = [{type: i.Injectable}], Oe.ctorParameters = function() {
          return []
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var Ie = new i.Version('4.4.6'), Ne = function() {
          return function NgNoValidate() {}
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        Ne.decorators = [{
          type: i.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {novalidate: ''}
          }]
        }],
        Ne.ctorParameters = function() {
          return []
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var Le = [Ne, L, M, _, C, O, g, N, D, E, j, H, ve, Ae, we, Pe, be, Se],
            xe = [ie, te, K], De = [ae, le, fe, pe, he], Me = function() {
              return function InternalFormsSharedModule() {}
            }();
        Me.decorators =
            [{type: i.NgModule, args: [{declarations: Le, exports: Le}]}],
        Me.ctorParameters = function() {
          return []
        };
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var Fe = function() {
          return function FormsModule() {}
        }();
        Fe.decorators = [{
          type: i.NgModule,
          args: [{declarations: xe, providers: [w], exports: [Me, xe]}]
        }],
        Fe.ctorParameters = function() {
          return []
        };
        var Re = function() {
          return function ReactiveFormsModule() {}
        }();
        Re.decorators = [{
          type: i.NgModule,
          args: [{declarations: [De], providers: [Oe, w], exports: [Me, De]}]
        }],
        Re.ctorParameters = function() {
          return []
        }
      },
      235: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = 0;
        !function(e) {
          e[e.error = 0] = 'error', e[e.warn = 1] = 'warn'
        }(t.FlashMessageType || (t.FlashMessageType = {}));
        var i = function() {
          return function FlashMessage(e, t, n) {
            this.content = e, this.tooltip = t, this.type = n, this.id = r++,
            this.isDismissed = !1, this.hasTooltip = Boolean(t),
            this.showTooltip = !1
          }
        }();
        t.FlashMessage = i
      },
      236: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(19), i = n(2), o = n(234), s = n(29), a = n(94), u = n(584),
            l = function() {
              function PlugsModule() {}
              return PlugsModule = __decorate(
                         [i.NgModule({
                           imports: [
                             r.CommonModule, o.FormsModule, s.HttpModule,
                             a.SharedModule
                           ],
                           declarations: [u.UserInputPlugComponent],
                           providers: [],
                           exports: [
                             r.CommonModule, s.HttpModule,
                             u.UserInputPlugComponent
                           ]
                         })],
                         PlugsModule)
            }();
        t.PlugsModule = l
      },
      237: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function ProgressBarComponent() {
            this.isReset = !1
          }
          return Object.defineProperty(
                     ProgressBarComponent.prototype, 'barStyle', {
                       get: function() {
                         return this.isReset ?
                             (this.isReset = !1,
                              {width: '0', transition: 'none'}) :
                             {
                               width:
                                   100 * Math.max(0, Math.min(1, this.value)) +
                                   '%'
                             }
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     ProgressBarComponent.prototype, 'isComplete', {
                       get: function() {
                         return this.value >= 1
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 ProgressBarComponent
                     .prototype.reset =
                     function() {
                   this.isReset = !0
                 },
 __decorate([r.Input(), __metadata('design:type', Number)],
            ProgressBarComponent.prototype, 'value', void 0),
 ProgressBarComponent = __decorate(
     [r.Component(
         {selector: 'htf-progress-bar', template: n(578), styles: [n(579)]})],
     ProgressBarComponent)
        }();
        t.ProgressBarComponent = i
      },
      238: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(48);
        t.washIn =
            [
              r.state('in', r.style({background: 'rgba(0, 119, 255, 0.0)'})),
              r.transition(
                  'void => in',
                  [
                    r.style({background: 'rgba(0, 119, 255, 0.1)'}),
                    r.animate(1e3)
                  ])
            ],
        t.washAndExpandIn = function washAndExpandIn(e) {
          return [
            r.state('in', r.style({
              background: 'rgba(0, 119, 255, 0.0)',
              'max-height': e + 'px'
            })),
            r.transition(
                'void => in',
                [
                  r.style({
                    background: 'rgba(0, 119, 255, 0.2)',
                    'max-height': '0'
                  }),
                  r.animate(500)
                ])
          ]
        }
      },
      239: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(49), o = n(97), s = n(240), a = n(26),
            u = a.devHost + '/sub/dashboard', l = {
              UNREACHABLE: i.StationStatus.unreachable,
              ONLINE: i.StationStatus.online
            },
            c = function(e) {
              function DashboardService(n) {
                var r = e.call(this, n) || this;
                return r.stations = {}, r.messages.subscribe(function(e) {
                  var n = t.validateResponse(e.data), i = t.parseResponse(n);
                  r.applyResponse(i)
                }),
                       r
              }
              return __extends(DashboardService, e),
                     t = DashboardService,
                     DashboardService.prototype.subscribe =
                         function(t, n, r) {
                       void 0 === t && (t = null), void 0 === n && (n = 1),
                           void 0 === r && (r = Number.MAX_VALUE),
                           e.prototype.subscribeToUrl.call(this, u, t, n, r)
                     },
                     DashboardService.validateResponse =
                         function(e) {
                       return e
                     },
                     DashboardService.parseResponse =
                         function(e) {
                       for (var n = {}, r = 0, o = Object.keys(e); r < o.length;
                            r++) {
                         var s = o[r], a = e[s];
                         n[s] = new i.Station({
                           cell: a.cell,
                           host: a.host,
                           hostPort: s,
                           label: t.getStationLabel(a),
                           port: a.port,
                           stationId: a.station_id,
                           status: l[a.status],
                           testDescription: a.test_description,
                           testName: a.test_name
                         })
                       }
                       return n
                     },
                     DashboardService.prototype.applyResponse =
                         function(e) {
                       for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                         var r = e[s = n[t]];
                         s in this.stations ?
                             (null === r.cell && null === r.testDescription &&
                                  null === r.testName &&
                                  (r.cell = this.stations[s].cell,
                                   r.label = this.stations[s].label,
                                   r.testDescription =
                                       this.stations[s].testDescription,
                                   r.testName = this.stations[s].testName),
                              Object.assign(this.stations[s], r)) :
                             this.stations[s] = r
                       }
                       for (var i = 0, o = Object.keys(this.stations);
                            i < o.length; i++) {
                         var s;
                         (s = o[i]) in e || delete this.stations[s]
                       }
                     },
                     DashboardService.getStationLabel =
                         function(e) {
                       return e.cell   ? e.cell :
                           e.test_name ? a.urlHost === e.host ||
                                   a.urlHost === e.station_id ?
                                         e.test_name :
                                         e.test_name + ' on ' + e.station_id :
                                         e.station_id
                     },
                     DashboardService = t = __decorate(
                         [
                           r.Injectable(),
                           __metadata('design:paramtypes', [o.SockJsService])
                         ],
                         DashboardService);
              var t
            }(s.Subscription);
        t.DashboardService = c
      },
      240: function(e, t, n) {
        'use strict';
        var r;
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.unsubscribed = 0] = 'unsubscribed',
                             e[e.subscribing = 1] = 'subscribing',
                             e[e.subscribed = 2] = 'subscribed',
                             e[e.failed = 3] = 'failed',
                             e[e.waiting = 4] = 'waiting'
        }(r || (r = {}));
        var i = n(9), o = function() {
          function Subscription(e) {
            this.sockJsService = e, this.messages = new i.Subject,
            this.retryTimeMs = null, this.currentRetryMs = null,
            this.retryTimeoutId = null, this.sock = null,
            this.state = r.unsubscribed, this.url = null, this.retryMs = null,
            this.retryBackoff = null, this.retryMax = null
          }
          return Object.defineProperty(Subscription.prototype, 'hasError', {
            get: function() {
              return this.state === r.failed || this.state === r.waiting
            },
            enumerable: !0,
            configurable: !0
          }),
                 Object.defineProperty(
                     Subscription.prototype, 'isSubscribing', {
                       get: function() {
                         return this.state === r.subscribing
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Subscription.prototype
                     .refresh =
                     function() {
                   if (this.state === r.unsubscribed)
                     throw new Error(
                         'Cannot refresh subscription from state `unsubscribed`.');
                   this.state !== r.subscribing &&
                       (this.unsubscribe(), this.subscribeWithSavedParams())
                 },
           Subscription.prototype.retryNow = function() {
             if (this.state !== r.waiting)
               throw new Error(
                   'Subscription cannot retryNow when state != `waiting`.');
             this.cancelTimeout(), this.subscribeWithSavedParams()
           }, Subscription.prototype.subscribeToUrl = function(e, t, n, r) {
             void 0 === t && (t = null), void 0 === n && (n = 1),
                 void 0 === r && (r = Number.MAX_VALUE),
                 null !== this.sock && this.unsubscribe(),
                 this.url = e, this.retryMs = t, this.retryBackoff = n,
                 this.retryMax = r, this.subscribeWithSavedParams()
           }, Subscription.prototype.unsubscribe = function() {
             null !== this.sock &&
                 (console.debug('Unsubscribing from ' + this.url + '.'),
                  this.cancelTimeout(), this.sock.close(),
                  this.currentRetryMs = null, this.state = r.unsubscribed)
           }, Subscription.prototype.cancelTimeout = function() {
             null !== this.retryTimeoutId &&
                 (clearTimeout(this.retryTimeoutId), this.retryTimeoutId = null)
           }, Subscription.prototype.subscribeWithSavedParams = function() {
             var e = this;
             console.debug('Attempting to subscribe to ' + this.url + '.');
             var t = new this.sockJsService.sockJs(this.url);
             t.onopen = function() {
               e.sock === t &&
                   (console.debug('Subscribed to ' + e.url + '.'),
                    e.currentRetryMs = null, e.state = r.subscribed)
             }, t.onclose = function() {
               e.sock === t &&
                   (e.state === r.subscribed ?
                        console.debug('Subscription to ' + e.url + ' lost.') :
                        console.debug('Subscription to ' + e.url + ' failed.'),
                    null === e.retryMs ?
                        e.state = r.failed :
                        (e.state = r.waiting,
                         null === e.currentRetryMs ?
                             e.currentRetryMs = e.retryMs :
                             e.currentRetryMs *= e.retryBackoff,
                         e.currentRetryMs =
                             Math.max(e.currentRetryMs, e.retryMax),
                         e.retryTimeMs = Date.now() + e.currentRetryMs,
                         e.retryTimeoutId = setTimeout(function() {
                           e.subscribeWithSavedParams()
                         }, e.currentRetryMs)))
             }, t.onmessage = function(n) {
               e.sock === t && e.messages.next(n)
             }, this.sock = t, this.state = r.subscribing
           }, Subscription
        }();
        t.Subscription = o
      },
      241: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.unloaded = 0] = 'unloaded', e[e.loading = 1] = 'loading',
                         e[e.loaded = 2] = 'loaded', e[e.error = 3] = 'error'
        }(t.HistoryItemStatus || (t.HistoryItemStatus = {}));
        var r = function() {
          function HistoryItem(e) {
            Object.assign(this, e)
          }
          return Object.defineProperty(HistoryItem.prototype, 'uniqueId', {
            get: function() {
              if (null === this.dutId && null === this.startTimeMillis) {
                if (null === this.fileName)
                  throw new Error(
                      'History item must have file name, or DUT ID and start time.');
                return this.fileName
              }
              return this.dutId + '$' + this.startTimeMillis
            },
            enumerable: !0,
            configurable: !0
          }),
                 HistoryItem
        }();
        t.HistoryItem = r
      },
      242: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(596), i = n(96), o = n(98), s = n(66), a = n(21), u = n(26),
            l = 'COMPLETED', c = {
              WAITING_FOR_TEST_START: a.TestStatus.waiting,
              RUNNING: a.TestStatus.running
            },
            p = {
              PASS: a.TestStatus.pass,
              FAIL: a.TestStatus.fail,
              ERROR: a.TestStatus.error,
              TIMEOUT: a.TestStatus.timeout,
              ABORTED: a.TestStatus.aborted
            },
            d = {
              PASS: o.MeasurementStatus.pass,
              FAIL: o.MeasurementStatus.fail,
              UNSET: o.MeasurementStatus.unset,
              PARTIALLY_SET: o.MeasurementStatus.unset
            },
            h = {
              PASS: s.PhaseStatus.pass,
              FAIL: s.PhaseStatus.fail,
              SKIP: s.PhaseStatus.skip,
              ERROR: s.PhaseStatus.error
            };
        function makePhase(e, t) {
          var n, i, a = [];
          return e.attachments &&
                     (a = Object.keys(e.attachments).map(function(t) {
                       var n = e.attachments[t];
                       return new r.Attachment({
                         mimeType: n.mimetype,
                         name: t,
                         phaseDescriptorId: e.descriptor_id,
                         phaseName: e.name,
                         sha1: n.sha1
                       })
                     })),
                 u.sortByProperty(a, 'name'),
                 e.measurements ?
                     (n = Object.keys(e.measurements).map(function(t) {
                       var n = e.measurements[t].measured_value, r = null;
                       return void 0 !== n && (r = '' + n), new o.Measurement({
                         name: e.measurements[t].name,
                         validators: e.measurements[t].validators || null,
                         measuredValue: r,
                         status: d[e.measurements[t].outcome]
                       })
                     }),
                      u.sortByProperty(n, 'name')) :
                     n = [],
                     i = t ? s.PhaseStatus.running : h[e.outcome], new s.Phase({
                       attachments: a,
                       descriptorId: e.descriptor_id,
                       endTimeMillis: e.end_time_millis || null,
                       name: e.name,
                       startTimeMillis: e.start_time_millis,
                       status: i,
                       measurements: n
                     })
        }
        function makeLog(e) {
          return new i.LogRecord({
            level: e.level,
            lineNumber: e.lineno,
            loggerName: e.logger_name,
            message: e.message,
            source: e.source,
            timestampMillis: e.timestamp_millis
          })
        }
        t.makeTest = function makeTest(e, t, n, r) {
          if (null === t && null === n || null !== t && null !== n)
            throw new Error(
                'Exactly one of `testId` and `fileName` must be null.');
          var i = e.test_record.log_records.filter(function(e) {
            return 'openhtf.output.web_gui' !== e.logger_name
          });
          i.reverse();
          var o = i.map(makeLog), s = e.test_record.phases.map(function(e) {
            return makePhase(e, !1)
          });
          null !== e.running_phase_state &&
              s.push(makePhase(e.running_phase_state, !0));
          var u, d = s.reduce(function(e, t) {
            return e.concat(t.attachments)
          }, []);
          return u = e.status === l ? p[e.test_record.outcome] : c[e.status],
                 new a.TestState({
                   attachments: d,
                   dutId: e.test_record.dut_id,
                   endTimeMillis: e.test_record.end_time_millis || null,
                   fileName: n,
                   logs: o,
                   name: e.test_record.metadata.test_name,
                   phases: s,
                   plugDescriptors: e.plugs.plug_descriptors,
                   plugStates: e.plugs.plug_states,
                   startTimeMillis: e.test_record.start_time_millis,
                   station: r,
                   status: u,
                   testId: t
                 })
        }, t.makePhaseFromDescriptor = function makePhaseFromDescriptor(e) {
          return new s.Phase({
            attachments: [],
            descriptorId: e.id,
            endTimeMillis: null,
            name: e.name,
            startTimeMillis: null,
            status: s.PhaseStatus.waiting,
            measurements: e.measurements.map(function(e) {
              return new o.Measurement({
                name: e.name,
                validators: null,
                measuredValue: null,
                status: d[e.outcome]
              })
            })
          })
        }
      },
      243: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), n(127), n(129),
            n(138), n(166);
        var r = n(2), i = n(29), o = n(0), s = n(25), a = n(32), u = n(21),
            l = n(97), c = n(240), p = n(26), d = n(99), h = n(242),
            m = function(e) {
              function StationService(t, n, r, i, o) {
                var s = e.call(this, o) || this;
                return s.config = t, s.flashMessage = n, s.historyService = r,
                       s.http = i, s.phaseDescriptorPromise = {},
                       s.testsById = {}, s.testsByStation = {},
                       s.messagesSubscription = null, s
              }
              return __extends(StationService, e),
                     t = StationService,
                     StationService.prototype.subscribe =
                         function(n, r, i, o) {
                       var s = this;
                       void 0 === r && (r = null), void 0 === i && (i = 1),
                           void 0 === o && (o = Number.MAX_VALUE),
                           null !== this.messagesSubscription &&
                           this.messagesSubscription.unsubscribe(),
                           this.messagesSubscription =
                               this.messages
                                   .mergeMap(function(e) {
                                     var r = t.validateResponse(e.data);
                                     console.debug(
                                         'StationService received response:',
                                         r);
                                     var i = s.parseResponse(r, n);
                                     return s.applyPhaseDescriptors(i)
                                   })
                                   .subscribe(function(e) {
                                     s.applyResponse(e, n)
                                   });
                       var a = p.getStationBaseUrl(
                                   this.config.dashboardEnabled, n) +
                           '/sub/station';
                       e.prototype.subscribeToUrl.call(this, a, r, i, o)
                     },
                     StationService.prototype.getTest =
                         function(e) {
                       return this.testsByStation[e.hostPort] || null
                     },
                     StationService.validateResponse =
                         function(e) {
                       return e
                     },
                     StationService.prototype.parseResponse =
                         function(e, t) {
                       var n = h.makeTest(e.state, e.test_uid, null, t);
                       return 'record' === e.type &&
                                  this.historyService.prependItemFromTestState(
                                      t, n),
                              n
                     },
                     StationService.prototype.applyPhaseDescriptors =
                         function(e) {
                       return this.getOrRequestPhaseDescriptors(e)
                           .map(function(t) {
                             var n = e.phases.length;
                             if (0 === n)
                               return (r = e.phases).push.apply(r, t), e;
                             for (var r, i, o = n - 1, s = -1;
                                  o >= 0 && -1 === s;) {
                               for (var a = e.phases[o], u = 0, l = t;
                                    u < l.length; u++) {
                                 var c = l[u];
                                 c.descriptorId === a.descriptorId &&
                                     (s = t.indexOf(c))
                               }
                               o--
                             }
                             return -1 === s && n > 1 ?
                                 (console.error(
                                      'Unrecognized phase descriptor ID.',
                                      e.phases, t),
                                  e) :
                                 ((i = e.phases)
                                      .splice.apply(
                                          i, [o + 2, 0].concat(t.slice(s + 1))),
                                  e)
                           })
                           .catch(function() {
                             return o.Observable.of(e)
                           })
                     },
                     StationService.prototype.getOrRequestPhaseDescriptors =
                         function(e) {
                       var t = this;
                       if (!(e.testId in this.phaseDescriptorPromise)) {
                         var n =
                             p.getTestBaseUrl(this.config.dashboardEnabled, e) +
                             '/phases';
                         this.phaseDescriptorPromise[e.testId] =
                             this.http.get(n)
                                 .toPromise()
                                 .then(function(e) {
                                   return e.json().data.map(
                                       h.makePhaseFromDescriptor)
                                 })
                                 .catch(function(e) {
                                   var n = p.messageFromErrorResponse(e);
                                   return t.flashMessage.error(
                                              'HTTP request for phase descriptors failed.',
                                              n),
                                          Promise.reject(e)
                                 })
                       }
                       return o.Observable.fromPromise(
                           this.phaseDescriptorPromise[e.testId])
                     },
                     StationService.prototype.applyResponse =
                         function(e, t) {
                       if (e.testId in this.testsById) {
                         var n = this.testsById[e.testId];
                         n.status !== e.status &&
                             (e.status === u.TestStatus.error ?
                                  this.flashMessage.error(
                                      'The test exited early due to an error. View the test logs for details.') :
                                  e.status === u.TestStatus.timeout ?
                                  this.flashMessage.warn(
                                      'The test exited early due to timeout.') :
                                  e.status === u.TestStatus.aborted &&
                                      this.flashMessage.warn(
                                          'The test was aborted.')),
                             Object.assign(n, e)
                       } else
                         this.testsById[e.testId] = e,
                         this.testsByStation[t.hostPort] = e
                     },
                     StationService = t = __decorate(
                         [
                           r.Injectable(),
                           __metadata(
                               'design:paramtypes',
                               [
                                 s.ConfigService, a.FlashMessageService,
                                 d.HistoryService, i.Http, l.SockJsService
                               ])
                         ],
                         StationService);
              var t
            }(c.Subscription);
        t.StationService = m
      },
      25: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2),
            i = {server_type: 'dashboard', history_from_disk_enabled: !1},
            o = function() {
              function ConfigService() {
                this.config = i
              }
              return ConfigService.prototype
                         .initialize =
                         function(e) {
                var t = Object.keys(e).filter(function(e) {
                  return !(e in i)
                });
                if (t.length > 0) {
                  console.warn('Received unknown config keys', t);
                  for (var n = 0, r = t; n < r.length; n++) {
                    delete e[r[n]]
                  }
                }
                this.config = {}, Object.assign(this.config, i),
                Object.assign(this.config, e)
              },
  Object.defineProperty(ConfigService.prototype, 'dashboardEnabled', {
    get: function() {
      if (null === this.config)
        throw new Error(
            'Attempted to access config before it was initialized.');
      return 'dashboard' === this.config.server_type
    },
    enumerable: !0,
    configurable: !0
  }),
  ConfigService = __decorate([r.Injectable()], ConfigService)
            }();
        t.ConfigService = o
      },
      26: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            t.devHost = '', t.urlHost = window.location.host.split(':')[0];
        var r = '127.0.0.1';
        function getStationBaseUrl(e, n) {
          return e      ? n.host === r ? 'http://' + t.urlHost + ':' + n.port :
                                         'http://' + n.host + ':' + n.port :
              t.devHost ? 'http://' + n.stationId + ':' + n.port :
                          ''
        }
        t.getStationBaseUrl = getStationBaseUrl,
        t.getTestBaseUrl =
            function getTestBaseUrl(e, t) {
          return getStationBaseUrl(e, t.station) + '/tests/' + t.testId
        },
        t.messageFromErrorResponse =
            function messageFromErrorResponse(e) {
          if (0 === e.status)
            return 'The request failed. See the JavaScript console for more info.';
          var t;
          try {
            t = e.json().error
          } catch (r) {
            var n = e._body;
            t = n ? n.replace(/\\"/g, '"') : JSON.stringify(e)
          }
          return e.status + ' - ' + (e.statusText || '') + '\n\n' + t
        },
        t.messageFromHttpClientErrorResponse =
            function messageFromHttpClientErrorResponse(e) {
          return e.error instanceof ErrorEvent ? e.error.message :
                                                 JSON.stringify(e.error)
        },
        t.sortByProperty = function sortByProperty(e, t, n) {
          void 0 === n && (n = !1), e.sort(function(e, n) {
            return e[t] > n[t] ? 1 : e[t] < n[t] ? -1 : 0
          }),
              n && e.reverse()
        }
      },
      32: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(235), o = function() {
          function FlashMessageService() {
            this.messages = [], this.dismissalJob = null
          }
          return FlashMessageService
                     .prototype.cancelDismissal =
                     function() {
            null !== this.dismissalJob &&
                (clearTimeout(this.dismissalJob), this.dismissalJob = null)
          },
  FlashMessageService.prototype.dismissEarly = function() {
    this.cancelDismissal(), this.dismiss()
  }, FlashMessageService.prototype.startDismissal = function() {
    var e = this;
    this.messages[0].isDismissed ||
        (this.cancelDismissal(), this.dismissalJob = setTimeout(function() {
                                   e.dismiss(), e.dismissalJob = null
                                 }, 5e3))
  }, FlashMessageService.prototype.error = function(e, t) {
    void 0 === t && (t = null),
        this.addMessage(new i.FlashMessage(e, t, i.FlashMessageType.error))
  }, FlashMessageService.prototype.warn = function(e, t) {
    void 0 === t && (t = null),
        this.addMessage(new i.FlashMessage(e, t, i.FlashMessageType.warn))
  }, FlashMessageService.prototype.addMessage = function(e) {
    this.messages.push(e), 1 === this.messages.length && this.startDismissal()
  }, FlashMessageService.prototype.dismiss = function() {
    var e = this;
    this.messages[0].isDismissed = !0, setTimeout(function() {
      e.messages.shift(), e.messages.length > 0 && e.startDismissal()
    }, 500)
  }, FlashMessageService = __decorate([r.Injectable()], FlashMessageService)
        }();
        t.FlashMessageService = o
      },
      48: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            n.d(t, 'AnimationBuilder', function() {
              return r
            }), n.d(t, 'AnimationFactory', function() {
              return i
            }), n.d(t, 'AUTO_STYLE', function() {
              return o
            }), n.d(t, 'animate', function() {
              return animate
            }), n.d(t, 'animateChild', function() {
              return animateChild
            }), n.d(t, 'animation', function() {
              return animation
            }), n.d(t, 'group', function() {
              return group
            }), n.d(t, 'keyframes', function() {
              return keyframes
            }), n.d(t, 'query', function() {
              return query
            }), n.d(t, 'sequence', function() {
              return sequence
            }), n.d(t, 'stagger', function() {
              return stagger
            }), n.d(t, 'state', function() {
              return state
            }), n.d(t, 'style', function() {
              return style
            }), n.d(t, 'transition', function() {
              return transition
            }), n.d(t, 'trigger', function() {
              return trigger
            }), n.d(t, 'useAnimation', function() {
              return useAnimation
            }), n.d(t, 'NoopAnimationPlayer', function() {
              return s
            }), n.d(t, 'ɵAnimationGroupPlayer', function() {
              return a
            }), n.d(t, 'ɵPRE_STYLE', function() {
              return u
            });
        /**
         * @license Angular v4.4.6
         * (c) 2010-2017 Google, Inc. https://angular.io/
         * License: MIT
         */
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var r = function() {
          function AnimationBuilder() {}
          return AnimationBuilder.prototype.build = function(e) {},
                 AnimationBuilder
        }(), i = function() {
          function AnimationFactory() {}
          return AnimationFactory.prototype.create = function(e, t) {},
                 AnimationFactory
        }(), o = '*';
        function trigger(e, t) {
          return {
            type: 7, name: e, definitions: t, options: {}
          }
        }
        function animate(e, t) {
          return void 0 === t && (t = null), {
            type: 4, styles: t, timings: e
          }
        }
        function group(e, t) {
          return void 0 === t && (t = null), {
            type: 3, steps: e, options: t
          }
        }
        function sequence(e, t) {
          return void 0 === t && (t = null), {
            type: 2, steps: e, options: t
          }
        }
        function style(e) {
          return {
            type: 6, styles: e, offset: null
          }
        }
        function state(e, t, n) {
          return {
            type: 0, name: e, styles: t, options: n
          }
        }
        function keyframes(e) {
          return {
            type: 5, steps: e
          }
        }
        function transition(e, t, n) {
          return void 0 === n && (n = null), {
            type: 1, expr: e, animation: t, options: n
          }
        }
        function animation(e, t) {
          return void 0 === t && (t = null), {
            type: 8, animation: e, options: t
          }
        }
        function animateChild(e) {
          return void 0 === e && (e = null), {
            type: 9, options: e
          }
        }
        function useAnimation(e, t) {
          return void 0 === t && (t = null), {
            type: 10, animation: e, options: t
          }
        }
        function query(e, t, n) {
          return void 0 === n && (n = null), {
            type: 11, selector: e, animation: t, options: n
          }
        }
        function stagger(e, t) {
          return {
            type: 12, timings: e, animation: t
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         * @param {?} cb
         * @return {?}
         */
        function scheduleMicroTask(e) {
          Promise.resolve(null).then(e)
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var s =
                function() {
          function NoopAnimationPlayer() {
            this._onDoneFns = [], this._onStartFns = [],
            this._onDestroyFns = [], this._started = !1, this._destroyed = !1,
            this._finished = !1, this.parentPlayer = null, this.totalTime = 0
          }
          return NoopAnimationPlayer.prototype._onFinish = function() {
            this._finished ||
                (this._finished = !0, this._onDoneFns.forEach(function(e) {
                  return e()
                }),
                 this._onDoneFns = [])
          }, NoopAnimationPlayer.prototype.onStart = function(e) {
            this._onStartFns.push(e)
          }, NoopAnimationPlayer.prototype.onDone = function(e) {
            this._onDoneFns.push(e)
          }, NoopAnimationPlayer.prototype.onDestroy = function(e) {
            this._onDestroyFns.push(e)
          }, NoopAnimationPlayer.prototype.hasStarted = function() {
            return this._started
          }, NoopAnimationPlayer.prototype.init = function() {
          }, NoopAnimationPlayer.prototype.play = function() {
            this.hasStarted() || (this.triggerMicrotask(), this._onStart()),
                this._started = !0
          }, NoopAnimationPlayer.prototype.triggerMicrotask = function() {
            var e = this;
            scheduleMicroTask(function() {
              return e._onFinish()
            })
          }, NoopAnimationPlayer.prototype._onStart = function() {
            this._onStartFns.forEach(function(e) {
              return e()
            }),
                this._onStartFns = []
          }, NoopAnimationPlayer.prototype.pause = function() {
          }, NoopAnimationPlayer.prototype.restart = function() {
          }, NoopAnimationPlayer.prototype.finish = function() {
            this._onFinish()
          }, NoopAnimationPlayer.prototype.destroy = function() {
            this._destroyed ||
                (this._destroyed = !0, this.hasStarted() || this._onStart(),
                 this.finish(), this._onDestroyFns.forEach(function(e) {
                   return e()
                 }),
                 this._onDestroyFns = [])
          }, NoopAnimationPlayer.prototype.reset = function() {
          }, NoopAnimationPlayer.prototype.setPosition = function(e) {
          }, NoopAnimationPlayer.prototype.getPosition = function() {
            return 0
          }, NoopAnimationPlayer
        }(),
            a = function() {
              function AnimationGroupPlayer(e) {
                var t = this;
                this._players = e, this._onDoneFns = [], this._onStartFns = [],
                this._finished = !1, this._started = !1, this._destroyed = !1,
                this._onDestroyFns = [], this.parentPlayer = null,
                this.totalTime = 0;
                var n = 0, r = 0, i = 0, o = this._players.length;
                0 == o ? scheduleMicroTask(function() {
                  return t._onFinish()
                }) :
                         this._players.forEach(function(e) {
                           e.parentPlayer = t, e.onDone(function() {
                             ++n >= o && t._onFinish()
                           }),
                           e.onDestroy(function() {
                             ++r >= o && t._onDestroy()
                           }),
                           e.onStart(function() {
                             ++i >= o && t._onStart()
                           })
                         }),
                    this.totalTime = this._players.reduce(function(e, t) {
                      return Math.max(e, t.totalTime)
                    }, 0)
              }
              return AnimationGroupPlayer.prototype._onFinish =
                         function() {
                this._finished ||
                    (this._finished = !0, this._onDoneFns.forEach(function(e) {
                      return e()
                    }),
                     this._onDoneFns = [])
              },
                     AnimationGroupPlayer.prototype.init =
                         function() {
                       this._players.forEach(function(e) {
                         return e.init()
                       })
                     },
                     AnimationGroupPlayer.prototype.onStart =
                         function(e) {
                       this._onStartFns.push(e)
                     },
                     AnimationGroupPlayer.prototype._onStart =
                         function() {
                       this.hasStarted() ||
                           (this._onStartFns.forEach(function(e) {
                             return e()
                           }),
                            this._onStartFns = [], this._started = !0)
                     },
                     AnimationGroupPlayer.prototype.onDone =
                         function(e) {
                       this._onDoneFns.push(e)
                     },
                     AnimationGroupPlayer.prototype.onDestroy =
                         function(e) {
                       this._onDestroyFns.push(e)
                     },
                     AnimationGroupPlayer.prototype.hasStarted =
                         function() {
                       return this._started
                     },
                     AnimationGroupPlayer.prototype.play =
                         function() {
                       this.parentPlayer || this.init(), this._onStart(),
                           this._players.forEach(function(e) {
                             return e.play()
                           })
                     },
                     AnimationGroupPlayer.prototype.pause =
                         function() {
                       this._players.forEach(function(e) {
                         return e.pause()
                       })
                     },
                     AnimationGroupPlayer.prototype.restart =
                         function() {
                       this._players.forEach(function(e) {
                         return e.restart()
                       })
                     },
                     AnimationGroupPlayer.prototype.finish =
                         function() {
                       this._onFinish(), this._players.forEach(function(e) {
                         return e.finish()
                       })
                     },
                     AnimationGroupPlayer.prototype.destroy =
                         function() {
                       this._onDestroy()
                     },
                     AnimationGroupPlayer.prototype._onDestroy =
                         function() {
                       this._destroyed ||
                           (this._destroyed = !0, this._onFinish(),
                            this._players.forEach(function(e) {
                              return e.destroy()
                            }),
                            this._onDestroyFns.forEach(function(e) {
                              return e()
                            }),
                            this._onDestroyFns = [])
                     },
                     AnimationGroupPlayer.prototype.reset =
                         function() {
                       this._players.forEach(function(e) {
                         return e.reset()
                       }),
                           this._destroyed = !1, this._finished = !1,
                           this._started = !1
                     },
                     AnimationGroupPlayer.prototype.setPosition =
                         function(e) {
                       var t = e * this.totalTime;
                       this._players.forEach(function(e) {
                         var n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
                         e.setPosition(n)
                       })
                     },
                     AnimationGroupPlayer.prototype.getPosition =
                         function() {
                       var e = 0;
                       return this._players.forEach(function(t) {
                         var n = t.getPosition();
                         e = Math.min(n, e)
                       }),
                              e
                     },
                     Object.defineProperty(
                         AnimationGroupPlayer.prototype, 'players', {
                           get: function() {
                             return this._players
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     AnimationGroupPlayer.prototype.beforeDestroy = function() {
                       this.players.forEach(function(e) {
                         e.beforeDestroy && e.beforeDestroy()
                       })
                     }, AnimationGroupPlayer
            }(), u = '!';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      },
      49: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.online = 9] = 'online', e[e.unreachable = 10] = 'unreachable'
        }(t.StationStatus || (t.StationStatus = {}));
        var r = function() {
          return function Station(e) {
            Object.assign(this, e)
          }
        }();
        t.Station = r
      },
      559: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(111), o = n(560);
        function main() {
          return i.platformBrowserDynamic()
              .bootstrapModule(o.AppModule)
              .then(function(e) {
                return e
              })
        }
        r.enableProdMode(), t.main = main,
                            'complete' === document.readyState ?
            main() :
            document.addEventListener('DOMContentLoaded', main)
      },
      560: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(561), o = n(27), s = n(233), a = n(29), u = n(234),
            l = n(563), c = n(567), p = n(236), d = n(94), h = n(588),
            m = n(218), f = function() {
              function AppModule(e) {
                this.appRef = e
              }
              return AppModule.prototype.hmrOnInit =
                         function(e) {
                console.log('HMR store', e)
              },
                     AppModule.prototype.hmrOnDestroy =
                         function(e) {
                       var t = this.appRef.components.map(function(e) {
                         return e.location.nativeElement
                       });
                       e.disposeOldHosts = m.createNewHosts(t),
                       m.removeNgStyles()
                     },
                     AppModule.prototype.hmrAfterDestroy =
                         function(e) {
                       e.disposeOldHosts(), delete e.disposeOldHosts
                     },
                     AppModule = __decorate(
                         [
                           r.NgModule({
                             imports: [
                               i.BrowserAnimationsModule, o.BrowserModule,
                               s.HttpClientModule, a.HttpModule, u.FormsModule,
                               c.CoreModule, p.PlugsModule, d.SharedModule,
                               h.StationsModule
                             ],
                             declarations: [l.AppComponent],
                             providers: [],
                             bootstrap: [l.AppComponent]
                           }),
                           __metadata('design:paramtypes', [r.ApplicationRef])
                         ],
                         AppModule)
            }();
        t.AppModule = f
      },
      561: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            n.d(t, 'BrowserAnimationsModule', function() {
              return v
            }), n.d(t, 'NoopAnimationsModule', function() {
              return b
            }), n.d(t, 'ɵBrowserAnimationBuilder', function() {
              return u
            }), n.d(t, 'ɵBrowserAnimationFactory', function() {
              return l
            }), n.d(t, 'ɵAnimationRenderer', function() {
              return h
            }), n.d(t, 'ɵAnimationRendererFactory', function() {
              return p
            }), n.d(t, 'ɵa', function() {
              return d
            }), n.d(t, 'ɵf', function() {
              return y
            }), n.d(t, 'ɵg', function() {
              return g
            }), n.d(t, 'ɵb', function() {
              return m
            }), n.d(t, 'ɵd', function() {
              return instantiateDefaultStyleNormalizer
            }), n.d(t, 'ɵe', function() {
              return instantiateRendererFactory
            }), n.d(t, 'ɵc', function() {
              return instantiateSupportedAnimationDriver
            });
        var r = n(16), i = n(2), o = n(27), s = n(48), a = n(562),
            u = function(e) {
              function BrowserAnimationBuilder(t, n) {
                var r = e.call(this) || this;
                r._nextAnimationId = 0;
                var o = {
                  id: '0',
                  encapsulation: i.ViewEncapsulation.None,
                  styles: [],
                  data: {animation: []}
                };
                return r._renderer = t.createRenderer(n.body, o), r
              }
              return r.a(BrowserAnimationBuilder, e),
                     BrowserAnimationBuilder.prototype.build = function(e) {
                       var t = this._nextAnimationId.toString();
                       this._nextAnimationId++;
                       var n = Array.isArray(e) ? Object(s.sequence)(e) : e;
                       return issueAnimationCommand(
                                  this._renderer, null, t, 'register', [n]),
                              new l(t, this._renderer)
                     }, BrowserAnimationBuilder
            }(s.AnimationBuilder);
        u.decorators = [{type: i.Injectable}], u.ctorParameters = function() {
          return [
            {type: i.RendererFactory2},
            {type: void 0, decorators: [{type: i.Inject, args: [o.DOCUMENT]}]}
          ]
        };
        var l = function(e) {
          function BrowserAnimationFactory(t, n) {
            var r = e.call(this) || this;
            return r._id = t, r._renderer = n, r
          }
          return r.a(BrowserAnimationFactory, e),
                 BrowserAnimationFactory.prototype.create = function(e, t) {
                   return new c(this._id, e, t || {}, this._renderer)
                 }, BrowserAnimationFactory
        }(s.AnimationFactory), c = function() {
          function RendererAnimationPlayer(e, t, n, r) {
            this.id = e, this.element = t, this._renderer = r,
            this.parentPlayer = null, this._started = !1, this.totalTime = 0,
            this._command('create', n)
          }
          return RendererAnimationPlayer.prototype._listen = function(e, t) {
            return this._renderer.listen(
                this.element, '@@' + this.id + ':' + e, t)
          }, RendererAnimationPlayer.prototype._command = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return issueAnimationCommand(
                this._renderer, this.element, this.id, e, t)
          }, RendererAnimationPlayer.prototype.onDone = function(e) {
            this._listen('done', e)
          }, RendererAnimationPlayer.prototype.onStart = function(e) {
            this._listen('start', e)
          }, RendererAnimationPlayer.prototype.onDestroy = function(e) {
            this._listen('destroy', e)
          }, RendererAnimationPlayer.prototype.init = function() {
            this._command('init')
          }, RendererAnimationPlayer.prototype.hasStarted = function() {
            return this._started
          }, RendererAnimationPlayer.prototype.play = function() {
            this._command('play'), this._started = !0
          }, RendererAnimationPlayer.prototype.pause = function() {
            this._command('pause')
          }, RendererAnimationPlayer.prototype.restart = function() {
            this._command('restart')
          }, RendererAnimationPlayer.prototype.finish = function() {
            this._command('finish')
          }, RendererAnimationPlayer.prototype.destroy = function() {
            this._command('destroy')
          }, RendererAnimationPlayer.prototype.reset = function() {
            this._command('reset')
          }, RendererAnimationPlayer.prototype.setPosition = function(e) {
            this._command('setPosition', e)
          }, RendererAnimationPlayer.prototype.getPosition = function() {
            return 0
          }, RendererAnimationPlayer
        }();
        function issueAnimationCommand(e, t, n, r, i) {
          return e.setProperty(t, '@@' + n + ':' + r, i)
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var p = function() {
          function AnimationRendererFactory(e, t, n) {
            this.delegate = e, this.engine = t, this._zone = n,
            this._currentId = 0, this._microtaskId = 1,
            this._animationCallbacksBuffer = [], this._rendererCache = new Map,
            this._cdRecurDepth = 0, t.onRemovalComplete = function(e, t) {
              t && t.parentNode(e) && t.removeChild(e.parentNode, e)
            }
          }
          return AnimationRendererFactory.prototype
                     .createRenderer =
                     function(e, t) {
            var n = this, r = this.delegate.createRenderer(e, t);
            if (!(e && t && t.data && t.data.animation)) {
              var i = this._rendererCache.get(r);
              return i ||
                         (i = new d('', r, this.engine),
                          this._rendererCache.set(r, i)),
                     i
            }
            var o = t.id, s = t.id + '-' + this._currentId;
            return this._currentId++, this.engine.register(s, e),
                   t.data.animation.forEach(function(t) {
                     return n.engine.registerTrigger(o, s, e, t.name, t)
                   }),
                   new h(this, s, r, this.engine)
          },
           AnimationRendererFactory.prototype.begin =
                     function() {
             this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
           },
           AnimationRendererFactory.prototype._scheduleCountTask =
                     function() {
             var e = this;
             Zone.current.scheduleMicroTask(
                 'incremenet the animation microtask', function() {
                   return e._microtaskId++
                 })
           },
           AnimationRendererFactory.prototype.scheduleListenerCallback =
                     function(e, t, n) {
             var r = this;
             e >= 0 && e < this._microtaskId ?
                 this._zone.run(function() {
                   return t(n)
                 }) :
                 (0 == this._animationCallbacksBuffer.length &&
                      Promise.resolve(null).then(function() {
                        r._zone.run(function() {
                          r._animationCallbacksBuffer.forEach(function(e) {
                            (0, e[0])(e[1])
                          }),
                              r._animationCallbacksBuffer = []
                        })
                      }),
                  this._animationCallbacksBuffer.push([t, n]))
           },
           AnimationRendererFactory.prototype.end =
                     function() {
             var e = this;
             this._cdRecurDepth--,
                 0 == this._cdRecurDepth &&
                 this._zone.runOutsideAngular(function() {
                   e._scheduleCountTask(), e.engine.flush(e._microtaskId)
                 }),
                 this.delegate.end && this.delegate.end()
           },
           AnimationRendererFactory.prototype.whenRenderingDone = function() {
             return this.engine.whenRenderingDone()
           }, AnimationRendererFactory
        }();
        p.decorators = [{type: i.Injectable}], p.ctorParameters = function() {
          return [{type: i.RendererFactory2}, {type: a.b}, {type: i.NgZone}]
        };
        var
            d =
                function() {
              function BaseAnimationRenderer(e, t, n) {
                this.namespaceId = e, this.delegate = t, this.engine = n,
                this.destroyNode = this.delegate.destroyNode ? function(e) {
                  return t.destroyNode(e)
                } : null
              }
              return Object.defineProperty(
                         BaseAnimationRenderer.prototype, 'data', {
                           get: function() {
                             return this.delegate.data
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     BaseAnimationRenderer
                         .prototype.destroy =
                         function() {
                       this.engine.destroy(this.namespaceId, this.delegate),
                           this.delegate.destroy()
                     },
    BaseAnimationRenderer.prototype.createElement = function(e, t) {
      return this.delegate.createElement(e, t)
    }, BaseAnimationRenderer.prototype.createComment = function(e) {
      return this.delegate.createComment(e)
    }, BaseAnimationRenderer.prototype.createText = function(e) {
      return this.delegate.createText(e)
    }, BaseAnimationRenderer.prototype.appendChild = function(e, t) {
      this.delegate.appendChild(e, t),
          this.engine.onInsert(this.namespaceId, t, e, !1)
    }, BaseAnimationRenderer.prototype.insertBefore = function(e, t, n) {
      this.delegate.insertBefore(e, t, n),
          this.engine.onInsert(this.namespaceId, t, e, !0)
    }, BaseAnimationRenderer.prototype.removeChild = function(e, t) {
      this.engine.onRemove(this.namespaceId, t, this.delegate)
    }, BaseAnimationRenderer.prototype.selectRootElement = function(e) {
      return this.delegate.selectRootElement(e)
    }, BaseAnimationRenderer.prototype.parentNode = function(e) {
      return this.delegate.parentNode(e)
    }, BaseAnimationRenderer.prototype.nextSibling = function(e) {
      return this.delegate.nextSibling(e)
    }, BaseAnimationRenderer.prototype.setAttribute = function(e, t, n, r) {
      this.delegate.setAttribute(e, t, n, r)
    }, BaseAnimationRenderer.prototype.removeAttribute = function(e, t, n) {
      this.delegate.removeAttribute(e, t, n)
    }, BaseAnimationRenderer.prototype.addClass = function(e, t) {
      this.delegate.addClass(e, t)
    }, BaseAnimationRenderer.prototype.removeClass = function(e, t) {
      this.delegate.removeClass(e, t)
    }, BaseAnimationRenderer.prototype.setStyle = function(e, t, n, r) {
      this.delegate.setStyle(e, t, n, r)
    }, BaseAnimationRenderer.prototype.removeStyle = function(e, t, n) {
      this.delegate.removeStyle(e, t, n)
    }, BaseAnimationRenderer.prototype.setProperty = function(e, t, n) {
      '@' == t.charAt(0) && '@.disabled' == t ?
          this.disableAnimations(e, !!n) :
          this.delegate.setProperty(e, t, n)
    }, BaseAnimationRenderer.prototype.setValue = function(e, t) {
      this.delegate.setValue(e, t)
    }, BaseAnimationRenderer.prototype.listen = function(e, t, n) {
      return this.delegate.listen(e, t, n)
    }, BaseAnimationRenderer.prototype.disableAnimations = function(e, t) {
      this.engine.disableAnimations(e, t)
    }, BaseAnimationRenderer
            }(),
            h = function(e) {
              function AnimationRenderer(t, n, r, i) {
                var o = e.call(this, n, r, i) || this;
                return o.factory = t, o.namespaceId = n, o
              }
              return r.a(AnimationRenderer, e),
                     AnimationRenderer
                         .prototype.setProperty =
                         function(e, t, n) {
                       '@' == t.charAt(0) ?
                           '.' == t.charAt(1) && '@.disabled' == t ?
                           (n = void 0 === n || !!n,
                            this.disableAnimations(e, n)) :
                           this.engine.process(
                               this.namespaceId, e, t.substr(1), n) :
                           this.delegate.setProperty(e, t, n)
                     },
        AnimationRenderer.prototype.listen = function(e, t, n) {
          var r, i = this;
          if ('@' == t.charAt(0)) {
            var o = function resolveElementFromTarget(e) {
              switch (e) {
                case 'body':
                  return document.body;
                case 'document':
                  return document;
                case 'window':
                  return window;
                default:
                  return e
              }
            }(e), s = t.substr(1), a = '';
            return '@' != s.charAt(0) &&
                       (s =
                            (r =
                                 function parseTriggerCallbackName(e) {
                                   var t = e.indexOf('.'),
                                       n = e.substring(0, t),
                                       r = e.substr(t + 1);
                                   return [n, r]
                                 }
                             /**
                              * @license
                              * Copyright Google Inc. All Rights Reserved.
                              *
                              * Use of this source code is governed by an
                              * MIT-style license that can be found in the
                              * LICENSE file at https://angular.io/license
                              */
                             (s))[0],
                        a = r[1]),
                   this.engine.listen(this.namespaceId, o, s, a, function(e) {
                     var t = e._data || -1;
                     i.factory.scheduleListenerCallback(t, n, e)
                   })
          }
          return this.delegate.listen(e, t, n)
        }, AnimationRenderer
            }(d);
        var m = function(e) {
          function InjectableAnimationEngine(t, n) {
            return e.call(this, t, n) || this
          }
          return r.a(InjectableAnimationEngine, e), InjectableAnimationEngine
        }(a.b);
        function instantiateSupportedAnimationDriver() {
          return Object(a.g)() ? new a.e : new a.d
        }
        function instantiateDefaultStyleNormalizer() {
          return new a.f
        }
        function instantiateRendererFactory(e, t, n) {
          return new p(e, t, n)
        }
        m.decorators = [{type: i.Injectable}], m.ctorParameters = function() {
          return [{type: a.a}, {type: a.c}]
        };
        var f =
                [
                  {provide: s.AnimationBuilder, useClass: u},
                  {provide: a.c, useFactory: instantiateDefaultStyleNormalizer},
                  {provide: a.b, useClass: m}, {
                    provide: i.RendererFactory2,
                    useFactory: instantiateRendererFactory,
                    deps: [o['ɵDomRendererFactory2'], a.b, i.NgZone]
                  }
                ],
            y = [{
                  provide: a.a,
                  useFactory: instantiateSupportedAnimationDriver
                }].concat(f),
            g = [{provide: a.a, useClass: a.d}].concat(f), v = function() {
              return function BrowserAnimationsModule() {}
            }();
        v.decorators = [{
          type: i.NgModule,
          args: [{exports: [o.BrowserModule], providers: y}]
        }],
        v.ctorParameters = function() {
          return []
        };
        var b = function() {
          return function NoopAnimationsModule() {}
        }();
        b.decorators = [{
          type: i.NgModule,
          args: [{exports: [o.BrowserModule], providers: g}]
        }],
        b.ctorParameters = function() {
          return []
        }
      },
      562: function(e, t, n) {
        'use strict';
        n.d(t, 'a', function() {
          return m
        }), n.d(t, 'c', function() {
          return V
        }), n.d(t, 'f', function() {
          return k
        }), n.d(t, 'd', function() {
          return h
        }), n.d(t, 'b', function() {
          return re
        }), n.d(t, 'e', function() {
          return oe
        }), n.d(t, 'g', function() {
          return supportsWebAnimations
        });
        var r = n(16), i = n(48);
        /**
         * @license Angular v4.4.6
         * (c) 2010-2017 Google, Inc. https://angular.io/
         * License: MIT
         */
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function optimizeGroupPlayer(e) {
          switch (e.length) {
            case 0:
              return new i.NoopAnimationPlayer;
            case 1:
              return e[0];
            default:
              return new i['ɵAnimationGroupPlayer'](e)
          }
        }
        function normalizeKeyframes(e, t, n, r, o, s) {
          void 0 === o && (o = {}), void 0 === s && (s = {});
          var a = [], u = [], l = -1, c = null;
          if (r.forEach(function(e) {
                var n = e.offset, r = n == l, p = r && c || {};
                Object.keys(e).forEach(function(n) {
                  var r = n, u = e[n];
                  if ('offset' !== n)
                    switch (r = t.normalizePropertyName(r, a), u) {
                      case i['ɵPRE_STYLE']:
                        u = o[n];
                        break;
                      case i.AUTO_STYLE:
                        u = s[n];
                        break;
                      default:
                        u = t.normalizeStyleValue(n, r, u, a)
                    }
                  p[r] = u
                }),
                    r || u.push(p), c = p, l = n
              }),
              a.length) {
            throw new Error(
                'Unable to animate due to the following errors:\n - ' +
                a.join('\n - '))
          }
          return u
        }
        function listenOnPlayer(e, t, n, r) {
          switch (t) {
            case 'start':
              e.onStart(function() {
                return r(n && copyAnimationEvent(n, 'start', e.totalTime))
              });
              break;
            case 'done':
              e.onDone(function() {
                return r(n && copyAnimationEvent(n, 'done', e.totalTime))
              });
              break;
            case 'destroy':
              e.onDestroy(function() {
                return r(n && copyAnimationEvent(n, 'destroy', e.totalTime))
              })
          }
        }
        function copyAnimationEvent(e, t, n) {
          var r = makeAnimationEvent(
                  e.element, e.triggerName, e.fromState, e.toState,
                  t || e.phaseName, null == n ? e.totalTime : n),
              i = e._data;
          return null != i && (r._data = i), r
        }
        function makeAnimationEvent(e, t, n, r, i, o) {
          return void 0 === i && (i = ''), void 0 === o && (o = 0), {
            element: e, triggerName: t, fromState: n, toState: r, phaseName: i,
                totalTime: o
          }
        }
        function getOrSetAsInMap(e, t, n) {
          var r;
          return e instanceof Map ? (r = e.get(t)) || e.set(t, r = n) :
                                    (r = e[t]) || (r = e[t] = n),
                 r
        }
        function parseTimelineCommand(e) {
          var t = e.indexOf(':');
          return [e.substring(1, t), e.substr(t + 1)]
        }
        var o = function(e, t) {
          return !1
        }, s = function(e, t) {
          return !1
        }, a = function(e, t, n) {
          return []
        };
        if ('undefined' != typeof Element) {
          if (o = function(e, t) {
                return e.contains(t)
              }, Element.prototype.matches)
            s = function(e, t) {
              return e.matches(t)
            };
          else {
            var u = Element.prototype,
                l = u.matchesSelector || u.mozMatchesSelector ||
                u.msMatchesSelector || u.oMatchesSelector ||
                u.webkitMatchesSelector;
            l && (s = function(e, t) {
              return l.apply(e, [t])
            })
          }
          a = function(e, t, n) {
            var r = [];
            if (n)
              r.push.apply(r, e.querySelectorAll(t));
            else {
              var i = e.querySelector(t);
              i && r.push(i)
            }
            return r
          }
        }
        var c = s, p = o, d = a, h = function() {
          function NoopAnimationDriver() {}
          return NoopAnimationDriver
                     .prototype.matchesElement =
                     function(e, t) {
            return c(e, t)
          },
  NoopAnimationDriver.prototype.containsElement = function(e, t) {
    return p(e, t)
  }, NoopAnimationDriver.prototype.query = function(e, t, n) {
    return d(e, t, n)
  }, NoopAnimationDriver.prototype.computeStyle = function(e, t, n) {
    return n || ''
  }, NoopAnimationDriver.prototype.animate = function(e, t, n, r, o, s) {
    return void 0 === s && (s = []), new i.NoopAnimationPlayer
  }, NoopAnimationDriver
        }(), m = function() {
          return function AnimationDriver() {}
        }();
        m.NOOP = new h;
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var f = 1e3, y = '.ng-enter', g = '.ng-leave', v = '.ng-trigger',
            b = '.ng-animating';
        function resolveTimingValue(e) {
          if ('number' == typeof e) return e;
          var t = e.match(/^(-?[\.\d]+)(m?s)/);
          return !t || t.length < 2 ?
              0 :
              _convertTimeValueToMS(parseFloat(t[1]), t[2])
        }
        function _convertTimeValueToMS(e, t) {
          switch (t) {
            case 's':
              return e * f;
            default:
              return e
          }
        }
        function resolveTiming(e, t, n) {
          return e.hasOwnProperty('duration') ?
              e :
              function parseTimeExpression(e, t, n) {
                var r, i = 0, o = '';
                if ('string' == typeof e) {
                  var s = e.match(
                      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                  if (null === s)
                    return t.push(
                               'The provided timing value "' + e +
                               '" is invalid.'),
                           {duration: 0, delay: 0, easing: ''};
                  r = _convertTimeValueToMS(parseFloat(s[1]), s[2]);
                  var a = s[3];
                  null != a &&
                      (i = _convertTimeValueToMS(
                           Math.floor(parseFloat(a)), s[4]));
                  var u = s[5];
                  u && (o = u)
                } else
                  r = e;
                if (!n) {
                  var l = !1, c = t.length;
                  r < 0 &&
                      (t.push(
                           'Duration values below 0 are not allowed for this animation step.'),
                       l = !0),
                      i < 0 &&
                      (t.push(
                           'Delay values below 0 are not allowed for this animation step.'),
                       l = !0),
                      l &&
                      t.splice(
                          c, 0,
                          'The provided timing value "' + e + '" is invalid.')
                }
                return {
                  duration: r, delay: i, easing: o
                }
              }(e, t, n)
        }
        function copyObj(e, t) {
          return void 0 === t && (t = {}), Object.keys(e).forEach(function(n) {
            t[n] = e[n]
          }),
                 t
        }
        function normalizeStyles(e) {
          var t = {};
          return Array.isArray(e) ? e.forEach(function(e) {
            return copyStyles(e, !1, t)
          }) :
                                    copyStyles(e, !1, t),
                 t
        }
        function copyStyles(e, t, n) {
          if (void 0 === n && (n = {}), t)
            for (var r in e) n[r] = e[r];
          else
            copyObj(e, n);
          return n
        }
        function setStyles(e, t) {
          e.style && Object.keys(t).forEach(function(n) {
            var r = dashCaseToCamelCase(n);
            e.style[r] = t[n]
          })
        }
        function eraseStyles(e, t) {
          e.style && Object.keys(t).forEach(function(t) {
            var n = dashCaseToCamelCase(t);
            e.style[n] = ''
          })
        }
        function normalizeAnimationEntry(e) {
          return Array.isArray(e) ?
              1 == e.length ? e[0] : Object(i.sequence)(e) :
              e
        }
        var _ = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
        function extractStyleParams(e) {
          var t = [];
          if ('string' == typeof e) {
            for (var n = e.toString(), r = void 0; r = _.exec(n);) t.push(r[1]);
            _.lastIndex = 0
          }
          return t
        }
        function interpolateParams(e, t, n) {
          var r = e.toString(), i = r.replace(_, function(e, r) {
            var i = t[r];
            return t.hasOwnProperty(r) ||
                       (n.push(
                            'Please provide a value for the animation param ' +
                            r),
                        i = ''),
                   i.toString()
          });
          return i == r ? e : i
        }
        function iteratorToArray(e) {
          for (var t = [], n = e.next(); !n.done;)
            t.push(n.value), n = e.next();
          return t
        }
        var S = /-+([a-z0-9])/g;
        function dashCaseToCamelCase(e) {
          return e.replace(S, function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return e[1].toUpperCase()
          })
        }
        function visitDslNode(e, t, n) {
          switch (t.type) {
            case 7:
              return e.visitTrigger(t, n);
            case 0:
              return e.visitState(t, n);
            case 1:
              return e.visitTransition(t, n);
            case 2:
              return e.visitSequence(t, n);
            case 3:
              return e.visitGroup(t, n);
            case 4:
              return e.visitAnimate(t, n);
            case 5:
              return e.visitKeyframes(t, n);
            case 6:
              return e.visitStyle(t, n);
            case 8:
              return e.visitReference(t, n);
            case 9:
              return e.visitAnimateChild(t, n);
            case 10:
              return e.visitAnimateRef(t, n);
            case 11:
              return e.visitQuery(t, n);
            case 12:
              return e.visitStagger(t, n);
            default:
              throw new Error(
                  'Unable to resolve animation metadata node #' + t.type)
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var C = '*';
        function parseTransitionExpr(e, t) {
          var n = [];
          return 'string' == typeof e ? e.split(/\s*,\s*/).forEach(function(e) {
            return function parseInnerTransitionStr(e, t, n) {
              ':' == e[0] && (e = function parseAnimationAlias(e, t) {
                switch (e) {
                  case ':enter':
                    return 'void => *';
                  case ':leave':
                    return '* => void';
                  default:
                    return t.push(
                               'The transition alias value "' + e +
                               '" is not supported'),
                           '* => *'
                }
              }(e, n));
              var r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
              if (null == r || r.length < 4)
                return n.push(
                           'The provided transition expression "' + e +
                           '" is not supported'),
                       t;
              var i = r[1], o = r[2], s = r[3];
              t.push(makeLambdaFromStates(i, s));
              var a = i == C && s == C;
              '<' != o[0] || a || t.push(makeLambdaFromStates(s, i))
            }(e, n, t)
          }) :
                                        n.push(e),
                 n
        }
        var A = new Set;
        A.add('true'), A.add('1');
        var T = new Set;
        function makeLambdaFromStates(e, t) {
          var n = A.has(e) || T.has(e), r = A.has(t) || T.has(t);
          return function(i, o) {
            var s = e == C || e == i, a = t == C || t == o;
            return !s && n && 'boolean' == typeof i &&
                       (s = i ? A.has(e) : T.has(e)),
                   !a && r && 'boolean' == typeof o &&
                       (a = o ? A.has(t) : T.has(t)),
                   s && a
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        T.add('false'),
            T.add('0');
        var w = ':self', E = new RegExp('s*' + w + 's*,?', 'g');
        function buildAnimationAst(e, t) {
          return (new I).build(e, t)
        }
        var P = new RegExp(':leave', 'g'), O = new RegExp(':enter', 'g'), I = function() {
          function AnimationAstBuilderVisitor() {}
          return AnimationAstBuilderVisitor.prototype
                     .build =
                     function(e, t) {
            var n = new N(t);
            return this._resetContextStyleTimingState(n),
                   visitDslNode(this, normalizeAnimationEntry(e), n)
          },
           AnimationAstBuilderVisitor.prototype._resetContextStyleTimingState =
                     function(e) {
             e.currentQuerySelector = '', e.collectedStyles = {},
             e.collectedStyles[''] = {}, e.currentTime = 0
           },
           AnimationAstBuilderVisitor.prototype.visitTrigger =
                     function(e, t) {
             var n = this, r = t.queryCount = 0, i = t.depCount = 0, o = [],
                 s = [];
             return e.definitions.forEach(function(e) {
               if (n._resetContextStyleTimingState(t), 0 == e.type) {
                 var a = e, u = a.name;
                 u.split(/\s*,\s*/).forEach(function(e) {
                   a.name = e, o.push(n.visitState(a, t))
                 }),
                     a.name = u
               } else if (1 == e.type) {
                 var l = n.visitTransition(e, t);
                 r += l.queryCount, i += l.depCount, s.push(l)
               } else
                 t.errors.push(
                     'only state() and transition() definitions can sit inside of a trigger()')
             }),
             {
               type: 7, name: e.name, states: o, transitions: s, queryCount: r,
                   depCount: i, options: null
             }
           },
           AnimationAstBuilderVisitor.prototype.visitState =
                     function(e, t) {
             var n = this.visitStyle(e.styles, t),
                 r = e.options && e.options.params || null;
             if (n.containsDynamicStyles) {
               var i = new Set, o = r || {};
               if (n.styles.forEach(function(e) {
                     if (isObject(e)) {
                       var t = e;
                       Object.keys(t).forEach(function(e) {
                         extractStyleParams(t[e]).forEach(function(e) {
                           o.hasOwnProperty(e) || i.add(e)
                         })
                       })
                     }
                   }),
                   i.size) {
                 var s = iteratorToArray(i.values());
                 t.errors.push(
                     'state("' + e.name +
                     '", ...) must define default values for all the following style substitutions: ' +
                     s.join(', '))
               }
             }
             return {
               type: 0, name: e.name, style: n, options: r ? {params: r} : null
             }
           },
           AnimationAstBuilderVisitor.prototype.visitTransition =
                     function(e, t) {
             t.queryCount = 0, t.depCount = 0;
             var n =
                 visitDslNode(this, normalizeAnimationEntry(e.animation), t);
             return {
               type: 1, matchers: parseTransitionExpr(e.expr, t.errors),
                   animation: n, queryCount: t.queryCount, depCount: t.depCount,
                   options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitSequence =
                     function(e, t) {
             var n = this;
             return {
               type: 2, steps: e.steps.map(function(e) {
                 return visitDslNode(n, e, t)
               }),
                   options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitGroup =
                     function(e, t) {
             var n = this, r = t.currentTime, i = 0,
                 o = e.steps.map(function(e) {
                   t.currentTime = r;
                   var o = visitDslNode(n, e, t);
                   return i = Math.max(i, t.currentTime), o
                 });
             return t.currentTime = i, {
               type: 3, steps: o, options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitAnimate =
                     function(e, t) {
             var n, r = function constructTimingAst(e, t) {
               var n = null;
               if (e.hasOwnProperty('duration'))
                 n = e;
               else if ('number' == typeof e) {
                 var r = resolveTiming(e, t).duration;
                 return makeTimingAst(r, 0, '')
               }
               var i = e;
               if (i.split(/\s+/).some(function(e) {
                     return '{' == e.charAt(0) && '{' == e.charAt(1)
                   })) {
                 var o = makeTimingAst(0, 0, '');
                 return o.dynamic = !0, o.strValue = i, o
               }
               return makeTimingAst(
                   (n = n || resolveTiming(i, t)).duration, n.delay, n.easing)
             }(e.timings, t.errors);
             t.currentAnimateTimings = r;
             var o = e.styles ? e.styles : Object(i.style)({});
             if (5 == o.type)
               n = this.visitKeyframes(o, t);
             else {
               var s = e.styles, a = !1;
               if (!s) {
                 a = !0;
                 var u = {};
                 r.easing && (u.easing = r.easing), s = Object(i.style)(u)
               }
               t.currentTime += r.duration + r.delay;
               var l = this.visitStyle(s, t);
               l.isEmptyStep = a, n = l
             }
             return t.currentAnimateTimings = null, {
               type: 4, timings: r, style: n, options: null
             }
           },
           AnimationAstBuilderVisitor.prototype.visitStyle =
                     function(e, t) {
             var n = this._makeStyleAst(e, t);
             return this._validateStyleAst(n, t), n
           },
           AnimationAstBuilderVisitor.prototype._makeStyleAst =
                     function(e, t) {
             var n = [];
             Array.isArray(e.styles) ? e.styles.forEach(function(e) {
               'string' == typeof e ? e == i.AUTO_STYLE ?
                                      n.push(e) :
                                      t.errors.push(
                                          'The provided style string value ' +
                                          e + ' is not allowed.') :
                                      n.push(e)
             }) :
                                       n.push(e.styles);
             var r = !1, o = null;
             return n.forEach(function(e) {
               if (isObject(e)) {
                 var t = e, n = t.easing;
                 if (n && (o = n, delete t.easing), !r)
                   for (var i in t) {
                     if (t[i].toString().indexOf('{{') >= 0) {
                       r = !0;
                       break
                     }
                   }
               }
             }),
             {
               type: 6, styles: n, easing: o, offset: e.offset,
                   containsDynamicStyles: r, options: null
             }
           },
           AnimationAstBuilderVisitor.prototype._validateStyleAst =
                     function(e, t) {
             var n = t.currentAnimateTimings, r = t.currentTime,
                 i = t.currentTime;
             n && i > 0 && (i -= n.duration + n.delay),
                 e.styles.forEach(function(e) {
                   'string' != typeof e && Object.keys(e).forEach(function(n) {
                     var o = t.collectedStyles[t.currentQuerySelector],
                         s = o[n], a = !0;
                     s &&
                         (i != r && i >= s.startTime && r <= s.endTime &&
                              (t.errors.push(
                                   'The CSS property "' + n +
                                   '" that exists between the times of "' +
                                   s.startTime + 'ms" and "' + s.endTime +
                                   'ms" is also being animated in a parallel animation between the times of "' +
                                   i + 'ms" and "' + r + 'ms"'),
                               a = !1),
                          i = s.startTime),
                         a && (o[n] = {startTime: i, endTime: r}),
                         t.options && function validateStyleParams(e, t, n) {
                           var r = t.params || {}, i = extractStyleParams(e);
                           i.length && i.forEach(function(e) {
                             r.hasOwnProperty(e) ||
                                 n.push(
                                     'Unable to resolve the local animation param ' +
                                     e + ' in the given list of values')
                           })
                         }(e[n], t.options, t.errors)
                   })
                 })
           },
           AnimationAstBuilderVisitor.prototype.visitKeyframes =
                     function(e, t) {
             var n = this, r = {type: 5, styles: [], options: null};
             if (!t.currentAnimateTimings)
               return t.errors.push(
                          'keyframes() must be placed inside of a call to animate()'),
                      r;
             var i = 0, o = [], s = !1, a = !1, u = 0,
                 l = e.steps.map(function(e) {
                   var r = n._makeStyleAst(e, t),
                       l = null != r.offset ?
                       r.offset :
                       function consumeOffset(e) {
                         if ('string' == typeof e) return null;
                         var t = null;
                         if (Array.isArray(e))
                           e.forEach(function(e) {
                             if (isObject(e) && e.hasOwnProperty('offset')) {
                               var n = e;
                               t = parseFloat(n.offset), delete n.offset
                             }
                           });
                         else if (isObject(e) && e.hasOwnProperty('offset')) {
                           var n = e;
                           t = parseFloat(n.offset), delete n.offset
                         }
                         return t
                       }(r.styles),
                       c = 0;
                   return null != l && (i++, c = r.offset = l),
                          a = a || c < 0 || c > 1, s = s || c < u, u = c,
                          o.push(c), r
                 });
             a &&
                 t.errors.push(
                     'Please ensure that all keyframe offsets are between 0 and 1'),
                 s &&
                 t.errors.push(
                     'Please ensure that all keyframe offsets are in order');
             var c = e.steps.length, p = 0;
             i > 0 && i < c ?
                 t.errors.push(
                     'Not all style() steps within the declared keyframes() contain offsets') :
                 0 == i && (p = 1 / (c - 1));
             var d = c - 1, h = t.currentTime, m = t.currentAnimateTimings,
                 f = m.duration;
             return l.forEach(function(e, i) {
               var s = p > 0 ? i == d ? 1 : p * i : o[i], a = s * f;
               t.currentTime = h + m.delay + a, m.duration = a,
               n._validateStyleAst(e, t), e.offset = s, r.styles.push(e)
             }),
                    r
           },
           AnimationAstBuilderVisitor.prototype.visitReference =
                     function(e, t) {
             return {
               type: 8,
                   animation: visitDslNode(
                       this, normalizeAnimationEntry(e.animation), t),
                   options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitAnimateChild =
                     function(e, t) {
             return t.depCount++, {
               type: 9, options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitAnimateRef =
                     function(e, t) {
             return {
               type: 10, animation: this.visitReference(e.animation, t),
                   options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitQuery =
                     function(e, t) {
             var n = t.currentQuerySelector, r = e.options || {};
             t.queryCount++, t.currentQuery = e;
             var i = function normalizeSelector(e) {
               var t = !!e.split(/\s*,\s*/).find(function(e) {
                 return e == w
               });
               t && (e = e.replace(E, ''));
               return [
                 e = e.replace(O, y)
                         .replace(P, g)
                         .replace(/@\*/g, v)
                         .replace(
                             /@\w+/g,
                             function(e) {
                               return v + '-' + e.substr(1)
                             })
                         .replace(/:animating/g, b),
                 t
               ]
             }(e.selector), o = i[0], s = i[1];
             t.currentQuerySelector = n.length ? n + ' ' + o : o,
             getOrSetAsInMap(t.collectedStyles, t.currentQuerySelector, {});
             var a =
                 visitDslNode(this, normalizeAnimationEntry(e.animation), t);
             return t.currentQuery = null, t.currentQuerySelector = n, {
               type: 11, selector: o, limit: r.limit || 0,
                   optional: !!r.optional, includeSelf: s, animation: a,
                   originalSelector: e.selector,
                   options: normalizeAnimationOptions(e.options)
             }
           },
           AnimationAstBuilderVisitor.prototype.visitStagger = function(e, t) {
             t.currentQuery ||
                 t.errors.push('stagger() can only be used inside of query()');
             var n = 'full' === e.timings ?
                 {duration: 0, delay: 0, easing: 'full'} :
                 resolveTiming(e.timings, t.errors, !0);
             return {
               type: 12,
                   animation: visitDslNode(
                       this, normalizeAnimationEntry(e.animation), t),
                   timings: n, options: null
             }
           }, AnimationAstBuilderVisitor
        }();
        var N = function() {
          return function AnimationAstBuilderContext(e) {
            this.errors = e, this.queryCount = 0, this.depCount = 0,
            this.currentTransition = null, this.currentQuery = null,
            this.currentQuerySelector = null, this.currentAnimateTimings = null,
            this.currentTime = 0, this.collectedStyles = {}, this.options = null
          }
        }();
        function isObject(e) {
          return !Array.isArray(e) && 'object' == typeof e
        }
        function normalizeAnimationOptions(e) {
          return e ? (e = copyObj(e)).params &&
                         (e.params =
                              function normalizeParams(e) {
                                return e ? copyObj(e) : null
                              }(e.params)) :
                     e = {},
                     e
        }
        function makeTimingAst(e, t, n) {
          return {
            duration: e, delay: t, easing: n
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function createTimelineInstruction(e, t, n, r, i, o, s, a) {
          return void 0 === s && (s = null), void 0 === a && (a = !1), {
            type: 1, element: e, keyframes: t, preStyleProps: n,
                postStyleProps: r, duration: i, delay: o, totalTime: i + o,
                easing: s, subTimeline: a
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var L = function() {
          function ElementInstructionMap() {
            this._map = new Map
          }
          return ElementInstructionMap.prototype.consume = function(e) {
            var t = this._map.get(e);
            return t ? this._map.delete(e) : t = [], t
          }, ElementInstructionMap.prototype.append = function(e, t) {
            var n = this._map.get(e);
            n || this._map.set(e, n = []), n.push.apply(n, t)
          }, ElementInstructionMap.prototype.has = function(e) {
            return this._map.has(e)
          }, ElementInstructionMap.prototype.clear = function() {
            this._map.clear()
          }, ElementInstructionMap
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function buildAnimationTimelines(e, t, n, r, i, o, s, a) {
          return void 0 === r && (r = {}), void 0 === i && (i = {}),
                 void 0 === a && (a = []),
                 (new x).buildKeyframes(e, t, n, r, i, o, s, a)
        }
        var x =
                function() {
          function AnimationTimelineBuilderVisitor() {}
          return AnimationTimelineBuilderVisitor.prototype
                     .buildKeyframes =
                     function(e, t, n, r, i, o, s, a) {
            void 0 === a && (a = []), s = s || new L;
            var u = new M(e, t, s, a, []);
            u.options = o, u.currentTimeline.setStyles([r], null, u.errors, o),
            visitDslNode(this, n, u);
            var l = u.timelines.filter(function(e) {
              return e.containsAnimation()
            });
            if (l.length && Object.keys(i).length) {
              var c = l[l.length - 1];
              c.allowOnlyTimelineStyles() || c.setStyles([i], null, u.errors, o)
            }
            return l.length ?
                l.map(function(e) {
                  return e.buildKeyframes()
                }) :
                [createTimelineInstruction(t, [], [], [], 0, 0, '', !1)]
          },
           AnimationTimelineBuilderVisitor.prototype.visitTrigger = function(
               e, t) {},
           AnimationTimelineBuilderVisitor.prototype.visitState = function(
               e, t) {},
           AnimationTimelineBuilderVisitor.prototype.visitTransition = function(
               e, t) {},
           AnimationTimelineBuilderVisitor.prototype.visitAnimateChild =
                     function(e, t) {
             var n = t.subInstructions.consume(t.element);
             if (n) {
               var r = t.createSubContext(e.options),
                   i = t.currentTimeline.currentTime,
                   o = this._visitSubInstructions(n, r, r.options);
               i != o && t.transformIntoNewTimeline(o)
             }
             t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitAnimateRef =
                     function(e, t) {
             var n = t.createSubContext(e.options);
             n.transformIntoNewTimeline(), this.visitReference(e.animation, n),
                 t.transformIntoNewTimeline(n.currentTimeline.currentTime),
                 t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype._visitSubInstructions =
                     function(e, t, n) {
             var r = t.currentTimeline.currentTime,
                 i = null != n.duration ? resolveTimingValue(n.duration) : null,
                 o = null != n.delay ? resolveTimingValue(n.delay) : null;
             return 0 !== i && e.forEach(function(e) {
               var n = t.appendInstructionToTimeline(e, i, o);
               r = Math.max(r, n.duration + n.delay)
             }),
                    r
           },
           AnimationTimelineBuilderVisitor.prototype.visitReference =
                     function(e, t) {
             t.updateOptions(e.options, !0), visitDslNode(this, e.animation, t),
                 t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitSequence =
                     function(e, t) {
             var n = this, r = t.subContextCount, i = t, o = e.options;
             if (o && (o.params || o.delay) &&
                 ((i = t.createSubContext(o)).transformIntoNewTimeline(),
                  null != o.delay)) {
               6 == i.previousNode.type &&
                   (i.currentTimeline.snapshotCurrentStyles(),
                    i.previousNode = D);
               var s = resolveTimingValue(o.delay);
               i.delayNextStep(s)
             }
             e.steps.length &&
                 (e.steps.forEach(function(e) {
                   return visitDslNode(n, e, i)
                 }),
                  i.currentTimeline.applyStylesToKeyframe(),
                  i.subContextCount > r && i.transformIntoNewTimeline()),
                 t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitGroup =
                     function(e, t) {
             var n = this, r = [], i = t.currentTimeline.currentTime,
                 o = e.options && e.options.delay ?
                 resolveTimingValue(e.options.delay) :
                 0;
             e.steps.forEach(function(s) {
               var a = t.createSubContext(e.options);
               o && a.delayNextStep(o), visitDslNode(n, s, a),
                   i = Math.max(i, a.currentTimeline.currentTime),
                   r.push(a.currentTimeline)
             }),
                 r.forEach(function(e) {
                   return t.currentTimeline.mergeTimelineCollectedStyles(e)
                 }),
                 t.transformIntoNewTimeline(i), t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype._visitTiming =
                     function(e, t) {
             if (e.dynamic) {
               var n = e.strValue;
               return resolveTiming(
                   t.params ? interpolateParams(n, t.params, t.errors) : n,
                   t.errors)
             }
             return {
               duration: e.duration, delay: e.delay, easing: e.easing
             }
           },
           AnimationTimelineBuilderVisitor.prototype.visitAnimate =
                     function(e, t) {
             var n = t.currentAnimateTimings = this._visitTiming(e.timings, t),
                 r = t.currentTimeline;
             n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
             var i = e.style;
             5 == i.type ? this.visitKeyframes(i, t) :
                           (t.incrementTime(n.duration), this.visitStyle(i, t),
                            r.applyStylesToKeyframe()),
                 t.currentAnimateTimings = null, t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitStyle =
                     function(e, t) {
             var n = t.currentTimeline, r = t.currentAnimateTimings;
             !r && n.getCurrentStyleProperties().length && n.forwardFrame();
             var i = r && r.easing || e.easing;
             e.isEmptyStep ? n.applyEmptyStep(i) :
                             n.setStyles(e.styles, i, t.errors, t.options),
                 t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitKeyframes =
                     function(e, t) {
             var n = t.currentAnimateTimings, r = t.currentTimeline.duration,
                 i = n.duration, o = t.createSubContext().currentTimeline;
             o.easing = n.easing, e.styles.forEach(function(e) {
               var n = e.offset || 0;
               o.forwardTime(n * i),
                   o.setStyles(e.styles, e.easing, t.errors, t.options),
                   o.applyStylesToKeyframe()
             }),
             t.currentTimeline.mergeTimelineCollectedStyles(o),
             t.transformIntoNewTimeline(r + i), t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitQuery =
                     function(e, t) {
             var n = this, r = t.currentTimeline.currentTime,
                 i = e.options || {},
                 o = i.delay ? resolveTimingValue(i.delay) : 0;
             o &&
                 (6 === t.previousNode.type ||
                  0 == r &&
                      t.currentTimeline.getCurrentStyleProperties().length) &&
                 (t.currentTimeline.snapshotCurrentStyles(),
                  t.previousNode = D);
             var s = r,
                 a = t.invokeQuery(
                     e.selector, e.originalSelector, e.limit, e.includeSelf,
                     !!i.optional, t.errors);
             t.currentQueryTotal = a.length;
             var u = null;
             a.forEach(function(r, i) {
               t.currentQueryIndex = i;
               var a = t.createSubContext(e.options, r);
               o && a.delayNextStep(o),
                   r === t.element && (u = a.currentTimeline),
                   visitDslNode(n, e.animation, a),
                   a.currentTimeline.applyStylesToKeyframe();
               var l = a.currentTimeline.currentTime;
               s = Math.max(s, l)
             }),
                 t.currentQueryIndex = 0, t.currentQueryTotal = 0,
                 t.transformIntoNewTimeline(s),
                 u &&
                 (t.currentTimeline.mergeTimelineCollectedStyles(u),
                  t.currentTimeline.snapshotCurrentStyles()),
                 t.previousNode = e
           },
           AnimationTimelineBuilderVisitor.prototype.visitStagger =
                     function(e, t) {
             var n = t.parentContext, r = t.currentTimeline, i = e.timings,
                 o = Math.abs(i.duration), s = o * (t.currentQueryTotal - 1),
                 a = o * t.currentQueryIndex;
             switch (i.duration < 0 ? 'reverse' : i.easing) {
               case 'reverse':
                 a = s - a;
                 break;
               case 'full':
                 a = n.currentStaggerTime
             }
             var u = t.currentTimeline;
             a && u.delayNextStep(a);
             var l = u.currentTime;
             visitDslNode(this, e.animation, t),
                 t.previousNode = e,
                 n.currentStaggerTime = r.currentTime - l +
                 (r.startTime - n.currentTimeline.startTime)
           },
           AnimationTimelineBuilderVisitor
        }(),
            D = {}, M = function() {
              function AnimationTimelineContext(e, t, n, r, i, o) {
                this._driver = e, this.element = t, this.subInstructions = n,
                this.errors = r, this.timelines = i, this.parentContext = null,
                this.currentAnimateTimings = null, this.previousNode = D,
                this.subContextCount = 0, this.options = {},
                this.currentQueryIndex = 0, this.currentQueryTotal = 0,
                this.currentStaggerTime = 0,
                this.currentTimeline = o || new F(t, 0),
                i.push(this.currentTimeline)
              }
              return Object.defineProperty(
                         AnimationTimelineContext.prototype, 'params', {
                           get: function() {
                             return this.options.params
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     AnimationTimelineContext
                         .prototype.updateOptions =
                         function(e, t) {
                       var n = this;
                       if (e) {
                         var r = e, i = this.options;
                         null != r.duration &&
                             (i.duration = resolveTimingValue(r.duration)),
                             null != r.delay &&
                             (i.delay = resolveTimingValue(r.delay));
                         var o = r.params;
                         if (o) {
                           var s = i.params;
                           s || (s = this.options.params = {}),
                               Object.keys(o).forEach(function(e) {
                                 t && s.hasOwnProperty(e) ||
                                     (s[e] =
                                          interpolateParams(o[e], s, n.errors))
                               })
                         }
                       }
                     },
 AnimationTimelineContext.prototype._copyOptions =
                         function() {
   var e = {};
   if (this.options) {
     var t = this.options.params;
     if (t) {
       var n = e.params = {};
       Object.keys(t).forEach(function(e) {
         n[e] = t[e]
       })
     }
   }
   return e
 },
 AnimationTimelineContext.prototype.createSubContext =
                         function(e, t, n) {
   void 0 === e && (e = null);
   var r = t || this.element,
       i = new AnimationTimelineContext(
           this._driver, r, this.subInstructions, this.errors, this.timelines,
           this.currentTimeline.fork(r, n || 0));
   return i.previousNode = this.previousNode,
          i.currentAnimateTimings = this.currentAnimateTimings,
          i.options = this._copyOptions(), i.updateOptions(e),
          i.currentQueryIndex = this.currentQueryIndex,
          i.currentQueryTotal = this.currentQueryTotal, i.parentContext = this,
          this.subContextCount++, i
 },
 AnimationTimelineContext.prototype.transformIntoNewTimeline =
                         function(e) {
   return this.previousNode = D,
          this.currentTimeline = this.currentTimeline.fork(this.element, e),
          this.timelines.push(this.currentTimeline), this.currentTimeline
 },
 AnimationTimelineContext.prototype.appendInstructionToTimeline =
                         function(e, t, n) {
   var r = {
     duration: null != t ? t : e.duration,
     delay: this.currentTimeline.currentTime + (null != n ? n : 0) + e.delay,
     easing: ''
   },
       i = new R(
           e.element, e.keyframes, e.preStyleProps, e.postStyleProps, r,
           e.stretchStartingKeyframe);
   return this.timelines.push(i), r
 },
 AnimationTimelineContext.prototype.incrementTime =
                         function(e) {
   this.currentTimeline.forwardTime(this.currentTimeline.duration + e)
 },
 AnimationTimelineContext.prototype.delayNextStep =
                         function(e) {
   e > 0 && this.currentTimeline.delayNextStep(e)
 },
 AnimationTimelineContext.prototype.invokeQuery = function(e, t, n, r, i, o) {
   var s = [];
   if (r && s.push(this.element), e.length > 0) {
     var a = 1 != n, u = this._driver.query(this.element, e, a);
     0 !== n && (u = u.slice(0, n)), s.push.apply(s, u)
   }
   return i || 0 != s.length ||
              o.push(
                  '`query("' + t + '")` returned zero elements. (Use `query("' +
                  t + '", { optional: true })` if you wish to allow this.)'),
          s
 }, AnimationTimelineContext
            }(), F = function() {
              function TimelineBuilder(e, t, n) {
                this.element = e, this.startTime = t,
                this._elementTimelineStylesLookup = n, this.duration = 0,
                this._previousKeyframe = {}, this._currentKeyframe = {},
                this._keyframes = new Map, this._styleSummary = {},
                this._pendingStyles = {}, this._backFill = {},
                this._currentEmptyStepKeyframe = null,
                this._elementTimelineStylesLookup ||
                    (this._elementTimelineStylesLookup = new Map),
                this._localTimelineStyles = Object.create(this._backFill, {}),
                this._globalTimelineStyles =
                    this._elementTimelineStylesLookup.get(e),
                this._globalTimelineStyles ||
                    (this._globalTimelineStyles = this._localTimelineStyles,
                     this._elementTimelineStylesLookup.set(
                         e, this._localTimelineStyles)),
                this._loadKeyframe()
              }
              return TimelineBuilder
                         .prototype.containsAnimation =
                         function() {
                switch (this._keyframes.size) {
                  case 0:
                    return !1;
                  case 1:
                    return this.getCurrentStyleProperties().length > 0;
                  default:
                    return !0
                }
              },
          TimelineBuilder.prototype.getCurrentStyleProperties =
                         function() {
            return Object.keys(this._currentKeyframe)
          },
          Object.defineProperty(TimelineBuilder.prototype, 'currentTime', {
            get: function() {
              return this.startTime + this.duration
            },
            enumerable: !0,
            configurable: !0
          }),
          TimelineBuilder.prototype.delayNextStep =
                         function(e) {
            var t = 1 == this._keyframes.size &&
                Object.keys(this._pendingStyles).length;
            this.duration || t ? (this.forwardTime(this.currentTime + e),
                                  t && this.snapshotCurrentStyles()) :
                                 this.startTime += e
          },
          TimelineBuilder.prototype.fork =
                         function(e, t) {
            return this.applyStylesToKeyframe(),
                   new TimelineBuilder(
                       e, t || this.currentTime,
                       this._elementTimelineStylesLookup)
          },
          TimelineBuilder.prototype._loadKeyframe =
                         function() {
            this._currentKeyframe &&
                (this._previousKeyframe = this._currentKeyframe),
                this._currentKeyframe = this._keyframes.get(this.duration),
                this._currentKeyframe ||
                (this._currentKeyframe = Object.create(this._backFill, {}),
                 this._keyframes.set(this.duration, this._currentKeyframe))
          },
          TimelineBuilder.prototype.forwardFrame =
                         function() {
            this.duration += 1, this._loadKeyframe()
          },
          TimelineBuilder.prototype.forwardTime =
                         function(e) {
            this.applyStylesToKeyframe(), this.duration = e,
                                          this._loadKeyframe()
          },
          TimelineBuilder.prototype._updateStyle =
                         function(e, t) {
            this._localTimelineStyles[e] = t, this._globalTimelineStyles[e] = t,
            this._styleSummary[e] = {
              time: this.currentTime,
              value: t
            }
          },
          TimelineBuilder.prototype.allowOnlyTimelineStyles =
                         function() {
            return this._currentEmptyStepKeyframe !== this._currentKeyframe
          },
          TimelineBuilder.prototype.applyEmptyStep =
                         function(e) {
            var t = this;
            e && (this._previousKeyframe.easing = e),
                Object.keys(this._globalTimelineStyles).forEach(function(e) {
                  t._backFill[e] = t._globalTimelineStyles[e] || i.AUTO_STYLE,
                  t._currentKeyframe[e] = i.AUTO_STYLE
                }),
                this._currentEmptyStepKeyframe = this._currentKeyframe
          },
          TimelineBuilder.prototype.setStyles =
                         function(e, t, n, r) {
            var o = this;
            t && (this._previousKeyframe.easing = t);
            var s = r && r.params || {},
                a =
                    function flattenStyles(e, t) {
                  var n, r = {};
                  return e.forEach(function(e) {
                    '*' === e ? (n = n || Object.keys(t)).forEach(function(e) {
                      r[e] = i.AUTO_STYLE
                    }) :
                                copyStyles(e, !1, r)
                  }),
                         r
                }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that
             * can be found in the LICENSE file at https://angular.io/license
             */
            (e, this._globalTimelineStyles);
            Object.keys(a).forEach(function(e) {
              var t = interpolateParams(a[e], s, n);
              o._pendingStyles[e] = t,
              o._localTimelineStyles.hasOwnProperty(e) ||
                  (o._backFill[e] = o._globalTimelineStyles.hasOwnProperty(e) ?
                       o._globalTimelineStyles[e] :
                       i.AUTO_STYLE),
              o._updateStyle(e, t)
            })
          },
          TimelineBuilder.prototype.applyStylesToKeyframe =
                         function() {
            var e = this, t = this._pendingStyles, n = Object.keys(t);
            0 != n.length &&
                (this._pendingStyles = {}, n.forEach(function(n) {
                  var r = t[n];
                  e._currentKeyframe[n] = r
                }),
                 Object.keys(this._localTimelineStyles).forEach(function(t) {
                   e._currentKeyframe.hasOwnProperty(t) ||
                       (e._currentKeyframe[t] = e._localTimelineStyles[t])
                 }))
          },
          TimelineBuilder.prototype.snapshotCurrentStyles =
                         function() {
            var e = this;
            Object.keys(this._localTimelineStyles).forEach(function(t) {
              var n = e._localTimelineStyles[t];
              e._pendingStyles[t] = n, e._updateStyle(t, n)
            })
          },
          TimelineBuilder.prototype.getFinalKeyframe =
                         function() {
            return this._keyframes.get(this.duration)
          },
          Object.defineProperty(TimelineBuilder.prototype, 'properties', {
            get: function() {
              var e = [];
              for (var t in this._currentKeyframe) e.push(t);
              return e
            },
            enumerable: !0,
            configurable: !0
          }),
          TimelineBuilder.prototype.mergeTimelineCollectedStyles = function(e) {
            var t = this;
            Object.keys(e._styleSummary).forEach(function(n) {
              var r = t._styleSummary[n], i = e._styleSummary[n];
              (!r || i.time > r.time) && t._updateStyle(n, i.value)
            })
          }, TimelineBuilder.prototype.buildKeyframes = function() {
            var e = this;
            this.applyStylesToKeyframe();
            var t = new Set, n = new Set,
                r = 1 === this._keyframes.size && 0 === this.duration, o = [];
            this._keyframes.forEach(function(s, a) {
              var u = copyStyles(s, !0);
              Object.keys(u).forEach(function(e) {
                var r = u[e];
                r == i['ɵPRE_STYLE'] ? t.add(e) : r == i.AUTO_STYLE && n.add(e)
              }),
                  r || (u.offset = a / e.duration), o.push(u)
            });
            var s = t.size ? iteratorToArray(t.values()) : [],
                a = n.size ? iteratorToArray(n.values()) : [];
            if (r) {
              var u = o[0], l = copyObj(u);
              u.offset = 0, l.offset = 1, o = [u, l]
            }
            return createTimelineInstruction(
                this.element, o, s, a, this.duration, this.startTime,
                this.easing, !1)
          }, TimelineBuilder
            }(), R = function(e) {
              function SubTimelineBuilder(t, n, r, i, o, s) {
                void 0 === s && (s = !1);
                var a = e.call(this, t, o.delay) || this;
                return a.element = t, a.keyframes = n, a.preStyleProps = r,
                       a.postStyleProps = i, a._stretchStartingKeyframe = s,
                       a.timings = {
                         duration: o.duration,
                         delay: o.delay,
                         easing: o.easing
                       },
                       a
              }
              return r.a(SubTimelineBuilder, e),
                     SubTimelineBuilder.prototype.containsAnimation =
                         function() {
                       return this.keyframes.length > 1
                     },
                     SubTimelineBuilder.prototype.buildKeyframes = function() {
                       var e = this.keyframes, t = this.timings, n = t.delay,
                           r = t.duration, i = t.easing;
                       if (this._stretchStartingKeyframe && n) {
                         var o = [], s = r + n, a = n / s,
                             u = copyStyles(e[0], !1);
                         u.offset = 0, o.push(u);
                         var l = copyStyles(e[0], !1);
                         l.offset = roundOffset(a), o.push(l);
                         for (var c = e.length - 1, p = 1; p <= c; p++) {
                           var d = copyStyles(e[p], !1), h = n + d.offset * r;
                           d.offset = roundOffset(h / s), o.push(d)
                         }
                         r = s, n = 0, i = '', e = o
                       }
                       return createTimelineInstruction(
                           this.element, e, this.preStyleProps,
                           this.postStyleProps, r, n, i, !0)
                     }, SubTimelineBuilder
            }(F);
        function roundOffset(e, t) {
          void 0 === t && (t = 3);
          var n = Math.pow(10, t - 1);
          return Math.round(e * n) / n
        }
        !function() {
          function Animation(e, t) {
            this._driver = e;
            var n = [], r = buildAnimationAst(t, n);
            if (n.length) {
              var i = 'animation validation failed:\n' + n.join('\n');
              throw new Error(i)
            }
            this._animationAst = r
          }
          Animation.prototype.buildTimelines = function(e, t, n, r, i) {
            var o = Array.isArray(t) ? normalizeStyles(t) : t,
                s = Array.isArray(n) ? normalizeStyles(n) : n, a = [];
            i = i || new L;
            var u = buildAnimationTimelines(
                this._driver, e, this._animationAst, o, s, r, i, a);
            if (a.length) {
              var l = 'animation building failed:\n' + a.join('\n');
              throw new Error(l)
            }
            return u
          }
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */var V=function(){return function AnimationStyleNormalizer(){}}(),k=(function(){function NoopAnimationStyleNormalizer(){}NoopAnimationStyleNormalizer.prototype.normalizePropertyName=function(e,t){return e},NoopAnimationStyleNormalizer.prototype.normalizeStyleValue=function(e,t,n,r){return n}}(),function(e){function WebAnimationsStyleNormalizer(){return null!==e&&e.apply(this,arguments)||this}return r.a(WebAnimationsStyleNormalizer,e),WebAnimationsStyleNormalizer.prototype.normalizePropertyName=function(e,t){return dashCaseToCamelCase(e)},WebAnimationsStyleNormalizer.prototype.normalizeStyleValue=function(e,t,n,r){var i='',o=n.toString().trim();if(j[t]&&0!==n&&'0'!==n)if('number'==typeof n)i='px';else{var s=n.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&0==s[1].length&&r.push('Please provide a CSS unit value for '+e+':'+n)}return o+i},WebAnimationsStyleNormalizer}(V)),j=function makeBooleanMap(e){var t={};return e.forEach(function(e){return t[e]=!0}),t}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(','));
        function createTransitionInstruction(
            e, t, n, r, i, o, s, a, u, l, c, p) {
          return {
            type: 0, element: e, triggerName: t, isRemovalTransition: i,
                fromState: n, fromStyles: o, toState: r, toStyles: s,
                timelines: a, queriedElements: u, preStyleProps: l,
                postStyleProps: c, errors: p
          }
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var H = {},
            B = function() {
              function AnimationTransitionFactory(e, t, n) {
                this._triggerName = e, this.ast = t, this._stateStyles = n
              }
              return AnimationTransitionFactory.prototype.match =
                         function(e, t) {
                return function oneOrMoreTransitionsMatch(e, t, n) {
                  return e.some(function(e) {
                    return e(t, n)
                  })
                }(this.ast.matchers, e, t)
              },
                     AnimationTransitionFactory.prototype.buildStyles =
                         function(e, t, n) {
                       var r = this._stateStyles['*'], i = this._stateStyles[e],
                           o = r ? r.buildStyles(t, n) : {};
                       return i ? i.buildStyles(t, n) : o
                     },
                     AnimationTransitionFactory.prototype.build =
                         function(e, t, n, r, i, o, s) {
                       var a = [],
                           u = this.ast.options && this.ast.options.params || H,
                           l = i && i.params || H,
                           c = this.buildStyles(n, l, a),
                           p = o && o.params || H,
                           d = this.buildStyles(r, p, a), h = new Set,
                           m = new Map, f = new Map, y = 'void' === r,
                           g = {params: Object.assign({}, u, p)},
                           v = buildAnimationTimelines(
                               e, t, this.ast.animation, c, d, g, s, a);
                       if (a.length)
                         return createTransitionInstruction(
                             t, this._triggerName, n, r, y, c, d, [], [], m, f,
                             a);
                       v.forEach(function(e) {
                         var n = e.element, r = getOrSetAsInMap(m, n, {});
                         e.preStyleProps.forEach(function(e) {
                           return r[e] = !0
                         });
                         var i = getOrSetAsInMap(f, n, {});
                         e.postStyleProps.forEach(function(e) {
                           return i[e] = !0
                         }),
                             n !== t && h.add(n)
                       });
                       var b = iteratorToArray(h.values());
                       return createTransitionInstruction(
                           t, this._triggerName, n, r, y, c, d, v, b, m, f)
                     },
                     AnimationTransitionFactory
            }();
        var G = function() {
          function AnimationStateStyles(e, t) {
            this.styles = e, this.defaultParams = t
          }
          return AnimationStateStyles.prototype.buildStyles = function(e, t) {
            var n = {}, r = copyObj(this.defaultParams);
            return Object.keys(e).forEach(function(t) {
              var n = e[t];
              null != n && (r[t] = n)
            }),
                   this.styles.styles.forEach(function(e) {
                     if ('string' != typeof e) {
                       var i = e;
                       Object.keys(i).forEach(function(e) {
                         var o = i[e];
                         o.length > 1 && (o = interpolateParams(o, r, t)),
                             n[e] = o
                       })
                     }
                   }),
                   n
          }, AnimationStateStyles
        }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var U = function() {
          function AnimationTrigger(e, t) {
            var n = this;
            this.name = e, this.ast = t, this.transitionFactories = [],
            this.states = {}, t.states.forEach(function(e) {
              var t = e.options && e.options.params || {};
              n.states[e.name] = new G(e.style, t)
            }),
            balanceProperties(this.states, 'true', '1'),
            balanceProperties(this.states, 'false', '0'),
            t.transitions.forEach(function(t) {
              n.transitionFactories.push(new B(e, t, n.states))
            }),
            this.fallbackTransition = function createFallbackTransition(e, t) {
              return new B(
                  e, {
                    type: 1,
                    animation: {type: 2, steps: [], options: null},
                    matchers: [function(e, t) {
                      return !0
                    }],
                    options: null,
                    queryCount: 0,
                    depCount: 0
                  },
                  t)
            }(e, this.states)
          }
          return Object.defineProperty(
                     AnimationTrigger.prototype, 'containsQueries', {
                       get: function() {
                         return this.ast.queryCount > 0
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 AnimationTrigger.prototype.matchTransition = function(e, t) {
                   return this.transitionFactories.find(function(n) {
                     return n.match(e, t)
                   }) ||
                       null
                 }, AnimationTrigger.prototype.matchStyles = function(e, t, n) {
                   return this.fallbackTransition.buildStyles(e, t, n)
                 }, AnimationTrigger
        }();
        function balanceProperties(e, t, n) {
          e.hasOwnProperty(t) ? e.hasOwnProperty(n) || (e[n] = e[t]) :
                                e.hasOwnProperty(n) && (e[t] = e[n])
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var q = new L,
            W =
                function() {
              function TimelineAnimationEngine(e, t) {
                this._driver = e, this._normalizer = t, this._animations = {},
                this._playersById = {}, this.players = []
              }
              return TimelineAnimationEngine
                         .prototype.register =
                         function(e, t) {
                var n = [], r = buildAnimationAst(t, n);
                if (n.length)
                  throw new Error(
                      'Unable to build the animation due to the following errors: ' +
                      n.join('\n'));
                this._animations[e] = r
              },
  TimelineAnimationEngine.prototype._buildPlayer = function(e, t, n) {
    var r = e.element,
        i = normalizeKeyframes(
            this._driver, this._normalizer, 0, e.keyframes, t, n);
    return this._driver.animate(r, i, e.duration, e.delay, e.easing, [])
  }, TimelineAnimationEngine.prototype.create = function(e, t, n) {
    var r = this;
    void 0 === n && (n = {});
    var o, s = [], a = this._animations[e], u = new Map;
    if (a ? (o = buildAnimationTimelines(this._driver, t, a, {}, {}, n, q, s))
                .forEach(function(e) {
                  var t = getOrSetAsInMap(u, e.element, {});
                  e.postStyleProps.forEach(function(e) {
                    return t[e] = null
                  })
                }) :
            (s.push(
                 'The requested animation doesn\'t exist or has already been destroyed'),
             o = []),
        s.length)
      throw new Error(
          'Unable to create the animation due to the following errors: ' +
          s.join('\n'));
    u.forEach(function(e, t) {
      Object.keys(e).forEach(function(n) {
        e[n] = r._driver.computeStyle(t, n, i.AUTO_STYLE)
      })
    });
    var l = optimizeGroupPlayer(o.map(function(e) {
      var t = u.get(e.element);
      return r._buildPlayer(e, {}, t)
    }));
    return this._playersById[e] = l, l.onDestroy(function() {
      return r.destroy(e)
    }),
           this.players.push(l), l
  }, TimelineAnimationEngine.prototype.destroy = function(e) {
    var t = this._getPlayer(e);
    t.destroy(), delete this._playersById[e];
    var n = this.players.indexOf(t);
    n >= 0 && this.players.splice(n, 1)
  }, TimelineAnimationEngine.prototype._getPlayer = function(e) {
    var t = this._playersById[e];
    if (!t)
      throw new Error('Unable to find the timeline player referenced by ' + e);
    return t
  }, TimelineAnimationEngine.prototype.listen = function(e, t, n, r) {
    var i = makeAnimationEvent(t, '', '', '');
    return listenOnPlayer(this._getPlayer(e), n, i, r), function() {}
  }, TimelineAnimationEngine.prototype.command = function(e, t, n, r) {
    if ('register' != n)
      if ('create' != n) {
        var i = this._getPlayer(e);
        switch (n) {
          case 'play':
            i.play();
            break;
          case 'pause':
            i.pause();
            break;
          case 'reset':
            i.reset();
            break;
          case 'restart':
            i.restart();
            break;
          case 'finish':
            i.finish();
            break;
          case 'init':
            i.init();
            break;
          case 'setPosition':
            i.setPosition(parseFloat(r[0]));
            break;
          case 'destroy':
            this.destroy(e)
        }
      } else {
        var o = r[0] || {};
        this.create(e, t, o)
      }
    else
      this.register(e, r[0])
  }, TimelineAnimationEngine
            }(),
            z = [], K = {
              namespaceId: '',
              setForRemoval: null,
              hasAnimation: !1,
              removedBeforeQueried: !1
            },
            Y = {
              namespaceId: '',
              setForRemoval: null,
              hasAnimation: !1,
              removedBeforeQueried: !0
            },
            J = '__ng_removed', Q = function() {
              function StateValue(e) {
                var t = e && e.hasOwnProperty('value'), n = t ? e.value : e;
                if (this.value = function normalizeTriggerValue(e) {
                      return null != e ? e : null
                    }(n), t) {
                  var r = copyObj(e);
                  delete r.value, this.options = r
                } else
                  this.options = {};
                this.options.params || (this.options.params = {})
              }
              return Object.defineProperty(StateValue.prototype, 'params', {
                get: function() {
                  return this.options.params
                },
                enumerable: !0,
                configurable: !0
              }),
                     StateValue.prototype.absorbOptions = function(e) {
                       var t = e.params;
                       if (t) {
                         var n = this.options.params;
                         Object.keys(t).forEach(function(e) {
                           null == n[e] && (n[e] = t[e])
                         })
                       }
                     }, StateValue
            }(), X = new Q('void'), $ = new Q('DELETED'), Z = function() {
              function AnimationTransitionNamespace(e, t, n) {
                this.id = e, this.hostElement = t, this._engine = n,
                this.players = [], this._triggers = {}, this._queue = [],
                this._elementListeners = new Map,
                this._hostClassName = 'ng-tns-' + e,
                addClass(t, this._hostClassName)
              }
              return AnimationTransitionNamespace.prototype
                         .listen =
                         function(e, t, n, r) {
                var i = this;
                if (!this._triggers.hasOwnProperty(t))
                  throw new Error(
                      'Unable to listen on the animation trigger event "' + n +
                      '" because the animation trigger "' + t +
                      '" doesn\'t exist!');
                if (null == n || 0 == n.length)
                  throw new Error(
                      'Unable to listen on the animation trigger "' + t +
                      '" because the provided event is undefined!');
                if (!function isTriggerEventValid(e) {
                      return 'start' == e || 'done' == e
                    }(n))
                  throw new Error(
                      'The provided animation trigger event "' + n +
                      '" for the animation trigger "' + t +
                      '" is not supported!');
                var o = getOrSetAsInMap(this._elementListeners, e, []),
                    s = {name: t, phase: n, callback: r};
                o.push(s);
                var a = getOrSetAsInMap(this._engine.statesByElement, e, {});
                return a.hasOwnProperty(t) ||
                           (addClass(e, 'ng-trigger'),
                            addClass(e, 'ng-trigger-' + t), a[t] = null),
                       function() {
                         i._engine.afterFlush(function() {
                           var e = o.indexOf(s);
                           e >= 0 && o.splice(e, 1),
                               i._triggers[t] || delete a[t]
                         })
                       }
              },
               AnimationTransitionNamespace.prototype.register =
                         function(e, t) {
                 return !this._triggers[e] && (this._triggers[e] = t, !0)
               },
               AnimationTransitionNamespace.prototype._getTrigger =
                         function(e) {
                 var t = this._triggers[e];
                 if (!t)
                   throw new Error(
                       'The provided animation trigger "' + e +
                       '" has not been registered!');
                 return t
               },
               AnimationTransitionNamespace.prototype.trigger =
                         function(e, t, n, r) {
                 var i = this;
                 void 0 === r && (r = !0);
                 var o = this._getTrigger(t), s = new te(this.id, t, e),
                     a = this._engine.statesByElement.get(e);
                 a ||
                     (addClass(e, 'ng-trigger'), addClass(e, 'ng-trigger-' + t),
                      this._engine.statesByElement.set(e, a = {}));
                 var u = a[t], l = new Q(n);
                 if (!(n && n.hasOwnProperty('value')) && u &&
                         l.absorbOptions(u.options),
                     a[t] = l, u) {
                   if (u === $) return s
                 } else
                   u = X;
                 if ('void' === l.value || u.value !== l.value) {
                   var c =
                       getOrSetAsInMap(this._engine.playersByElement, e, []);
                   c.forEach(function(e) {
                     e.namespaceId == i.id && e.triggerName == t && e.queued &&
                         e.destroy()
                   });
                   var p = o.matchTransition(u.value, l.value), d = !1;
                   if (!p) {
                     if (!r) return;
                     p = o.fallbackTransition, d = !0
                   }
                   return this._engine.totalQueuedPlayers++, this._queue.push({
                     element: e,
                     triggerName: t,
                     transition: p,
                     fromState: u,
                     toState: l,
                     player: s,
                     isFallbackTransition: d
                   }),
                          d ||
                              (addClass(e, 'ng-animate-queued'),
                               s.onStart(function() {
                                 removeClass(e, 'ng-animate-queued')
                               })),
                          s.onDone(function() {
                            var t = i.players.indexOf(s);
                            t >= 0 && i.players.splice(t, 1);
                            var n = i._engine.playersByElement.get(e);
                            if (n) {
                              var r = n.indexOf(s);
                              r >= 0 && n.splice(r, 1)
                            }
                          }),
                          this.players.push(s), c.push(s), s
                 }
                 if (!function objEquals(e, t) {
                       var n = Object.keys(e), r = Object.keys(t);
                       if (n.length != r.length) return !1;
                       for (var i = 0; i < n.length; i++) {
                         var o = n[i];
                         if (!t.hasOwnProperty(o) || e[o] !== t[o]) return !1
                       }
                       return !0
                     }(u.params, l.params)) {
                   var h = [], m = o.matchStyles(u.value, u.params, h),
                       f = o.matchStyles(l.value, l.params, h);
                   h.length ? this._engine.reportError(h) :
                              this._engine.afterFlush(function() {
                                eraseStyles(e, m), setStyles(e, f)
                              })
                 }
               },
               AnimationTransitionNamespace.prototype.deregister =
                         function(e) {
                 var t = this;
                 delete this._triggers[e],
                     this._engine.statesByElement.forEach(function(t, n) {
                       delete t[e]
                     }),
                     this._elementListeners.forEach(function(n, r) {
                       t._elementListeners.set(r, n.filter(function(t) {
                         return t.name != e
                       }))
                     })
               },
               AnimationTransitionNamespace.prototype.clearElementCache =
                         function(e) {
                 this._engine.statesByElement.delete(e),
                     this._elementListeners.delete(e);
                 var t = this._engine.playersByElement.get(e);
                 t &&
                     (t.forEach(function(e) {
                       return e.destroy()
                     }),
                      this._engine.playersByElement.delete(e))
               },
               AnimationTransitionNamespace.prototype._destroyInnerNodes =
                         function(e, t, n) {
                 var r = this;
                 void 0 === n && (n = !1),
                     this._engine.driver.query(e, v, !0).forEach(function(e) {
                       if (n && function containsClass(e, t) {
                             if (e.classList) return e.classList.contains(t);
                             var n = e[ne];
                             return n && n[t]
                           }(e, r._hostClassName)) {
                         var i = r._engine.namespacesByHostElement.get(e);
                         i && i.removeNode(e, t, !0), r.removeNode(e, t, !0)
                       } else
                         r.clearElementCache(e)
                     })
               },
               AnimationTransitionNamespace.prototype.removeNode =
                         function(e, t, n) {
                 var r = this, i = this._engine;
                 !n && e.childElementCount && this._destroyInnerNodes(e, t, !0);
                 var o = i.statesByElement.get(e);
                 if (o) {
                   var s = [];
                   if (Object.keys(o).forEach(function(t) {
                         if (r._triggers[t]) {
                           var n = r.trigger(e, t, 'void', !1);
                           n && s.push(n)
                         }
                       }),
                       s.length)
                     return i.markElementAsRemoved(this.id, e, !0, t),
                            void optimizeGroupPlayer(s).onDone(function() {
                              return i.processLeaveNode(e)
                            })
                 }
                 var a = !1;
                 if (i.totalAnimations) {
                   var u =
                       i.players.length ? i.playersByQueriedElement.get(e) : [];
                   if (u && u.length)
                     a = !0;
                   else
                     for (var l = e; l = l.parentNode;) {
                       if (i.statesByElement.get(l)) {
                         a = !0;
                         break
                       }
                     }
                 }
                 var c = this._elementListeners.get(e);
                 if (c) {
                   var p = new Set;
                   c.forEach(function(t) {
                     var n = t.name;
                     if (!p.has(n)) {
                       p.add(n);
                       var o = r._triggers[n].fallbackTransition,
                           s = i.statesByElement.get(e)[n] || X,
                           a = new Q('void'), u = new te(r.id, n, e);
                       r._engine.totalQueuedPlayers++, r._queue.push({
                         element: e,
                         triggerName: n,
                         transition: o,
                         fromState: s,
                         toState: a,
                         player: u,
                         isFallbackTransition: !0
                       })
                     }
                   })
                 }
                 a ? i.markElementAsRemoved(this.id, e, !1, t) :
                     (i.afterFlush(function() {
                       return r.clearElementCache(e)
                     }),
                      i.destroyInnerAnimations(e), i._onRemovalComplete(e, t))
               },
               AnimationTransitionNamespace.prototype.insertNode =
                         function(e, t) {
                 addClass(e, this._hostClassName)
               },
               AnimationTransitionNamespace.prototype.drainQueuedTransitions =
                         function(e) {
                 var t = this, n = [];
                 return this._queue.forEach(function(r) {
                   var i = r.player;
                   if (!i.destroyed) {
                     var o = r.element, s = t._elementListeners.get(o);
                     s && s.forEach(function(t) {
                       if (t.name == r.triggerName) {
                         var n = makeAnimationEvent(
                             o, r.triggerName, r.fromState.value,
                             r.toState.value);
                         n._data = e,
                         listenOnPlayer(r.player, t.phase, n, t.callback)
                       }
                     }),
                         i.markedForDestroy ? t._engine.afterFlush(function() {
                           i.destroy()
                         }) :
                                              n.push(r)
                   }
                 }),
                        this._queue = [], n.sort(function(e, n) {
                          var r = e.transition.ast.depCount,
                              i = n.transition.ast.depCount;
                          return 0 == r || 0 == i ? r - i :
                              t._engine.driver.containsElement(
                                  e.element, n.element) ?
                                                    1 :
                                                    -1
                        })
               },
               AnimationTransitionNamespace.prototype.destroy =
                         function(e) {
                 this.players.forEach(function(e) {
                   return e.destroy()
                 }),
                     this._destroyInnerNodes(this.hostElement, e)
               },
               AnimationTransitionNamespace.prototype.elementContainsData =
                         function(e) {
                 var t = !1;
                 return this._elementListeners.has(e) && (t = !0),
                        t = !!this._queue.find(function(t) {
                          return t.element === e
                        }) ||
                            t
               },
               AnimationTransitionNamespace
            }(), ee = function() {
              function TransitionAnimationEngine(e, t) {
                this.driver = e, this._normalizer = t, this.players = [],
                this.newHostElements = new Map, this.playersByElement = new Map,
                this.playersByQueriedElement = new Map,
                this.statesByElement = new Map, this.disabledNodes = new Set,
                this.totalAnimations = 0, this.totalQueuedPlayers = 0,
                this._namespaceLookup = {}, this._namespaceList = [],
                this._flushFns = [], this._whenQuietFns = [],
                this.namespacesByHostElement = new Map,
                this.collectedEnterElements = [],
                this.collectedLeaveElements = [],
                this.onRemovalComplete = function(e, t) {}
              }
              return TransitionAnimationEngine.prototype
                         ._onRemovalComplete =
                         function(e, t) {
                this.onRemovalComplete(e, t)
              },
               Object.defineProperty(
                   TransitionAnimationEngine.prototype, 'queuedPlayers', {
                     get: function() {
                       var e = [];
                       return this._namespaceList.forEach(function(t) {
                         t.players.forEach(function(t) {
                           t.queued && e.push(t)
                         })
                       }),
                              e
                     },
                     enumerable: !0,
                     configurable: !0
                   }),
               TransitionAnimationEngine.prototype.createNamespace =
                         function(e, t) {
                 var n = new Z(e, t, this);
                 return t.parentNode ? this._balanceNamespaceList(n, t) :
                                       (this.newHostElements.set(t, n),
                                        this.collectEnterElement(t)),
                        this._namespaceLookup[e] = n
               },
               TransitionAnimationEngine.prototype._balanceNamespaceList =
                         function(e, t) {
                 var n = this._namespaceList.length - 1;
                 if (n >= 0) {
                   for (var r = !1, i = n; i >= 0; i--) {
                     var o = this._namespaceList[i];
                     if (this.driver.containsElement(o.hostElement, t)) {
                       this._namespaceList.splice(i + 1, 0, e), r = !0;
                       break
                     }
                   }
                   r || this._namespaceList.splice(0, 0, e)
                 } else
                   this._namespaceList.push(e);
                 return this.namespacesByHostElement.set(t, e), e
               },
               TransitionAnimationEngine.prototype.register =
                         function(e, t) {
                 var n = this._namespaceLookup[e];
                 return n || (n = this.createNamespace(e, t)), n
               },
               TransitionAnimationEngine.prototype.registerTrigger =
                         function(e, t, n) {
                 var r = this._namespaceLookup[e];
                 r && r.register(t, n) && this.totalAnimations++
               },
               TransitionAnimationEngine.prototype.destroy =
                         function(e, t) {
                 var n = this;
                 if (e) {
                   var r = this._fetchNamespace(e);
                   this.afterFlush(function() {
                     n.namespacesByHostElement.delete(r.hostElement),
                         delete n._namespaceLookup[e];
                     var t = n._namespaceList.indexOf(r);
                     t >= 0 && n._namespaceList.splice(t, 1)
                   }),
                       this.afterFlushAnimationsDone(function() {
                         return r.destroy(t)
                       })
                 }
               },
               TransitionAnimationEngine.prototype._fetchNamespace =
                         function(e) {
                 return this._namespaceLookup[e]
               },
               TransitionAnimationEngine.prototype.trigger =
                         function(e, t, n, r) {
                 return !!isElementNode(t) &&
                     (this._fetchNamespace(e).trigger(t, n, r), !0)
               },
               TransitionAnimationEngine.prototype.insertNode =
                         function(e, t, n, r) {
                 if (isElementNode(t)) {
                   var i = t[J];
                   i && i.setForRemoval && (i.setForRemoval = !1),
                       e && this._fetchNamespace(e).insertNode(t, n),
                       r && this.collectEnterElement(t)
                 }
               },
               TransitionAnimationEngine.prototype.collectEnterElement =
                         function(e) {
                 this.collectedEnterElements.push(e)
               },
               TransitionAnimationEngine.prototype.markElementAsDisabled =
                         function(e, t) {
                 t ? this.disabledNodes.has(e) ||
                         (this.disabledNodes.add(e),
                          addClass(e, 'ng-animate-disabled')) :
                     this.disabledNodes.has(e) &&
                         (this.disabledNodes.delete(e),
                          removeClass(e, 'ng-animate-disabled'))
               },
               TransitionAnimationEngine.prototype.removeNode =
                         function(e, t, n, r) {
                 if (isElementNode(t)) {
                   var i = e ? this._fetchNamespace(e) : null;
                   i ? i.removeNode(t, n, r) :
                       this.markElementAsRemoved(e, t, !1, n)
                 } else
                   this._onRemovalComplete(t, n)
               },
               TransitionAnimationEngine.prototype.markElementAsRemoved =
                         function(e, t, n, r) {
                 this.collectedLeaveElements.push(t), t[J] = {
                   namespaceId: e,
                   setForRemoval: r,
                   hasAnimation: n,
                   removedBeforeQueried: !1
                 }
               },
               TransitionAnimationEngine.prototype.listen =
                         function(e, t, n, r, i) {
                 return isElementNode(t) ?
                     this._fetchNamespace(e).listen(t, n, r, i) :
                     function() {}
               },
               TransitionAnimationEngine.prototype._buildInstruction =
                         function(e, t) {
                 return e.transition.build(
                     this.driver, e.element, e.fromState.value, e.toState.value,
                     e.fromState.options, e.toState.options, t)
               },
               TransitionAnimationEngine.prototype.destroyInnerAnimations =
                         function(e) {
                 var t = this, n = this.driver.query(e, v, !0);
                 n.forEach(function(e) {
                   var n = t.playersByElement.get(e);
                   n && n.forEach(function(e) {
                     e.queued ? e.markedForDestroy = !0 : e.destroy()
                   });
                   var r = t.statesByElement.get(e);
                   r && Object.keys(r).forEach(function(e) {
                     return r[e] = $
                   })
                 }),
                     0 != this.playersByQueriedElement.size &&
                     (n = this.driver.query(e, b, !0)).length &&
                     n.forEach(function(e) {
                       var n = t.playersByQueriedElement.get(e);
                       n && n.forEach(function(e) {
                         return e.finish()
                       })
                     })
               },
               TransitionAnimationEngine.prototype.whenRenderingDone =
                         function() {
                 var e = this;
                 return new Promise(function(t) {
                   if (e.players.length)
                     return optimizeGroupPlayer(e.players).onDone(function() {
                       return t()
                     });
                   t()
                 })
               },
               TransitionAnimationEngine.prototype.processLeaveNode =
                         function(e) {
                 var t = this, n = e[J];
                 if (n && n.setForRemoval) {
                   if (e[J] = K, n.namespaceId) {
                     this.destroyInnerAnimations(e);
                     var r = this._fetchNamespace(n.namespaceId);
                     r && r.clearElementCache(e)
                   }
                   this._onRemovalComplete(e, n.setForRemoval)
                 }
                 this.driver.matchesElement(e, '.ng-animate-disabled') &&
                     this.markElementAsDisabled(e, !1),
                     this.driver.query(e, '.ng-animate-disabled', !0)
                         .forEach(function(n) {
                           t.markElementAsDisabled(e, !1)
                         })
               },
               TransitionAnimationEngine.prototype.flush =
                         function(e) {
                 var t = this;
                 void 0 === e && (e = -1);
                 var n = [];
                 if (this.newHostElements.size &&
                         (this.newHostElements.forEach(function(e, n) {
                           return t._balanceNamespaceList(e, n)
                         }),
                          this.newHostElements.clear()),
                     this._namespaceList.length &&
                         (this.totalQueuedPlayers ||
                          this.collectedLeaveElements.length)) {
                   var r = [];
                   try {
                     n = this._flushAnimations(r, e)
                   } finally {
                     for (var i = 0; i < r.length; i++) r[i]()
                   }
                 } else
                   for (i = 0; i < this.collectedLeaveElements.length; i++) {
                     var o = this.collectedLeaveElements[i];
                     this.processLeaveNode(o)
                   }
                 if (this.totalQueuedPlayers = 0,
                     this.collectedEnterElements.length = 0,
                     this.collectedLeaveElements.length = 0,
                     this._flushFns.forEach(function(e) {
                       return e()
                     }),
                     this._flushFns = [], this._whenQuietFns.length) {
                   var s = this._whenQuietFns;
                   this._whenQuietFns = [],
                   n.length ? optimizeGroupPlayer(n).onDone(function() {
                     s.forEach(function(e) {
                       return e()
                     })
                   }) :
                              s.forEach(function(e) {
                                return e()
                              })
                 }
               },
               TransitionAnimationEngine.prototype.reportError =
                         function(e) {
                 throw new Error(
                     'Unable to process animations due to the following failed trigger transitions\n ' +
                     e.join('\n'))
               },
               TransitionAnimationEngine.prototype._flushAnimations =
                         function(e, t) {
                 var n = this, r = new L, o = [], s = new Map, a = [],
                     u = new Map, l = new Map, c = new Map, p = new Set;
                 this.disabledNodes.forEach(function(e) {
                   p.add(e);
                   for (var t = n.driver.query(e, '.ng-animate-queued', !0),
                            r = 0;
                        r < t.length; r++)
                     p.add(t[r])
                 });
                 for (var d =
                          function getBodyNode() {
                            if ('undefined' != typeof document)
                              return document.body;
                            return null
                          }(),
                          h = this.collectedEnterElements.length ?
                          this.collectedEnterElements.filter(
                              function createIsRootFilterFn(e) {
                                var t, n = new Set(e), r = new Set;
                                return t = function(e) {
                                  return !e ||
                                      !n.has(e.parentNode) &&
                                      (!!r.has(e.parentNode) ||
                                       !!t(e.parentNode) && (r.add(e), !0))
                                }
                              }(this.collectedEnterElements)) :
                          [],
                          m = 0;
                      m < h.length; m++)
                   addClass(h[m], 'ng-enter');
                 var f = [], y = new Set;
                 for (m = 0; m < this.collectedLeaveElements.length; m++) {
                   (x = (C = this.collectedLeaveElements[m])[J]) &&
                       x.setForRemoval &&
                       (addClass(C, 'ng-leave'), f.push(C),
                        x.hasAnimation || y.add(C))
                 }
                 e.push(function() {
                   h.forEach(function(e) {
                     return removeClass(e, 'ng-enter')
                   }),
                       f.forEach(function(e) {
                         removeClass(e, 'ng-leave'), n.processLeaveNode(e)
                       })
                 });
                 var g = [], v = [];
                 for (m = this._namespaceList.length - 1; m >= 0; m--) {
                   this._namespaceList[m].drainQueuedTransitions(t).forEach(
                       function(e) {
                         var t = e.player;
                         g.push(t);
                         var i = e.element;
                         if (d && n.driver.containsElement(d, i)) {
                           var s = n._buildInstruction(e, r);
                           if (s.errors && s.errors.length)
                             v.push(s);
                           else {
                             if (e.isFallbackTransition)
                               return t.onStart(function() {
                                 return eraseStyles(i, s.fromStyles)
                               }),
                                      t.onDestroy(function() {
                                        return setStyles(i, s.toStyles)
                                      }),
                                      void o.push(t);
                             s.timelines.forEach(function(e) {
                               return e.stretchStartingKeyframe = !0
                             }),
                                 r.append(i, s.timelines);
                             var p = {instruction: s, player: t, element: i};
                             a.push(p), s.queriedElements.forEach(function(e) {
                               return getOrSetAsInMap(u, e, []).push(t)
                             }),
                                 s.preStyleProps.forEach(function(e, t) {
                                   var n = Object.keys(e);
                                   if (n.length) {
                                     var r = l.get(t);
                                     r || l.set(t, r = new Set),
                                         n.forEach(function(e) {
                                           return r.add(e)
                                         })
                                   }
                                 }),
                                 s.postStyleProps.forEach(function(e, t) {
                                   var n = Object.keys(e), r = c.get(t);
                                   r || c.set(t, r = new Set),
                                       n.forEach(function(e) {
                                         return r.add(e)
                                       })
                                 })
                           }
                         } else
                           t.destroy()
                       })
                 }
                 if (v.length) {
                   var _ = [];
                   v.forEach(function(e) {
                     _.push('@' + e.triggerName + ' has failed due to:\n'),
                         e.errors.forEach(function(e) {
                           return _.push('- ' + e + '\n')
                         })
                   }),
                       g.forEach(function(e) {
                         return e.destroy()
                       }),
                       this.reportError(_)
                 }
                 var S = new Set;
                 for (m = 0; m < h.length; m++) {
                   var C = h[m];
                   r.has(C) || S.add(C)
                 }
                 var A = new Map, T = [];
                 a.forEach(function(e) {
                   var t = e.element;
                   r.has(t) &&
                       (T.unshift(t),
                        n._beforeAnimationBuild(
                            e.player.namespaceId, e.instruction, A))
                 }),
                     o.forEach(function(e) {
                       var t = e.element;
                       n._getPreviousPlayers(
                            t, !1, e.namespaceId, e.triggerName, null)
                           .forEach(function(e) {
                             getOrSetAsInMap(A, t, []).push(e), e.destroy()
                           })
                     });
                 var w = f.filter(function(e) {
                   return replacePostStylesAsPre(e, l, c)
                 }),
                     E = cloakAndComputeStyles(this.driver, y, c, i.AUTO_STYLE),
                     P = E[0];
                 E[1].forEach(function(e) {
                   replacePostStylesAsPre(e, l, c) && w.push(e)
                 });
                 var O =
                     (l.size ? cloakAndComputeStyles(
                                   this.driver, S, l, i['ɵPRE_STYLE']) :
                               [new Map])[0];
                 w.forEach(function(e) {
                   var t = P.get(e), n = O.get(e);
                   P.set(e, Object.assign({}, t, n))
                 });
                 var I = [], N = [];
                 a.forEach(function(e) {
                   var t = e.element, i = e.player, a = e.instruction;
                   if (r.has(t)) {
                     if (p.has(t)) return void o.push(i);
                     var u = n._buildAnimation(i.namespaceId, a, A, s, O, P);
                     i.setRealPlayer(u);
                     for (var l = null, c = 0; c < T.length; c++) {
                       var d = T[c];
                       if (d === t) break;
                       if (n.driver.containsElement(d, t)) {
                         l = d;
                         break
                       }
                     }
                     if (l) {
                       var h = n.playersByElement.get(l);
                       h && h.length &&
                           (i.parentPlayer = optimizeGroupPlayer(h)),
                           o.push(i)
                     } else
                       I.push(i)
                   } else
                     eraseStyles(t, a.fromStyles), i.onDestroy(function() {
                       return setStyles(t, a.toStyles)
                     }),
                         N.push(i), p.has(t) && o.push(i)
                 }),
                     N.forEach(function(e) {
                       var t = s.get(e.element);
                       if (t && t.length) {
                         var n = optimizeGroupPlayer(t);
                         e.setRealPlayer(n)
                       }
                     }),
                     o.forEach(function(e) {
                       e.parentPlayer ? e.parentPlayer.onDestroy(function() {
                         return e.destroy()
                       }) :
                                        e.destroy()
                     });
                 for (m = 0; m < f.length; m++) {
                   var x = (C = f[m])[J];
                   if (removeClass(C, 'ng-leave'), !x || !x.hasAnimation) {
                     var D = [];
                     if (u.size) {
                       var M = u.get(C);
                       M && M.length && D.push.apply(D, M);
                       for (var F = this.driver.query(C, b, !0), R = 0;
                            R < F.length; R++) {
                         var V = u.get(F[R]);
                         V && V.length && D.push.apply(D, V)
                       }
                     }
                     var k = D.filter(function(e) {
                       return !e.destroyed
                     });
                     k.length ? removeNodesAfterAnimationDone(this, C, k) :
                                this.processLeaveNode(C)
                   }
                 }
                 return f.length = 0, I.forEach(function(e) {
                   n.players.push(e), e.onDone(function() {
                     e.destroy();
                     var t = n.players.indexOf(e);
                     n.players.splice(t, 1)
                   }),
                       e.play()
                 }),
                        I
               },
               TransitionAnimationEngine.prototype.elementContainsData =
                         function(e, t) {
                 var n = !1, r = t[J];
                 return r && r.setForRemoval && (n = !0),
                        this.playersByElement.has(t) && (n = !0),
                        this.playersByQueriedElement.has(t) && (n = !0),
                        this.statesByElement.has(t) && (n = !0),
                        this._fetchNamespace(e).elementContainsData(t) || n
               },
               TransitionAnimationEngine.prototype.afterFlush =
                         function(e) {
                 this._flushFns.push(e)
               },
               TransitionAnimationEngine.prototype.afterFlushAnimationsDone =
                         function(e) {
                 this._whenQuietFns.push(e)
               },
               TransitionAnimationEngine.prototype._getPreviousPlayers =
                         function(e, t, n, r, i) {
                 var o = [];
                 if (t) {
                   var s = this.playersByQueriedElement.get(e);
                   s && (o = s)
                 } else {
                   var a = this.playersByElement.get(e);
                   if (a) {
                     var u = !i || 'void' == i;
                     a.forEach(function(e) {
                       e.queued || (u || e.triggerName == r) && o.push(e)
                     })
                   }
                 }
                 return (n || r) && (o = o.filter(function(e) {
                          return (!n || n == e.namespaceId) &&
                              (!r || r == e.triggerName)
                        })),
                        o
               },
               TransitionAnimationEngine.prototype._beforeAnimationBuild =
                         function(e, t, n) {
                 var r = this, i = t.triggerName, o = t.element,
                     s = t.isRemovalTransition ? void 0 : e,
                     a = t.isRemovalTransition ? void 0 : i;
                 t.timelines.map(function(e) {
                   var i = e.element, u = i !== o,
                       l = getOrSetAsInMap(n, i, []);
                   r._getPreviousPlayers(i, u, s, a, t.toState)
                       .forEach(function(e) {
                         var t = e.getRealPlayer();
                         t.beforeDestroy && t.beforeDestroy(), e.destroy(),
                             l.push(e)
                       })
                 }),
                     eraseStyles(o, t.fromStyles)
               },
               TransitionAnimationEngine.prototype._buildAnimation =
                         function(e, t, n, r, o, s) {
                 var a = this, u = t.triggerName, l = t.element, c = [],
                     p = new Set, d = new Set, h = t.timelines.map(function(t) {
                       var h = t.element;
                       p.add(h);
                       var m = h[J];
                       if (m && m.removedBeforeQueried)
                         return new i.NoopAnimationPlayer;
                       var f = h !== l,
                           y =
                               function flattenGroupPlayers(e) {
                             var t = [];
                             return function _flattenGroupPlayersRecur(e, t) {
                               for (var n = 0; n < e.length; n++) {
                                 var r = e[n];
                                 r instanceof i['ɵAnimationGroupPlayer'] ?
                                     _flattenGroupPlayersRecur(r.players, t) :
                                     t.push(r)
                               }
                             }(e, t),
                                    t
                           }((n.get(h) || z).map(function(e) {
                                 return e.getRealPlayer()
                               })).filter(function(e) {
                             var t = e;
                             return !!t.element && t.element === h
                           }),
                           g = o.get(h), v = s.get(h),
                           b = normalizeKeyframes(
                               a.driver, a._normalizer, 0, t.keyframes, g, v),
                           _ = a._buildPlayer(t, b, y);
                       if (t.subTimeline && r && d.add(h), f) {
                         var S = new te(e, u, h);
                         S.setRealPlayer(_), c.push(S)
                       }
                       return _
                     });
                 c.forEach(function(e) {
                   getOrSetAsInMap(a.playersByQueriedElement, e.element, [])
                       .push(e),
                       e.onDone(function() {
                         return function deleteOrUnsetInMap(e, t, n) {
                           var r;
                           if (e instanceof Map) {
                             if (r = e.get(t)) {
                               if (r.length) {
                                 var i = r.indexOf(n);
                                 r.splice(i, 1)
                               }
                               0 == r.length && e.delete(t)
                             }
                           } else if (r = e[t]) {
                             if (r.length) {
                               var i = r.indexOf(n);
                               r.splice(i, 1)
                             }
                             0 == r.length && delete e[t]
                           }
                           return r
                         }(a.playersByQueriedElement, e.element, e)
                       })
                 }),
                     p.forEach(function(e) {
                       return addClass(e, 'ng-animating')
                     });
                 var m = optimizeGroupPlayer(h);
                 return m.onDestroy(function() {
                   p.forEach(function(e) {
                     return removeClass(e, 'ng-animating')
                   }),
                       setStyles(l, t.toStyles)
                 }),
                        d.forEach(function(e) {
                          getOrSetAsInMap(r, e, []).push(m)
                        }),
                        m
               },
               TransitionAnimationEngine.prototype._buildPlayer =
                         function(e, t, n) {
                 return t.length > 0 ?
                     this.driver.animate(
                         e.element, t, e.duration, e.delay, e.easing, n) :
                     new i.NoopAnimationPlayer
               },
               TransitionAnimationEngine
            }(), te = function() {
              function TransitionAnimationPlayer(e, t, n) {
                this.namespaceId = e, this.triggerName = t, this.element = n,
                this._player = new i.NoopAnimationPlayer,
                this._containsRealPlayer = !1, this._queuedCallbacks = {},
                this._destroyed = !1, this.markedForDestroy = !1
              }
              return Object.defineProperty(
                         TransitionAnimationPlayer.prototype, 'queued', {
                           get: function() {
                             return 0 == this._containsRealPlayer
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         TransitionAnimationPlayer.prototype, 'destroyed', {
                           get: function() {
                             return this._destroyed
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     TransitionAnimationPlayer.prototype.setRealPlayer =
                         function(e) {
                       var t = this;
                       this._containsRealPlayer ||
                           (this._player = e,
                            Object.keys(this._queuedCallbacks)
                                .forEach(function(n) {
                                  t._queuedCallbacks[n].forEach(function(t) {
                                    return listenOnPlayer(e, n, void 0, t)
                                  })
                                }),
                            this._queuedCallbacks = {},
                            this._containsRealPlayer = !0)
                     },
                     TransitionAnimationPlayer.prototype.getRealPlayer =
                         function() {
                       return this._player
                     },
                     TransitionAnimationPlayer.prototype._queueEvent =
                         function(e, t) {
                       getOrSetAsInMap(this._queuedCallbacks, e, []).push(t)
                     },
                     TransitionAnimationPlayer.prototype.onDone =
                         function(e) {
                       this.queued && this._queueEvent('done', e),
                           this._player.onDone(e)
                     },
                     TransitionAnimationPlayer.prototype.onStart =
                         function(e) {
                       this.queued && this._queueEvent('start', e),
                           this._player.onStart(e)
                     },
                     TransitionAnimationPlayer.prototype.onDestroy =
                         function(e) {
                       this.queued && this._queueEvent('destroy', e),
                           this._player.onDestroy(e)
                     },
                     TransitionAnimationPlayer.prototype.init =
                         function() {
                       this._player.init()
                     },
                     TransitionAnimationPlayer.prototype.hasStarted =
                         function() {
                       return !this.queued && this._player.hasStarted()
                     },
                     TransitionAnimationPlayer.prototype.play =
                         function() {
                       !this.queued && this._player.play()
                     },
                     TransitionAnimationPlayer.prototype.pause =
                         function() {
                       !this.queued && this._player.pause()
                     },
                     TransitionAnimationPlayer.prototype.restart =
                         function() {
                       !this.queued && this._player.restart()
                     },
                     TransitionAnimationPlayer.prototype.finish =
                         function() {
                       this._player.finish()
                     },
                     TransitionAnimationPlayer.prototype.destroy =
                         function() {
                       this._destroyed = !0, this._player.destroy()
                     },
                     TransitionAnimationPlayer.prototype.reset =
                         function() {
                       !this.queued && this._player.reset()
                     },
                     TransitionAnimationPlayer.prototype.setPosition =
                         function(e) {
                       this.queued || this._player.setPosition(e)
                     },
                     TransitionAnimationPlayer.prototype.getPosition =
                         function() {
                       return this.queued ? 0 : this._player.getPosition()
                     },
                     Object.defineProperty(
                         TransitionAnimationPlayer.prototype, 'totalTime', {
                           get: function() {
                             return this._player.totalTime
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     TransitionAnimationPlayer
            }();
        function isElementNode(e) {
          return e && 1 === e.nodeType
        }
        function cloakElement(e, t) {
          var n = e.style.display;
          return e.style.display = null != t ? t : 'none', n
        }
        function cloakAndComputeStyles(e, t, n, r) {
          var i = [];
          t.forEach(function(e) {
            return i.push(cloakElement(e))
          });
          var o = new Map, s = [];
          n.forEach(function(t, n) {
            var i = {};
            t.forEach(function(t) {
              var o = i[t] = e.computeStyle(n, t, r);
              o && 0 != o.length || (n[J] = Y, s.push(n))
            }),
                o.set(n, i)
          });
          var a = 0;
          return t.forEach(function(e) {
            return cloakElement(e, i[a++])
          }),
                 [o, s]
        }
        var ne = '$$classes';
        function addClass(e, t) {
          if (e.classList)
            e.classList.add(t);
          else {
            var n = e[ne];
            n || (n = e[ne] = {}), n[t] = !0
          }
        }
        function removeClass(e, t) {
          if (e.classList)
            e.classList.remove(t);
          else {
            var n = e[ne];
            n && delete n[t]
          }
        }
        function removeNodesAfterAnimationDone(e, t, n) {
          optimizeGroupPlayer(n).onDone(function() {
            return e.processLeaveNode(t)
          })
        }
        function replacePostStylesAsPre(e, t, n) {
          var r = n.get(e);
          if (!r) return !1;
          var i = t.get(e);
          return i ? r.forEach(function(e) {
            return i.add(e)
          }) :
                     t.set(e, r),
                 n.delete(e), !0
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var re =
                function() {
          function AnimationEngine(e, t) {
            var n = this;
            this._triggerCache = {}, this.onRemovalComplete = function(e, t) {},
            this._transitionEngine = new ee(e, t),
            this._timelineEngine = new W(e, t),
            this._transitionEngine.onRemovalComplete = function(e, t) {
              return n.onRemovalComplete(e, t)
            }
          }
          return AnimationEngine.prototype.registerTrigger =
                     function(e, t, n, r, i) {
            var o = e + '-' + r, s = this._triggerCache[o];
            if (!s) {
              var a = [], u = buildAnimationAst(i, a);
              if (a.length)
                throw new Error(
                    'The animation trigger "' + r +
                    '" has failed to build due to the following errors:\n - ' +
                    a.join('\n - '));
              s = function buildTrigger(e, t) {
                return new U(e, t)
              }(r, u), this._triggerCache[o] = s
            }
            this._transitionEngine.registerTrigger(t, r, s)
          },
                 AnimationEngine.prototype.register =
                     function(e, t) {
                   this._transitionEngine.register(e, t)
                 },
                 AnimationEngine.prototype.destroy =
                     function(e, t) {
                   this._transitionEngine.destroy(e, t)
                 },
                 AnimationEngine.prototype.onInsert =
                     function(e, t, n, r) {
                   this._transitionEngine.insertNode(e, t, n, r)
                 },
                 AnimationEngine.prototype.onRemove =
                     function(e, t, n) {
                   this._transitionEngine.removeNode(e, t, n)
                 },
                 AnimationEngine.prototype.disableAnimations =
                     function(e, t) {
                   this._transitionEngine.markElementAsDisabled(e, t)
                 },
                 AnimationEngine.prototype.process =
                     function(e, t, n, r) {
                   if ('@' == n.charAt(0)) {
                     var i = parseTimelineCommand(n), o = i[0], s = i[1], a = r;
                     this._timelineEngine.command(o, t, s, a)
                   } else
                     this._transitionEngine.trigger(e, t, n, r)
                 },
                 AnimationEngine.prototype.listen =
                     function(e, t, n, r, i) {
                   if ('@' == n.charAt(0)) {
                     var o = parseTimelineCommand(n), s = o[0], a = o[1];
                     return this._timelineEngine.listen(s, t, a, i)
                   }
                   return this._transitionEngine.listen(e, t, n, r, i)
                 },
                 AnimationEngine.prototype.flush =
                     function(e) {
                   void 0 === e && (e = -1), this._transitionEngine.flush(e)
                 },
                 Object.defineProperty(AnimationEngine.prototype, 'players', {
                   get: function() {
                     return this._transitionEngine.players.concat(
                         this._timelineEngine.players)
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 AnimationEngine.prototype.whenRenderingDone = function() {
                   return this._transitionEngine.whenRenderingDone()
                 }, AnimationEngine
        }(),
            ie = function() {
              function WebAnimationsPlayer(e, t, n, r) {
                void 0 === r && (r = []);
                var i = this;
                this.element = e, this.keyframes = t, this.options = n,
                this.previousPlayers = r, this._onDoneFns = [],
                this._onStartFns = [], this._onDestroyFns = [],
                this._initialized = !1, this._finished = !1, this._started = !1,
                this._destroyed = !1, this.time = 0, this.parentPlayer = null,
                this.previousStyles = {}, this.currentSnapshot = {},
                this._duration = n.duration, this._delay = n.delay || 0,
                this.time = this._duration + this._delay,
                function allowPreviousPlayerStylesMerge(e, t) {
                  return 0 === e || 0 === t
                }(this._duration, this._delay) &&
                    r.forEach(function(e) {
                      var t = e.currentSnapshot;
                      Object.keys(t).forEach(function(e) {
                        return i.previousStyles[e] = t[e]
                      })
                    })
              }
              return WebAnimationsPlayer
                         .prototype._onFinish =
                         function() {
                this._finished ||
                    (this._finished = !0, this._onDoneFns.forEach(function(e) {
                      return e()
                    }),
                     this._onDoneFns = [])
              },
      WebAnimationsPlayer.prototype.init =
                         function() {
        this._buildPlayer(), this._preparePlayerBeforeStart()
      },
      WebAnimationsPlayer.prototype._buildPlayer =
                         function() {
        var e = this;
        if (!this._initialized) {
          this._initialized = !0;
          var t = this.keyframes.map(function(e) {
            return copyStyles(e, !1)
          }),
              n = Object.keys(this.previousStyles);
          if (n.length) {
            var r = t[0], i = [];
            if (n.forEach(function(t) {
                  r.hasOwnProperty(t) || i.push(t), r[t] = e.previousStyles[t]
                }),
                i.length)
              for (var o = this, s = function() {
                     var e = t[a];
                     i.forEach(function(t) {
                       e[t] = _computeStyle(o.element, t)
                     })
                   }, a = 1; a < t.length; a++)
                s()
          }
          this._player =
              this._triggerWebAnimation(this.element, t, this.options),
          this._finalKeyframe = t.length ? t[t.length - 1] : {},
          this._player.addEventListener('finish', function() {
            return e._onFinish()
          })
        }
      },
      WebAnimationsPlayer.prototype._preparePlayerBeforeStart =
                         function() {
        this._delay ? this._resetDomPlayerState() : this._player.pause()
      },
      WebAnimationsPlayer.prototype._triggerWebAnimation =
                         function(e, t, n) {
        return e.animate(t, n)
      },
      Object.defineProperty(WebAnimationsPlayer.prototype, 'domPlayer', {
        get: function() {
          return this._player
        },
        enumerable: !0,
        configurable: !0
      }),
      WebAnimationsPlayer.prototype.onStart =
                         function(e) {
        this._onStartFns.push(e)
      },
      WebAnimationsPlayer.prototype.onDone =
                         function(e) {
        this._onDoneFns.push(e)
      },
      WebAnimationsPlayer.prototype.onDestroy =
                         function(e) {
        this._onDestroyFns.push(e)
      },
      WebAnimationsPlayer.prototype.play =
                         function() {
        this._buildPlayer(),
            this.hasStarted() ||
            (this._onStartFns.forEach(function(e) {
              return e()
            }),
             this._onStartFns = [], this._started = !0),
            this._player.play()
      },
      WebAnimationsPlayer.prototype.pause =
                         function() {
        this.init(), this._player.pause()
      },
      WebAnimationsPlayer.prototype.finish =
                         function() {
        this.init(), this._onFinish(), this._player.finish()
      },
      WebAnimationsPlayer.prototype.reset =
                         function() {
        this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1,
                                     this._started = !1
      },
      WebAnimationsPlayer.prototype._resetDomPlayerState =
                         function() {
        this._player && this._player.cancel()
      },
      WebAnimationsPlayer.prototype.restart =
                         function() {
        this.reset(), this.play()
      },
      WebAnimationsPlayer.prototype.hasStarted =
                         function() {
        return this._started
      },
      WebAnimationsPlayer.prototype.destroy =
                         function() {
        this._destroyed ||
            (this._destroyed = !0, this._resetDomPlayerState(),
             this._onFinish(), this._onDestroyFns.forEach(function(e) {
               return e()
             }),
             this._onDestroyFns = [])
      },
      WebAnimationsPlayer.prototype.setPosition =
                         function(e) {
        this._player.currentTime = e * this.time
      },
      WebAnimationsPlayer.prototype.getPosition =
                         function() {
        return this._player.currentTime / this.time
      },
      Object.defineProperty(WebAnimationsPlayer.prototype, 'totalTime', {
        get: function() {
          return this._delay + this._duration
        },
        enumerable: !0,
        configurable: !0
      }),
      WebAnimationsPlayer.prototype.beforeDestroy = function() {
        var e = this, t = {};
        this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach(function(n) {
              'offset' != n &&
                  (t[n] = e._finished ? e._finalKeyframe[n] :
                                        _computeStyle(e.element, n))
            }),
            this.currentSnapshot = t
      }, WebAnimationsPlayer
            }();
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        function _computeStyle(e, t) {
          return window.getComputedStyle(e)[t]
        }
        /**
         * @license
         * Copyright Google Inc. All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can
         * be found in the LICENSE file at https://angular.io/license
         */
        var oe = function() {
          function WebAnimationsDriver() {}
          return WebAnimationsDriver
                     .prototype.matchesElement =
                     function(e, t) {
            return c(e, t)
          },
  WebAnimationsDriver.prototype.containsElement = function(e, t) {
    return p(e, t)
  }, WebAnimationsDriver.prototype.query = function(e, t, n) {
    return d(e, t, n)
  }, WebAnimationsDriver.prototype.computeStyle = function(e, t, n) {
    return window.getComputedStyle(e)[t]
  }, WebAnimationsDriver.prototype.animate = function(e, t, n, r, i, o) {
    void 0 === o && (o = []);
    var s = {duration: n, delay: r, fill: 0 == r ? 'both' : 'forwards'};
    i && (s.easing = i);
    var a = o.filter(function(e) {
      return e instanceof ie
    });
    return new ie(e, t, s, a)
  }, WebAnimationsDriver
        }();
        function supportsWebAnimations() {
          return 'undefined' != typeof Element &&
              'function' == typeof Element.prototype.animate
        }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      },
      563: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(25);
        n(564);
        var o = function() {
          function AppComponent(e, t) {
            this.selectedStation = null;
            var n, r = t.nativeElement.getAttribute('config');
            try {
              n = JSON.parse(r)
            } catch (t) {
              return console.debug(
                         'Could not parse config, falling back to defaults.'),
                     void e.initialize({})
            }
            e.initialize(n)
          }
          return AppComponent = __decorate(
                     [
                       r.Component({
                         selector: 'htf-app',
                         template: n(565),
                         styles: [n(566)]
                       }),
                       __metadata(
                           'design:paramtypes', [i.ConfigService, r.ElementRef])
                     ],
                     AppComponent)
        }();
        t.AppComponent = o
      },
      564: function(e, t) {},
      565: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<htf-flash-messages></htf-flash-messages>\n\n<div class="htf-layout-nav-container">\n  <div class="htf-layout-nav">\n    <h1>OpenHTF</h1>\n    <h2>Hardware Testing Framework.</h2>\n  </div>\n</div>\n\n<div class="htf-layout-container">\n  <htf-station-list\n    [selectedStation]="selectedStation"\n    [style.display]="selectedStation === null ? \'initial\' : \'none\'"\n    (onSelectStation)="selectedStation = $event.station">\n  </htf-station-list>\n\n  <htf-station\n    *ngIf="selectedStation !== null"\n    [selectedStation]="selectedStation"\n    (onDeselectStation)="selectedStation = null">\n  </htf-station>\n</div>\n'
      },
      566: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nh1 {\n  color: #323232;\n  font-size: 20px;\n  margin: 0; }\n\nh2 {\n  color: #949a9f;\n  font-size: 12px;\n  margin-left: 5px; }\n'
      },
      567: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(19), i = n(2), o = n(25), s = n(32), a = n(568), u = function() {
          function CoreModule(e) {
            if (e)
              throw new Error(
                  'CoreModule is already loaded. Import it in the AppModule only')
          }
          return CoreModule = __decorate(
                     [
                       i.NgModule({
                         imports: [r.CommonModule],
                         declarations: [
                           a.FlashMessagesComponent, a.FlashMessageTypeToClass
                         ],
                         providers: [o.ConfigService, s.FlashMessageService],
                         exports: [r.CommonModule, a.FlashMessagesComponent]
                       }),
                       __param(0, i.Optional()), __param(0, i.SkipSelf()),
                       __metadata('design:paramtypes', [CoreModule])
                     ],
                     CoreModule)
        }();
        t.CoreModule = u
      },
      568: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(235), o = n(32),
            s =
                ((u = {})[i.FlashMessageType.error] = 'ng-flash-message-error',
                 u[i.FlashMessageType.warn] = 'ng-flash-message-warn', u),
            a = function() {
              function FlashMessageTypeToClass() {}
              return FlashMessageTypeToClass.prototype.transform =
                         function(e) {
                return s[e]
              },
                     FlashMessageTypeToClass = __decorate(
                         [r.Pipe({name: 'flashMessageTypeToClass'})],
                         FlashMessageTypeToClass)
            }();
        t.FlashMessageTypeToClass = a;
        var u, l = function() {
          function FlashMessagesComponent(e) {
            this.flashMessage = e
          }
          return Object.defineProperty(
                     FlashMessagesComponent.prototype, 'message', {
                       get: function() {
                         if (this.flashMessage.messages.length > 0)
                           return this.flashMessage.messages[0]
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 FlashMessagesComponent.prototype.dismiss =
                     function() {
                   this.flashMessage.dismissEarly()
                 },
                 FlashMessagesComponent.prototype.onMouseEnter =
                     function(e) {
                   this.flashMessage.cancelDismissal(),
                       e.showTooltip = e.hasTooltip
                 },
                 FlashMessagesComponent.prototype.onMouseExit =
                     function(e) {
                   this.flashMessage.startDismissal(), e.showTooltip = !1
                 },
                 FlashMessagesComponent = __decorate(
                     [
                       r.Component({
                         selector: 'htf-flash-messages',
                         template: n(569),
                         styles: [n(570)]
                       }),
                       __metadata('design:paramtypes', [o.FlashMessageService])
                     ],
                     FlashMessagesComponent)
        }();
        t.FlashMessagesComponent = l
      },
      569: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div *ngIf="message">\n  <div\n    class="flash-message"\n    [class.flash-message--has-tooltip]="message.hasTooltip"\n    [class.flash-message--is-dismissed]="message.isDismissed"\n    [ngClass]="message.type | flashMessageTypeToClass"\n    (mouseenter)="onMouseEnter(message)"\n    (mouseleave)="onMouseExit(message)">\n    <button\n      type="button"\n      class="flash-message-dismissal-button"\n      (click)="dismiss()">\n      X\n    </button>\n    {{ message.content }}\n  </div>\n\n  \x3c!-- Avoid whitespace since flash-message-tooltip uses white-space: pre --\x3e\n  <div\n    [class.flash-message-tooltip--is-visible]="message.showTooltip"\n    class="flash-message-tooltip">{{ message.tooltip }}</div>\n</div>\n'
      },
      570: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n@keyframes flash-message-enter {\n  0% {\n    top: -32px; }\n  100% {\n    top: 0; } }\n\n@keyframes flash-message-exit {\n  0% {\n    top: 0; }\n  100% {\n    top: -32px; } }\n\n.flash-message {\n  animation: flash-message-enter 400ms forwards;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  height: 32px;\n  left: 50%;\n  line-height: 31px;\n  min-width: 400px;\n  opacity: .9;\n  padding: 0 20px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 2; }\n  .flash-message.flash-message--has-tooltip {\n    cursor: pointer; }\n  .flash-message.flash-message--is-dismissed {\n    animation: flash-message-exit 400ms forwards; }\n  .flash-message.ng-flash-message-error {\n    background: #ff5d4e;\n    color: #fff; }\n  .flash-message.ng-flash-message-warn {\n    background: #ffe54d;\n    color: #323232; }\n\n.flash-message-tooltip {\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 3px;\n  color: #fff;\n  font-size: 12px;\n  left: 50%;\n  line-height: initial;\n  max-width: 500px;\n  opacity: 0;\n  padding: 10px;\n  position: fixed;\n  text-align: left;\n  top: 40px;\n  transform: translateX(-50%);\n  transition: 200ms ease opacity;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  z-index: 2; }\n  .flash-message-tooltip.flash-message-tooltip--is-visible {\n    opacity: 1; }\n\n.flash-message-dismissal-button {\n  -webkit-appearance: initial;\n  background: transparent;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  color: inherit;\n  display: inline-block;\n  float: left;\n  font-size: 11px;\n  height: 18px;\n  left: -6px;\n  padding-left: 1px;\n  position: relative;\n  top: 6px;\n  width: 18px; }\n  .flash-message-dismissal-button:focus, .flash-message-dismissal-button:active {\n    outline: none; }\n\n.flash-message.ng-flash-message-warn .flash-message-dismissal-button {\n  border-color: #323232; }\n'
      },
      571: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(95), o = function() {
          function ElapsedTimePipe(e) {
            this.time = e
          }
          return ElapsedTimePipe.prototype.transform =
                     function(e, t) {
            return void 0 === t && (t = '%s'),
                   t.replace('%s', this.getElapsedTimeString(e))
          },
                 ElapsedTimePipe.prototype.getElapsedTimeString =
                     function(e) {
                   if (null === this.time.last) return '0s';
                   var t = e.endTimeMillis || this.time.last,
                       n = Math.round((t - e.startTimeMillis) / 1e3),
                       r = Math.floor(n / 60);
                   if (0 === r) return n + 's';
                   var i = n - 60 * r, o = Math.floor(r / 60);
                   return 0 === o ? r + 'm ' + i + 's' :
                                    o + 'h ' + (r - 60 * o) + 'm ' + i + 's'
                 },
                 ElapsedTimePipe = __decorate(
                     [
                       r.Pipe({name: 'elapsedTime', pure: !1}),
                       __metadata('design:paramtypes', [i.TimeService])
                     ],
                     ElapsedTimePipe)
        }();
        t.ElapsedTimePipe = o
      },
      572: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function FocusDirective(e) {
            this.ref = e
          }
          return FocusDirective.prototype.ngOnChanges =
                     function() {
            this.focusOn && this.ref.nativeElement.focus()
          },
                 __decorate(
                     [r.Input('htfFocus'), __metadata('design:type', Boolean)],
                     FocusDirective.prototype, 'focusOn', void 0),
                 FocusDirective = __decorate(
                     [
                       r.Directive({selector: '[htfFocus]'}),
                       __metadata('design:paramtypes', [r.ElementRef])
                     ],
                     FocusDirective)
        }();
        t.FocusDirective = i
      },
      573: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2),
            i = function() {
              function GenealogyNodeComponent() {}
              return GenealogyNodeComponent
                         .prototype.ngOnInit =
                         function() {
                null === this.maxDepth ?
                    this.childMaxDepth = null :
                    this.childMaxDepth = this.maxDepth - 1,
                    void 0 === this.isRoot && (this.isRoot = !0)
              },
   __decorate([r.Input(), __metadata('design:type', Boolean)],
                  GenealogyNodeComponent.prototype, 'isFirst', void 0),
   __decorate([r.Input(), __metadata('design:type', Boolean)],
                  GenealogyNodeComponent.prototype, 'isRoot', void 0),
   __decorate([r.Input(), __metadata('design:type', Object)],
                  GenealogyNodeComponent.prototype, 'node', void 0),
   __decorate([r.Input(), __metadata('design:type', Number)],
                  GenealogyNodeComponent.prototype, 'maxDepth', void 0),
   GenealogyNodeComponent = __decorate(
       [r.Component({
         selector: 'htf-genealogy-node',
         template: n(574),
         styles: [n(575)]
       })],
       GenealogyNodeComponent)
            }();
        t.GenealogyNodeComponent = i
      },
      574: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="component-info" [class.is-first]="isFirst" [class.is-root]="isRoot">\n  <span class="serial-number">{{ node.component.serial }}</span>\n  <span *ngIf="node.component.instance_name">{{ node.component.instance_name }}</span>\n  <span *ngIf="node.component.part_number">({{ node.component.part_number }})</span>\n</div>\n\n<ul *ngIf="node.children && node.children.length > 0 && maxDepth !== 0">\n  <li *ngFor="let child of node.children; let isFirst=first">\n    <htf-genealogy-node\n      [isFirst]="isFirst"\n      [isRoot]="false"\n      [node]="child"\n      [maxDepth]="childMaxDepth">\n    </htf-genealogy-node>\n  </li>\n</ul>\n'
      },
      575: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.component-info {\n  border: 1px solid #323232;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative; }\n\n.component-info:not(.is-root)::before {\n  border-bottom: 1px solid #323232;\n  border-left: 1px solid #323232;\n  content: \'\';\n  height: calc(100% + 11px);\n  left: -21px;\n  position: absolute;\n  top: calc(-50% - 11px);\n  width: 20px; }\n\n.component-info:not(.is-root).is-first::before {\n  height: calc(50% + 11px);\n  top: -11px; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  padding-left: 40px; }\n\n.serial-number {\n  font-weight: bold; }\n'
      },
      576: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(96), o = function() {
          function LogLevelToClassPipe() {}
          return LogLevelToClassPipe.prototype.transform =
                     function(e) {
            if (e)
              return e <= i.logLevels.debug ? 'ng-log-level-debug' :
                  e <= i.logLevels.info     ? 'ng-log-level-info' :
                  e <= i.logLevels.warning  ? 'ng-log-level-warning' :
                  e <= i.logLevels.error    ? 'ng-log-level-error' :
                                              'ng-log-level-critical'
          },
                 LogLevelToClassPipe = __decorate(
                     [r.Pipe({name: 'logLevelToClass'})], LogLevelToClassPipe)
        }();
        t.LogLevelToClassPipe = o
      },
      577: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function ObjectToSortedValuesPipe() {}
          return ObjectToSortedValuesPipe.prototype.transform =
                     function(e, t) {
            void 0 === t && (t = null);
            var n = [], r = Object.keys(e);
            null === t && r.sort();
            for (var i = 0, o = r; i < o.length; i++) {
              var s = o[i];
              n.push(e[s])
            }
            return null !== t && n.sort(function(e, n) {
              return e[t] < n[t] ? -1 : e[t] > n[t] ? 1 : 0
            }),
                   n
          },
                 ObjectToSortedValuesPipe = __decorate(
                     [r.Pipe({name: 'objectToSortedValues', pure: !1})],
                     ObjectToSortedValuesPipe)
        }();
        t.ObjectToSortedValuesPipe = i
      },
      578: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="outer" [class.is-complete]="isComplete">\n  <div class="inner-wrapper">\n    <div class="inner" [ngStyle]="barStyle">\n      <div class="stripes"></div>\n    </div>\n  </div>\n</div>\n'
      },
      579: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.outer {\n  height: 100%;\n  width: 100%;\n  background: #e5e5e5;\n  border-radius: 3px;\n  overflow: hidden; }\n  .outer.is-complete {\n    animation: htf-progress-bar-pulse 2s infinite; }\n\n.inner-wrapper {\n  height: 100%;\n  left: -10px;\n  position: relative;\n  width: calc(100% + 20px); }\n\n.inner {\n  background: rgba(0, 119, 255, 0.8);\n  height: 100%;\n  transition: width .4s ease;\n  transform: skewX(-30deg); }\n\n.stripes {\n  transform: skewX(45deg);\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.08) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 75%, transparent);\n  background-size: 50px 50px;\n  animation: move 4s linear infinite; }\n\n@keyframes htf-progress-bar-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(0, 119, 255, 0.25); }\n  70% {\n    box-shadow: 0 0 0 8px rgba(0, 119, 255, 0); }\n  100% {\n    box-shadow: 0 0 0 0 rgba(0, 119, 255, 0); } }\n\n@keyframes move {\n  0% {\n    background-position: 0 0; }\n  100% {\n    background-position: 50px 50px; } }\n'
      },
      580: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r, i = n(2), o = n(98), s = n(66), a = n(49), u = n(21);
        !function(e) {
          e[e.fail = 0] = 'fail', e[e.online = 1] = 'online',
                     e[e.pass = 2] = 'pass', e[e.pending = 3] = 'pending',
                     e[e.running = 4] = 'running',
                     e[e.unreachable = 5] = 'unreachable',
                     e[e.warning = 6] = 'warning'
        }(r || (r = {}));
        var l =
                ((m = {})[r.fail] = 'ng-status-fail',
                 m[r.online] = 'ng-status-online', m[r.pass] = 'ng-status-pass',
                 m[r.pending] = 'ng-status-pending',
                 m[r.running] = 'ng-status-running',
                 m[r.unreachable] = 'ng-status-unreachable',
                 m[r.warning] = 'ng-status-warning', m),
            c = Symbol('unknownStatus'),
            p =
                ((f = {})[o.MeasurementStatus.unset] = r.pending,
                 f[o.MeasurementStatus.pass] = r.pass,
                 f[o.MeasurementStatus.fail] = r.fail,
                 f[s.PhaseStatus.waiting] = r.pending,
                 f[s.PhaseStatus.running] = r.running,
                 f[s.PhaseStatus.pass] = r.pass, f[s.PhaseStatus.fail] = r.fail,
                 f[s.PhaseStatus.skip] = r.unreachable,
                 f[s.PhaseStatus.error] = r.warning,
                 f[a.StationStatus.online] = r.online,
                 f[a.StationStatus.unreachable] = r.unreachable,
                 f[u.TestStatus.waiting] = r.pending,
                 f[u.TestStatus.running] = r.running,
                 f[u.TestStatus.pass] = r.pass, f[u.TestStatus.fail] = r.fail,
                 f[u.TestStatus.error] = r.warning,
                 f[u.TestStatus.timeout] = r.warning,
                 f[u.TestStatus.aborted] = r.warning, f[c] = r.warning, f),
            d =
                ((y = {})[o.MeasurementStatus.unset] = 'Unset',
                 y[o.MeasurementStatus.pass] = 'Pass',
                 y[o.MeasurementStatus.fail] = 'Fail',
                 y[s.PhaseStatus.waiting] = 'Waiting',
                 y[s.PhaseStatus.running] = 'Running',
                 y[s.PhaseStatus.pass] = 'Pass', y[s.PhaseStatus.fail] = 'Fail',
                 y[s.PhaseStatus.skip] = 'Skip',
                 y[s.PhaseStatus.error] = 'Error',
                 y[a.StationStatus.online] = 'Online',
                 y[a.StationStatus.unreachable] = 'Unreachable',
                 y[u.TestStatus.waiting] = 'Waiting',
                 y[u.TestStatus.running] = 'Running',
                 y[u.TestStatus.pass] = 'Pass', y[u.TestStatus.fail] = 'Fail',
                 y[u.TestStatus.error] = 'Error',
                 y[u.TestStatus.timeout] = 'Timeout',
                 y[u.TestStatus.aborted] = 'Aborted', y[c] = 'Unknown', y),
            h = function() {
              function StatusToClassPipe() {}
              return StatusToClassPipe.prototype.transform =
                         function(e) {
                return e in p ?
                    l[p[e]] :
                    (console.error('Unknown status "' + e + '".'), l[p[c]])
              },
                     StatusToClassPipe = __decorate(
                         [i.Pipe({name: 'statusToClass'})], StatusToClassPipe)
            }();
        t.StatusToClassPipe = h;
        var m, f, y, g = function() {
          function StatusToTextPipe() {}
          return StatusToTextPipe.prototype.transform =
                     function(e) {
            return e in p ? d[e] :
                            (console.error('Unknown status "' + e + '".'), d[c])
          },
                 StatusToTextPipe = __decorate(
                     [i.Pipe({name: 'statusToText'})], StatusToTextPipe)
        }();
        t.StatusToTextPipe = g
      },
      581: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function(e) {
          return '—'
        }, o = function() {
          function TimeAgoPipe() {}
          return TimeAgoPipe.prototype.transform =
                     function(e) {
            return i(e)
          },
                 TimeAgoPipe = __decorate(
                     [r.Pipe({name: 'timeAgo', pure: !1})], TimeAgoPipe)
        }();
        t.TimeAgoPipe = o
      },
      582: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function TooltipDirective(e) {
            this.ref = e
          }
          return TooltipDirective
                     .prototype.ngOnInit =
                     function() {
            if (0 !== this.text.length) {
              this.tooltipElement = document.createElement('div'),
              this.tooltipElement.innerHTML = this.text,
              this.tooltipElement.classList.add('ng-tooltip');
              var e = this.ref.nativeElement;
              e.classList.add('ng-tooltip-host'),
                  e.insertBefore(this.tooltipElement, e.firstChild)
            }
          },
     TooltipDirective.prototype.onMouseEnter =
                     function() {
       this.text.length > 0 &&
           this.tooltipElement.classList.add('ng-tooltip--is-visible')
     },
     TooltipDirective.prototype.onMouseLeave =
                     function() {
       this.text.length > 0 &&
           this.tooltipElement.classList.remove('ng-tooltip--is-visible')
     },
     __decorate([r.Input('htfTooltip'), __metadata('design:type', String)],
                TooltipDirective.prototype, 'text', void 0),
     __decorate(
                     [
                       r.HostListener('mouseenter'),
                       __metadata('design:type', Function),
                       __metadata('design:paramtypes', []),
                       __metadata('design:returntype', void 0)
                     ],
                     TooltipDirective.prototype, 'onMouseEnter', null),
     __decorate(
                     [
                       r.HostListener('mouseleave'),
                       __metadata('design:type', Function),
                       __metadata('design:paramtypes', []),
                       __metadata('design:returntype', void 0)
                     ],
                     TooltipDirective.prototype, 'onMouseLeave', null),
     TooltipDirective = __decorate(
         [
           r.Directive({selector: '[htfTooltip]'}),
           __metadata('design:paramtypes', [r.ElementRef])
         ],
         TooltipDirective)
        }();
        t.TooltipDirective = i
      },
      583: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function TrimmedTextComponent() {
            this.expanded = !1
          }
          return Object.defineProperty(
                     TrimmedTextComponent.prototype, 'buttonLabel', {
                       get: function() {
                         return !this.content ||
                                 this.content.length <= this.maxChars ?
                             null :
                             this.expanded ? 'collapse' :
                                             'expand'
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     TrimmedTextComponent.prototype, 'trimmedContent', {
                       get: function() {
                         return !this.content || this.expanded ||
                                 this.content.length <= this.maxChars ?
                             this.content :
                             this.content.slice(0, this.maxChars - '…'.length) +
                                 '…'
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 TrimmedTextComponent
                     .prototype.onClick =
                     function() {
                   this.expanded = !this.expanded
                 },
 __decorate([r.Input(), __metadata('design:type', Number)],
            TrimmedTextComponent.prototype, 'maxChars', void 0),
 __decorate([r.Input(), __metadata('design:type', String)],
            TrimmedTextComponent.prototype, 'content', void 0),
 TrimmedTextComponent = __decorate(
     [r.Component({
       selector: 'htf-trimmed-text',
       template:
           '\n  {{ trimmedContent }}\n  <button *ngIf="buttonLabel !== null" type="button" class="htf-link-button"\n          (click)="onClick()">\n    {{ buttonLabel }}\n  </button>\n'
     })],
     TrimmedTextComponent)
        }();
        t.TrimmedTextComponent = i
      },
      584: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(48), i = n(2), o = n(29), s = n(25), a = n(32), u = n(238),
            l = n(585), c = 'openhtf.plugs.user_input.UserInput',
            p = function(e) {
              function UserInputPlugComponent(t, n, r, i) {
                var o = e.call(this, c, t, n, r) || this;
                return o.ref = i, o
              }
              return __extends(UserInputPlugComponent, e),
                     Object.defineProperty(
                         UserInputPlugComponent.prototype, 'error', {
                           get: function() {
                             return this.getPlugState().error
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     Object.defineProperty(
                         UserInputPlugComponent.prototype, 'prompt', {
                           get: function() {
                             var e = this.getPlugState();
                             if (this.lastPromptId !== e.id) {
                               this.lastPromptId = e.id;
                               var t = e.message.replace(/&#10;/g, '<br>');
                               this.lastPromptHtml = t, this.focusSelf(),
                               e.default && this.setResponse(e.default)
                             }
                             return this.lastPromptHtml
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     UserInputPlugComponent
                         .prototype.hasTextInput =
                         function() {
                       return this.getPlugState()['text-input']
                     },
   UserInputPlugComponent.prototype.hasImage =
                         function() {
     return this.getPlugState()['image-url']
   },
   Object.defineProperty(UserInputPlugComponent.prototype, 'Image_URL', {
     get: function() {
       return this.getPlugState()['image-url']
     },
     enumerable: !0,
     configurable: !0
   }),
   UserInputPlugComponent.prototype.sendResponse =
                         function(e) {
     var t, n = this.getPlugState().id;
     this.hasTextInput() ? (t = e.value, e.value = '') :
                           t = '',
                           this.respond('respond', [n, t])
   },
   UserInputPlugComponent.prototype.getPlugState =
                         function() {
     return e.prototype.getPlugState.call(this)
   },
   UserInputPlugComponent.prototype.focusSelf =
                         function() {
     var e = this.ref.nativeElement.querySelector('input');
     e && e.focus()
   },
   UserInputPlugComponent.prototype.setResponse =
                         function(e) {
     var t = this.ref.nativeElement.querySelector('input');
     t && (t.value = e)
   },
   UserInputPlugComponent = __decorate(
       [
         i.Component({
           animations: [r.trigger('animateIn', u.washIn)],
           selector: 'htf-user-input-plug',
           template: n(586),
           styles: [n(587)]
         }),
         __metadata(
             'design:paramtypes',
             [s.ConfigService, o.Http, a.FlashMessageService, i.ElementRef])
       ],
       UserInputPlugComponent)
            }(l.BasePlug);
        t.UserInputPlugComponent = p
      },
      585: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(29), o = n(21), s = n(26), a = n(26),
            u = function() {
              function BasePlug(e, t, n, r) {
                this.className = e, this.config = t, this.http = n,
                this.flashMessage = r
              }
              return BasePlug.prototype
                         .plugExists =
                         function() {
                return Boolean(this.test && this.getPlugState())
              },
       BasePlug.prototype.respond =
                         function(e, t) {
         var n = this, r = new i.Headers({'Content-Type': 'application/json'}),
             o = new i.RequestOptions({headers: r}),
             u = a.getTestBaseUrl(this.config.dashboardEnabled, this.test) +
             '/plugs/' + this.plugName,
             l = JSON.stringify({method: e, args: t});
         this.http.post(u, l, o).subscribe(
             function() {},
             function(e) {
               var t = s.messageFromErrorResponse(e);
               n.flashMessage.error(
                   'An error occurred trying to respond to plug ' + n.plugName +
                       '.',
                   t)
             })
       },
       BasePlug.prototype.getPlugState =
                         function() {
         if (this.plugName && this.test.plugStates[this.plugName])
           return this.test.plugStates[this.plugName];
         for (var e = 0, t = Object.keys(this.test.plugStates); e < t.length;
              e++) {
           var n = t[e];
           if (this.test.plugStates[n] &&
               -1 !== this.test.plugDescriptors[n].mro.indexOf(this.className))
             return this.plugName = n, this.test.plugStates[n]
         }
       },
       __decorate([r.Input(), __metadata('design:type', o.TestState)],
                  BasePlug.prototype, 'test', void 0),
       BasePlug
            }();
        t.BasePlug = u
      },
      586: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div\n  class="htf-layout-widget"\n  *ngIf="plugExists()">\n\n  \x3c!-- Wrap contents in an extra div for the background color animation. --\x3e\n  <div [@animateIn]="\'in\'">\n\n    <div class="htf-layout-widget-header">\n      <div>Operator input</div>\n    </div>\n\n    <div class="htf-layout-widget-body">\n\n      <img *ngIf="hasImage()" [src]="Image_URL" alt="user-input-image">\n\n      <div [innerHTML]="prompt"></div>\n\n      <input\n        #response_field\n        [style.display]="hasTextInput() ? \'inline\' : \'none\'"\n        [class.user-input-has-error]="error"\n        type="text"\n        class="u-push-top"\n        (keyup.enter)="sendResponse(response_field)">\n\n      <div class="user-input-error-text u-push-top-third" *ngIf="error">\n        {{ error }}\n      </div>\n\n      <div class="u-text-align-right">\n        <button\n          type="button"\n          class="htf-rounded-button-grey u-push-top"\n          (click)="sendResponse(response_field)">\n          {{ hasTextInput() ? \'Submit\' : \'Okay\' }}\n        </button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n'
      },
      587: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n:host ::ng-deep ol,\n:host ::ng-deep ul {\n  padding-left: 25px;\n  margin: 0; }\n\n.user-input-has-error {\n  border-color: #ff5d4e; }\n  .user-input-has-error:focus {\n    border-color: #e71400; }\n\n.user-input-error-text {\n  color: #ff5d4e;\n  font-size: 12px; }\n'
      },
      588: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(19), i = n(2), o = n(236), s = n(94), a = n(239), u = n(589),
            l = n(592), c = n(595), p = n(99), d = n(599), h = n(602),
            m = n(604), f = n(607), y = n(243), g = n(610), v = function() {
              function StationsModule() {}
              return StationsModule = __decorate(
                         [i.NgModule({
                           imports:
                               [r.CommonModule, o.PlugsModule, s.SharedModule],
                           declarations: [
                             u.StationListComponent, l.AttachmentsComponent,
                             c.HistoryComponent, d.LogsComponent,
                             m.PhaseComponent, h.PhaseListComponent,
                             f.StationComponent, g.TestSummaryComponent
                           ],
                           providers: [
                             a.DashboardService, p.HistoryService,
                             y.StationService
                           ],
                           exports: [
                             r.CommonModule, f.StationComponent,
                             u.StationListComponent
                           ]
                         })],
                         StationsModule)
            }();
        t.StationsModule = v
      },
      589: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(25), o = n(49), s = n(95), a = n(239),
            u = function() {
              return function StationSelectedEvent(e) {
                this.station = e
              }
            }();
        t.StationSelectedEvent = u;
        var l = function() {
          function StationListComponent(e, t, n) {
            var i = this;
            if (this.dashboard = e, this.time = t,
                this.onSelectStation = new r.EventEmitter,
                this.retryCountdown = this.time.observable.map(function(e) {
                  var t = i.dashboard.retryTimeMs - e;
                  return 'Retrying in ' + Math.round(t / 1e3) + 's.'
                }),
                this.stations = e.stations, !n.dashboardEnabled)
              var o = e.messages.subscribe(function() {
                for (var e = 0, t = Object.keys(i.stations); e < t.length;
                     e++) {
                  var n = t[e];
                  i.select(i.stations[n]), o.unsubscribe();
                  break
                }
              })
          }
          return Object.defineProperty(
                     StationListComponent.prototype, 'anyStationFound', {
                       get: function() {
                         return Object.keys(this.stations).length > 0
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     StationListComponent.prototype, 'hasError', {
                       get: function() {
                         return this.dashboard.hasError
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     StationListComponent.prototype, 'isLoading', {
                       get: function() {
                         return this.dashboard.isSubscribing
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     StationListComponent.prototype, 'stationCount', {
                       get: function() {
                         return Object.keys(this.stations).length
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 StationListComponent
                     .prototype.ngOnInit =
                     function() {
                   this.dashboard.subscribe(200, 1.5, 1500)
                 },
 StationListComponent.prototype.ngOnDestroy =
                     function() {
   this.dashboard.unsubscribe()
 },
 StationListComponent.prototype.isReachable =
                     function(e) {
   return e.status !== o.StationStatus.unreachable
 },
 StationListComponent.prototype.select =
                     function(e) {
   this.onSelectStation.emit(new u(e))
 },
 StationListComponent.prototype.manualRetry =
                     function() {
   this.dashboard.retryNow()
 },
 StationListComponent.prototype.manualReload =
                     function() {
   this.dashboard.refresh()
 },
 __decorate([r.Input(), __metadata('design:type', o.Station)],
            StationListComponent.prototype, 'selectedStation', void 0),
 __decorate([r.Output(), __metadata('design:type', Object)],
            StationListComponent.prototype, 'onSelectStation', void 0),
 StationListComponent = __decorate(
     [
       r.Component(
           {selector: 'htf-station-list', template: n(590), styles: [n(591)]}),
       __metadata(
           'design:paramtypes',
           [a.DashboardService, s.TimeService, i.ConfigService])
     ],
     StationListComponent)
        }();
        t.StationListComponent = l
      },
      590: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div *ngIf="!hasError" class="nav-bar">\n  <em *ngIf="isLoading">\n    Loading…\n  </em>\n  <span *ngIf="!isLoading && !anyStationFound">\n    Connected to server. No stations found.\n  </span>\n  <span *ngIf="!isLoading && anyStationFound">\n    Found {{ stationCount }} {{ stationCount === 1 ? \'station\' : \'stations\' }}.\n  </span>\n\n  <div class="u-flex-grow"></div>\n\n  <button\n    *ngIf="!isLoading"\n    (click)="manualReload()"\n    type="button"\n    class="htf-link-button">\n    Refresh station list\n  </button>\n</div>\n\n<ul class="station-list" *ngIf="!isLoading && !hasError && anyStationFound">\n  <li *ngFor="let station of stations | objectToSortedValues:\'label\'">\n    <button\n      type="button"\n      class="u-text-align-left"\n      [class.is-unreachable]="!isReachable(station)"\n      (click)="select(station)">\n\n      <div class="u-display-flex">\n        <div class="station-label">\n          {{ station.label }} ({{ station.status | statusToText }})\n        </div>\n        <div class="u-flex-grow"></div>\n        <div class="htf-support-text">\n          {{ station.host }}:{{ station.port }}\n        </div>\n      </div>\n      <div *ngIf="station.testDescription" class="station-description u-push-top-third">\n        {{ station.testDescription }}\n      </div>\n\n    </button>\n  </li>\n</ul>\n\n<div *ngIf="hasError">\n  Could not connect to the server.\n  {{ (retryCountdown | async) || \'Retrying in…\' }}\n  <button\n    type="button"\n    class="htf-link-button"\n    (click)="manualRetry()">\n    Try again.\n  </button>\n</div>\n'
      },
      591: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.nav-bar {\n  color: #949a9f;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 12px;\n  margin-bottom: 14px; }\n\n.station-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.station-list li {\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #ccc;\n  margin-bottom: 14px; }\n\n.station-list li button {\n  -webkit-appearance: initial;\n  background: transparent;\n  border: 0;\n  padding: 0;\n  box-shadow: inset 0 0 0 0 #07f;\n  cursor: pointer;\n  overflow: hidden;\n  padding: 15px 20px;\n  text-overflow: ellipsis;\n  transition: 300ms ease box-shadow;\n  white-space: nowrap;\n  width: 100%; }\n  .station-list li button:focus, .station-list li button:active {\n    outline: none; }\n  .station-list li button:hover, .station-list li button:active {\n    box-shadow: inset 0 -3px 0 0 #07f; }\n    .station-list li button:hover .station-label,\n    .station-list li button:hover .station-description, .station-list li button:active .station-label,\n    .station-list li button:active .station-description {\n      color: #07f; }\n  .station-list li button:focus .station-label,\n  .station-list li button:focus .station-description {\n    color: #07f; }\n  .station-list li button.is-unreachable {\n    color: #949a9f; }\n\n.station-label {\n  font-size: 16px;\n  transition: 300ms ease color; }\n\n.station-description {\n  color: #949a9f;\n  transition: 300ms ease color; }\n'
      },
      592: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(25), o = n(21), s = n(26), a = function() {
          function AttachmentsComponent(e) {
            this.config = e, this.expanded = !1
          }
          return AttachmentsComponent
                     .prototype.linkForAttachment =
                     function(e) {
            return null !== this.test.testId &&
                    this.test.status === o.TestStatus.running ?
                s.getTestBaseUrl(this.config.dashboardEnabled, this.test) +
                    '/phases/' + e.phaseDescriptorId + '/attachments/' +
                    e.name :
                null !== this.test.fileName ?
                s.getStationBaseUrl(
                    this.config.dashboardEnabled, this.test.station) +
                    '/history/' + this.test.fileName + '/attachments/' +
                    e.name + '?sha1=' + e.sha1 :
                null
          },
 AttachmentsComponent.prototype.toggleExpanded =
                     function() {
   this.expanded = !this.expanded
 },
 __decorate([r.Input(), __metadata('design:type', o.TestState)],
            AttachmentsComponent.prototype, 'test', void 0),
 AttachmentsComponent = __decorate(
     [
       r.Component(
           {selector: 'htf-attachments', template: n(593), styles: [n(594)]}),
       __metadata('design:paramtypes', [i.ConfigService])
     ],
     AttachmentsComponent)
        }();
        t.AttachmentsComponent = a
      },
      593: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div *ngIf="test" class="htf-layout-widget">\n\n  <div class="htf-layout-widget-header">\n    <div>Attachments</div>\n    <div class="u-flex-grow"></div>\n    <button\n      *ngIf="test.attachments.length > 0"\n      type="button"\n      class="htf-rounded-button-grey"\n      (click)="toggleExpanded()">\n      {{ expanded? \'Collapse\' : \'Expand\' }}\n    </button>\n  </div>\n\n  <div\n    *ngIf="test.attachments.length === 0"\n    class="htf-layout-widget-body htf-support-text">\n    There are no attachments yet.\n  </div>\n\n  <div\n    *ngIf="!expanded && test.attachments.length > 0"\n    class="htf-layout-widget-body htf-support-text">\n    Expand to view\n    {{ test.attachments.length }}\n    {{ test.attachments.length === 1 ? \'attachment\' : \'attachments\' }}.\n  </div>\n\n  <ul *ngIf="expanded && test.attachments.length > 0">\n    <li\n      *ngFor="let attachment of test.attachments"\n      [ngSwitch]="linkForAttachment(attachment)">\n      <span *ngSwitchCase="null">{{ attachment.name }}</span>\n      <a\n        *ngSwitchDefault\n        [href]="linkForAttachment(attachment)"\n        target="_blank">\n        {{ attachment.name }}\n      </a>\n      <span class="htf-support-text">&nbsp;{{ attachment.mimeType }}</span>\n      <span class="u-flex-grow"></span>\n      <span class="htf-support-text">From phase: {{ attachment.phaseName }}</span>\n    </li>\n  </ul>\n\n</div>\n'
      },
      594: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\nli {\n  -ms-flex-align: baseline;\n      align-items: baseline;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  li:last-of-type {\n    border-bottom: 0; }\n'
      },
      595:
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', {value: !0});
            var r = n(48), i = n(2), o = n(32), s = n(238), a = n(49),
                u = n(21), l = n(26), c = n(241), p = n(99), d = function() {
                  return function TestSelectedEvent(e) {
                    this.test = e
                  }
                }();
            t.TestSelectedEvent = d;
            var
                h = function() {
                  function HistoryComponent(e, t) {
                    this.historyService = e, this.flashMessage = t,
                    this.onSelectTest = new i.EventEmitter,
                    this.collapsedNumTests = 5,
                    this.HistoryItemStatus = c.HistoryItemStatus,
                    this.TestStatus = u.TestStatus, this.expanded = !1,
                    this.hasError = !1, this.history = [],
                    this.historyFromDiskEnabled = !1, this.isLoading = !1,
                    this.lastClickedItem = null
                  }
                  return HistoryComponent.prototype
                             .ngOnChanges =
                             function(e) {
                    'station' in e &&
                        this.station.status === a.StationStatus.online &&
                        (this.loadHistory(),
                         this.history =
                             this.historyService.getHistory(this.station))
                  },
   HistoryComponent.prototype.isSelected =
                             function(e) {
     return e.status === c.HistoryItemStatus.loaded &&
         e.testState === this.selectedTest
   },
   HistoryComponent.prototype.onClick =
                             function(e) {
     var t = this;
     if (this.lastClickedItem = e, e.status !== c.HistoryItemStatus.loading)
       return e.status === c.HistoryItemStatus.loaded ?
           (this.selectTest(e.testState),
            void (
                e.testState === this.selectedTest &&
                null === e.testState.fileName &&
                this.historyService.retrieveFileName(this.station, e)
                    .catch(function() {
                      t.historyFromDiskEnabled &&
                          t.flashMessage.warn(
                              'Could not retrieve history from disk, so attachments are not available. You may try again later.')
                    }))) :
           void this.historyService.loadItem(this.station, e)
               .then(function(n) {
                 t.lastClickedItem === e && t.selectTest(n)
               })
               .catch(function(e) {
                 console.error(e.stack);
                 var n = l.messageFromErrorResponse(e);
                 t.flashMessage.error('Error loading history item.', n)
               })
   },
   HistoryComponent.prototype.toggleExpanded =
                             function() {
     this.expanded = !this.expanded
   },
   HistoryComponent.prototype.loadHistory =
                             function() {
     var e = this;
     this.hasError = !1, this.isLoading = !0, this.historyFromDiskEnabled = !1,
     this.historyService.refreshList(this.station)
         .then(function() {
           e.isLoading = !1, e.historyFromDiskEnabled = !0
         })
         .catch(function(t) {
           e.isLoading = !1, e.hasError = !0,
           e.historyFromDiskEnabled = 404 !== t.status
         })
   },
   HistoryComponent.prototype.selectTest =
                             function(e) {
     e === this.selectedTest ? this.selectedTest = null : this.selectedTest = e,
                               this.onSelectTest.emit(new d(this.selectedTest))
   },
   __decorate([i.Input(), __metadata('design:type', u.TestState)],
              HistoryComponent.prototype, 'selectedTest', void 0),
   __decorate([i.Input(), __metadata('design:type', a.Station)],
              HistoryComponent.prototype, 'station', void 0),
   __decorate([i.Output(), __metadata('design:type', Object)],
              HistoryComponent.prototype, 'onSelectTest', void 0),
   HistoryComponent = __decorate(
       [
         i.Component({
           animations: [r.trigger('animateIn', s.washAndExpandIn(48))],
           selector: 'htf-history',
           template: n(597),
           styles: [n(598)]
         }),
         __metadata(
             'design:paramtypes', [p.HistoryService, o.FlashMessageService])
       ],
       HistoryComponent)
                }();
            t.HistoryComponent = h
          },
      596: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = function() {
          return function Attachment(e) {
            Object.assign(this, e)
          }
        }();
        t.Attachment = r
      },
      597: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="htf-layout-widget">\n\n  <div class="htf-layout-widget-header">\n    <div>History</div>\n    <div class="u-flex-grow"></div>\n    <button\n      *ngIf="history.length > collapsedNumTests"\n      type="button"\n      class="htf-rounded-button-grey"\n      (click)="toggleExpanded()">\n      {{ expanded? \'Collapse\' : \'Expand\' }}\n    </button>\n  </div>\n\n  <ul class="htf-layout-widget-list history-list">\n    <ng-container *ngFor="let historyItem of history; let i = index">\n      <li\n        class="history-item-container"\n        htfTooltip="{{ historyItem.startTimeMillis | date:\'M/d/yy h:mma\' }}"\n        *ngIf="expanded || i < collapsedNumTests"\n        [@animateIn]="historyItem.drawAttention ? \'in\' : \'\'"\n        (@animateIn.done)="historyItem.drawAttention = false"\n        [ngSwitch]="historyItem.status"\n        [class.is-selected]="isSelected(historyItem)"\n        (click)="onClick(historyItem)">\n\n        \x3c!-- Wrap list item contents in an extra div to enable a “slide down” animation effect. --\x3e\n        <div class="history-item htf-layout-header">\n          <div class="history-item-name-container">\n            <div class="history-item-name">\n              {{ historyItem.dutId || historyItem.fileName }}\n            </div>\n            <div class="u-font-size-small">\n              Started {{ historyItem.startTimeMillis | timeAgo }}\n            </div>\n          </div>\n          <div *ngSwitchCase="HistoryItemStatus.unloaded" class="history-item-status">\n            Click to load.\n          </div>\n          <div *ngSwitchCase="HistoryItemStatus.loading" class="history-item-status">\n            Loading...\n          </div>\n          <div *ngSwitchCase="HistoryItemStatus.error" class="history-item-status error-text">\n            An error occurred.\n          </div>\n          <div\n            *ngSwitchCase="HistoryItemStatus.loaded"\n            class="htf-status-indicator"\n            [ngClass]="historyItem.testState.status | statusToClass">\n            {{ historyItem.testState.status | statusToText }}\n          </div>\n        </div>\n      </li>\n    </ng-container>\n    <li *ngIf="!expanded && history.length > collapsedNumTests" class="status-text">\n      Not showing {{ history.length - collapsedNumTests }} additional test\n      {{ history.length - collapsedNumTests === 1? \'run\' : \'runs\'}}.\n    </li>\n    <li *ngIf="history.length === 0 && !isLoading && !hasError" class="status-text">\n      There are no known completed test runs.\n    </li>\n    <li *ngIf="isLoading" class="status-text">\n      Loading history from the server...\n    </li>\n    <li *ngIf="hasError && !historyFromDiskEnabled" class="status-text">\n      History from disk is disabled.\n    </li>\n    <li *ngIf="hasError && historyFromDiskEnabled" class="status-text">\n      <span class="u-text-color-error">\n        Could not retrieve test history from the server.\n      </span>\n    </li>\n  </ul>\n\n</div>\n'
      },
      598: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.history-item-container {\n  cursor: pointer;\n  overflow: hidden; }\n  .history-item-container.is-selected {\n    background: rgba(0, 119, 255, 0.2);\n    border: 2px solid rgba(0, 119, 255, 0.8); }\n\n.history-item {\n  height: 48px;\n  line-height: 47px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.history-item-name-container {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  line-height: initial;\n  min-width: 0; }\n\n.history-item-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.history-item-status {\n  color: #949a9f;\n  font-size: 12px;\n  padding: 10px 0;\n  text-align: center;\n  margin-left: 15px;\n  margin-right: -15px;\n  min-width: 100px; }\n\n.status-text {\n  color: #949a9f;\n  font-size: 12px;\n  padding: 10px 0;\n  text-align: center; }\n'
      },
      599: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(96), o = n(21),
            s = function() {
              function LogsComponent() {
                this.expanded = !1
              }
              return Object.defineProperty(
                         LogsComponent.prototype, 'collapsedErrorCount', {
                           get: function() {
                             for (var e = 0, t = 0, n = this.test.logs;
                                  t < n.length; t++) {
                               n[t].level > i.logLevels.warning && (e += 1)
                             }
                             return this.test.logs[0].level >
                                            i.logLevels.warning &&
                                        (e -= 1),
                                    e
                           },
                           enumerable: !0,
                           configurable: !0
                         }),
                     LogsComponent.prototype
                         .toggleExpanded =
                         function() {
                       this.expanded = !this.expanded
                     },
  __decorate([r.Input(), __metadata('design:type', o.TestState)],
             LogsComponent.prototype, 'test', void 0),
  LogsComponent = __decorate(
      [r.Component({selector: 'htf-logs', template: n(600), styles: [n(601)]})],
      LogsComponent)
            }();
        t.LogsComponent = s
      },
      600: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div *ngIf="test" class="htf-layout-widget">\n\n  <div class="htf-layout-widget-header">\n    <div>Logs</div>\n    <div class="u-flex-grow"></div>\n    <button\n      *ngIf="test.logs.length > 0"\n      type="button"\n      class="htf-rounded-button-grey"\n      (click)="toggleExpanded()">\n      {{ expanded? \'Collapse\' : \'Expand\' }}\n    </button>\n  </div>\n\n  <div\n    *ngIf="test.logs.length === 0"\n    class="htf-layout-widget-body htf-support-text">\n    There are no logs yet.\n  </div>\n\n  <ul *ngIf="!expanded && test.logs.length > 0">\n    <li [ngClass]="test.logs[0].level | logLevelToClass" class="log-message">\n\n      <div class="timestamp-column">\n        {{ test.logs[0].timestampMillis | date:\'mediumTime\' }}\n        <div class="logger-name">{{ test.logs[0].loggerName }}</div>\n      </div>\n\n      <div class="log-message-content">{{ test.logs[0].message }}</div>\n\n    </li>\n    <li\n      *ngIf="!expanded && test.logs.length > 1"\n      class="htf-support-text">\n      Not showing {{ test.logs.length - 1 }} additional log\n      {{ test.logs.length - 1 === 1? \'message\' : \'messages\'}}.&nbsp;\n      <span *ngIf="collapsedErrorCount > 0" class="u-text-color-error">\n        {{ collapsedErrorCount }} additional\n        {{ collapsedErrorCount === 1? \'error\' : \'errors\' }}.\n      </span>\n    </li>\n  </ul>\n\n  <ul *ngIf="expanded && test.logs.length > 0">\n    <li\n      *ngFor="let log of test.logs"\n      class="log-message"\n      [ngClass]="log.level | logLevelToClass">\n\n      <div class="timestamp-column">\n        {{ log.timestampMillis | date:\'mediumTime\' }}\n        <div class="logger-name">{{ log.loggerName }}</div>\n      </div>\n\n      <div class="log-message-content">{{ log.message }}</div>\n\n    </li>\n  </ul>\n\n</div>\n'
      },
      601: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 12px; }\n\nli {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  li:last-of-type {\n    border-bottom: 0; }\n\n.log-message {\n  font-family: monospace, serif; }\n\n.timestamp-column {\n  font-size: 10px;\n  margin-right: 10px;\n  max-width: 170px;\n  min-width: 170px; }\n\n.logger-name {\n  color: #949a9f; }\n\n.log-message-content {\n  white-space: pre-wrap;\n  word-break: break-all; }\n\n.ng-log-level-warning {\n  background: rgba(255, 229, 77, 0.2); }\n\n.ng-log-level-error {\n  background: rgba(255, 93, 78, 0.25); }\n\n.ng-log-level-critical {\n  background: rgba(255, 93, 78, 0.45); }\n'
      },
      602: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(21), o = function() {
          function PhaseListComponent() {
            this.showMeasurements = !1
          }
          return PhaseListComponent.prototype.toggleMeasurements =
                     function() {
            this.showMeasurements = !this.showMeasurements
          },
                 __decorate(
                     [r.Input(), __metadata('design:type', i.TestState)],
                     PhaseListComponent.prototype, 'test', void 0),
                 PhaseListComponent = __decorate(
                     [r.Component(
                         {selector: 'htf-phase-list', template: n(603)})],
                     PhaseListComponent)
        }();
        t.PhaseListComponent = o
      },
      603: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="htf-layout-widget" *ngIf="test">\n\n  <div class="htf-layout-widget-header">\n    <div>Phases</div>\n    <div class="u-flex-grow"></div>\n    <button\n      type="button"\n      class="htf-rounded-button-grey"\n      (click)="toggleMeasurements()">\n      {{ showMeasurements ? \'Collapse\' : \'Expand\' }} all\n    </button>\n  </div>\n\n  <ul class="htf-layout-widget-list">\n    <li *ngFor="let phase of test.phases">\n      <htf-phase\n        [phase]="phase"\n        [expand]="showMeasurements">\n      </htf-phase>\n    </li>\n  </ul>\n\n</div>\n'
      },
      604: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(98), o = n(66), s = function() {
          function PhaseComponent() {
            this.MeasurementStatus = i.MeasurementStatus,
            this.PhaseStatus = o.PhaseStatus
          }
          return Object.defineProperty(
                     PhaseComponent.prototype, 'showMeasurements', {
                       get: function() {
                         return this.expand &&
                             this.phase.measurements.length > 0
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 __decorate(
                     [r.Input(), __metadata('design:type', o.Phase)],
                     PhaseComponent.prototype, 'phase', void 0),
                 __decorate(
                     [r.Input(), __metadata('design:type', Boolean)],
                     PhaseComponent.prototype, 'expand', void 0),
                 PhaseComponent = __decorate(
                     [r.Component({
                       selector: 'htf-phase',
                       template: n(605),
                       styles: [n(606)]
                     })],
                     PhaseComponent)
        }();
        t.PhaseComponent = s
      },
      605: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="htf-layout-header" [class.header-with-measurements]="showMeasurements">\n  <span class="u-clamp-text">\n    <span class="phase-name">{{ phase.name }}</span>\n    <span *ngIf="phase.status !== PhaseStatus.waiting">\n      &nbsp;{{ phase | elapsedTime:\'(%s)\' }}\n    </span>\n  </span>\n\n  <div class="u-flex-grow"></div>\n  <div\n    class="htf-status-indicator"\n    [ngClass]="phase.status | statusToClass">\n    {{ phase.status | statusToText }}\n  </div>\n</div>\n\n<table\n  *ngIf="showMeasurements"\n  class="measurement-list"\n  [ngClass]="phase.status | statusToClass">\n  <thead>\n    <td class="measurement-column-name">Measurement name</td>\n    <td class="measurement-column-value">Value</td>\n    <td class="measurement-column-validators">Validators</td>\n    <td class="measurement-column-result">Result</td>\n  </thead>\n  <tbody>\n    <tr *ngFor="let measurement of phase.measurements">\n      <td class="measurement-column-name">{{ measurement.name }}</td>\n      <td class="measurement-column-value">\n        <htf-trimmed-text [maxChars]="80" [content]="measurement.measuredValue">\n        </htf-trimmed-text>\n      </td>\n      <td class="measurement-column-validators">{{ measurement.validators }}</td>\n      <td\n        [ngSwitch]="measurement.status"\n        class="measurement-column-result">\n        <span *ngSwitchCase="MeasurementStatus.pass">Pass</span>\n        <span *ngSwitchCase="MeasurementStatus.fail">Fail</span>\n        <span *ngSwitchDefault>—</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'
      },
      606: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.header-with-measurements {\n  border-bottom: 1px solid #e5e5e5; }\n\n.measurement-list {\n  border-collapse: separate;\n  border-right: 100px solid rgba(50, 50, 50, 0.1);\n  border-spacing: 0 3px;\n  font-size: 12px;\n  padding: 10px 15px;\n  width: 100%; }\n  .measurement-list.ng-status-fail {\n    border-right-color: rgba(255, 93, 78, 0.1); }\n  .measurement-list.ng-status-pass {\n    border-right-color: rgba(0, 232, 157, 0.1); }\n  .measurement-list.ng-status-running {\n    border-right-color: rgba(0, 119, 255, 0.1); }\n  .measurement-list thead {\n    text-decoration: underline; }\n  .measurement-list tbody {\n    vertical-align: top; }\n  .measurement-list td {\n    padding: 0; }\n  .measurement-list .measurement-column-name {\n    width: 30%;\n    padding-right: 5px; }\n  .measurement-list .measurement-column-value {\n    width: 30%;\n    padding-right: 5px; }\n  .measurement-list .measurement-column-validators {\n    width: 30%;\n    padding-right: 5px; }\n  .measurement-list .measurement-column-result {\n    text-align: right; }\n'
      },
      607: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(25), o = n(49), s = n(243), a = function() {
          return function StationDeselectedEvent() {}
        }();
        t.StationDeselectedEvent = a;
        var u = function() {
          function StationComponent(e, t) {
            this.stationService = e, this.config = t,
            this.onDeselectStation = new r.EventEmitter,
            this.selectedTest = null
          }
          return Object.defineProperty(
                     StationComponent.prototype, 'activeTest', {
                       get: function() {
                         return null !== this.selectedTest ?
                             this.selectedTest :
                             this.stationService.getTest(this.selectedStation)
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(
                     StationComponent.prototype, 'dashboardEnabled', {
                       get: function() {
                         return this.config.dashboardEnabled
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(StationComponent.prototype, 'hasError', {
                   get: function() {
                     return this.stationService.hasError
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 Object.defineProperty(
                     StationComponent.prototype, 'isLoading', {
                       get: function() {
                         return this.stationService.isSubscribing
                       },
                       enumerable: !0,
                       configurable: !0
                     }),
                 Object.defineProperty(StationComponent.prototype, 'isOnline', {
                   get: function() {
                     return !(this.hasError || this.isLoading)
                   },
                   enumerable: !0,
                   configurable: !0
                 }),
                 StationComponent
                     .prototype.ngOnInit =
                     function() {
                   this.stationService.subscribe(
                       this.selectedStation, 200, 1.08, 1500)
                 },
     StationComponent.prototype.ngOnDestroy =
                     function() {
       this.stationService.unsubscribe()
     },
     StationComponent.prototype.goBack =
                     function() {
       this.onDeselectStation.emit(new a)
     },
     StationComponent.prototype.manualReload =
                     function() {
       this.stationService.refresh()
     },
     StationComponent.prototype.onSelectTest =
                     function(e) {
       this.selectedTest = e
     },
     __decorate([r.Input(), __metadata('design:type', o.Station)],
                StationComponent.prototype, 'selectedStation', void 0),
     __decorate([r.Output(), __metadata('design:type', Object)],
                StationComponent.prototype, 'onDeselectStation', void 0),
     StationComponent = __decorate(
         [
           r.Component(
               {selector: 'htf-station', template: n(608), styles: [n(609)]}),
           __metadata('design:paramtypes', [s.StationService, i.ConfigService])
         ],
         StationComponent)
        }();
        t.StationComponent = u
      },
      608: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="station">\n\n  <div class="nav-bar">\n    <button\n      *ngIf="dashboardEnabled"\n      (click)="goBack()"\n      type="button"\n      class="htf-link-button">\n      ‹ Return to station selection\n    </button>\n    <div class="u-flex-grow"></div>\n    <button\n      (click)="manualReload()"\n      type="button"\n      class="htf-link-button">\n      Refresh station\n    </button>\n  </div>\n\n  <div class="status-bar">\n    <div class="status-bar-row u-font-size-large">\n      <div>{{ selectedStation.label }}</div>\n      <div class="u-flex-grow"></div>\n      <span *ngIf="isOnline">Status: Connected</span>\n      <span *ngIf="!isOnline" class="u-text-color-error">Status: Offline</span>\n    </div>\n    <div class="status-bar-row u-text-color-deemphasize">\n      <span>{{ selectedStation.testDescription }}</span>\n      <div class="u-flex-grow"></div>\n      <span class="htf-support-text">{{ selectedStation.host }}:{{ selectedStation.port }}</span>\n    </div>\n  </div>\n\n  <div [class.station--is-offline]="!isOnline">\n    <div class="htf-layout-widgets-container htf-layout-widgets-row">\n      <htf-user-input-plug [test]="activeTest"></htf-user-input-plug>\n    </div>\n\n    <div class="htf-layout-widgets-container">\n      <div class="htf-layout-widgets-left">\n        <div\n          *ngIf="selectedTest !== null"\n          class="past-test-warning htf-layout-widget">\n          <div class="htf-layout-widget-header">\n            <div>Displaying test record for a previous test run</div>\n            <span>&nbsp;({{ selectedTest.startTimeMillis | timeAgo }})</span>\n            <div class="u-flex-grow"></div>\n            <button\n              type="button"\n              class="htf-rounded-button-grey"\n              (click)="onSelectTest(null)">\n              Return to current test\n            </button>\n          </div>\n        </div>\n\n        <htf-test-summary [test]="activeTest"></htf-test-summary>\n        <htf-logs [test]="activeTest"></htf-logs>\n        <htf-attachments [test]="activeTest"></htf-attachments>\n        <htf-phase-list [test]="activeTest"></htf-phase-list>\n      </div>\n\n      <div class="htf-layout-widgets-right">\n        <htf-history\n          [selectedTest]="selectedTest"\n          [station]="selectedStation"\n          (onSelectTest)="onSelectTest($event.test)">\n        </htf-history>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n'
      },
      609: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.nav-bar {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 12px;\n  margin-bottom: 12px; }\n\n.status-bar {\n  margin-bottom: 16px; }\n\n.status-bar-row {\n  -ms-flex-align: baseline;\n      align-items: baseline;\n  display: -ms-flexbox;\n  display: flex; }\n\n.past-test-warning {\n  color: #ff5d4e; }\n  .past-test-warning .htf-layout-widget-header {\n    border: 0; }\n'
      },
      610: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = n(66), o = n(21), s = n(237), a = function() {
          function TestSummaryComponent() {}
          return TestSummaryComponent
                     .prototype.ngOnChanges =
                     function(e) {
            'test' in e && this.progressBar && this.progressBar.reset()
          },
 Object.defineProperty(TestSummaryComponent.prototype, 'completedPhaseCount', {
   get: function() {
     if (this.test.status === o.TestStatus.waiting) return 0;
     if (this.test.status === o.TestStatus.pass) return this.test.phases.length;
     for (var e = 0, t = 0, n = this.test.phases; t < n.length; t++) {
       var r = n[t];
       if (r.status === i.PhaseStatus.running ||
           r.status === i.PhaseStatus.fail)
         break;
       e++
     }
     return e
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(TestSummaryComponent.prototype, 'progressValue', {
   get: function() {
     return this.completedPhaseCount / this.test.phases.length
   },
   enumerable: !0,
   configurable: !0
 }),
 Object.defineProperty(TestSummaryComponent.prototype, 'runningPhase', {
   get: function() {
     if (this.test.status === o.TestStatus.running)
       for (var e = 0, t = this.test.phases; e < t.length; e++) {
         var n = t[e];
         if (n.status === i.PhaseStatus.running) return n
       }
     return null
   },
   enumerable: !0,
   configurable: !0
 }),
 __decorate([r.Input(), __metadata('design:type', o.TestState)],
            TestSummaryComponent.prototype, 'test', void 0),
 __decorate(
                     [
                       r.ViewChild(s.ProgressBarComponent),
                       __metadata('design:type', s.ProgressBarComponent)
                     ],
                     TestSummaryComponent.prototype, 'progressBar', void 0),
 TestSummaryComponent = __decorate(
     [r.Component(
         {selector: 'htf-test-summary', template: n(611), styles: [n(612)]})],
     TestSummaryComponent)
        }();
        t.TestSummaryComponent = a
      },
      611: function(e, t) {
        e.exports =
            '\x3c!--\n Copyright 2022 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the "License");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an "AS IS" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n--\x3e\n\n<div class="htf-layout-widget" *ngIf="test">\n\n  <div class="htf-layout-widget-header">\n    <div>Current test: {{ test.name }}</div>\n    <div *ngIf="test.startTimeMillis">\n      &nbsp;{{ test | elapsedTime:\'(%s)\' }}\n    </div>\n    <div class="u-flex-grow"></div>\n    <div\n      class="htf-status-indicator"\n      [ngClass]="test.status | statusToClass">\n      {{ test.status | statusToText }}\n    </div>\n  </div>\n\n  <div class="htf-layout-widget-body">\n    <div class="u-display-flex">\n      <div>\n        DUT: {{ test.dutId === null ? \'—\' : test.dutId }}\n      </div>\n      <div class="u-flex-grow"></div>\n      <div>\n        Started: {{ test.startTimeMillis ? (test.startTimeMillis | date:\'medium\') : \'—\' }}\n      </div>\n    </div>\n  </div>\n\n  <div class="progress-bar-container htf-layout-widget-body">\n    <div>\n      Ran {{ completedPhaseCount }} of {{ this.test.phases.length }}\n      {{ completedPhaseCount === 1? \'phase\' : \'phases\' }}\n    </div>\n    <htf-progress-bar [value]="progressValue"></htf-progress-bar>\n  </div>\n\n  <div *ngIf="runningPhase !== null" class="phase-container htf-layout-widget-body">\n    <htf-phase [phase]="runningPhase" [expand]="true"></htf-phase>\n  </div>\n</div>\n\n\x3c!-- Empty state --\x3e\n<div class="htf-layout-widget" *ngIf="!test">\n  <div class="htf-layout-widget-header">\n    <div>Test: —</div>\n  </div>\n  <div class="htf-layout-widget-body">\n    <div class="htf-support-text">\n      <em>No test information to display</em>\n    </div>\n  </div>\n</div>\n'
      },
      612: function(e, t) {
        e.exports =
            '/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.htf-status-indicator {\n  line-height: 53px; }\n\n.progress-bar-container {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 12px;\n  white-space: nowrap; }\n\nhtf-progress-bar {\n  display: block;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  height: 22px;\n  margin-left: 15px;\n  width: 100%; }\n\n.phase-container {\n  padding: 0; }\n\n:host ::ng-deep htf-phase .phase-name {\n  font-weight: bold; }\n  :host ::ng-deep htf-phase .phase-name::before {\n    content: \'Current phase: \'; }\n'
      },
      66: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.waiting = 3] = 'waiting', e[e.running = 4] = 'running',
                        e[e.pass = 5] = 'pass', e[e.fail = 6] = 'fail',
                        e[e.skip = 7] = 'skip', e[e.error = 8] = 'error'
        }(t.PhaseStatus || (t.PhaseStatus = {}));
        var r = function() {
          return function Phase(e) {
            Object.assign(this, e)
          }
        }();
        t.Phase = r
      },
      94: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(19), i = n(2), o = n(29), s = n(571), a = n(572), u = n(573),
            l = n(576), c = n(577), p = n(237), d = n(97), h = n(580),
            m = n(581), f = n(95), y = n(582), g = n(583), v = function() {
              function SharedModule() {}
              return SharedModule = __decorate(
                         [i.NgModule({
                           imports: [r.CommonModule, o.HttpModule],
                           declarations: [
                             s.ElapsedTimePipe, a.FocusDirective,
                             u.GenealogyNodeComponent, l.LogLevelToClassPipe,
                             c.ObjectToSortedValuesPipe, p.ProgressBarComponent,
                             h.StatusToClassPipe, h.StatusToTextPipe,
                             m.TimeAgoPipe, g.TrimmedTextComponent,
                             y.TooltipDirective
                           ],
                           providers: [d.SockJsService, f.TimeService],
                           exports: [
                             r.CommonModule, s.ElapsedTimePipe,
                             a.FocusDirective, u.GenealogyNodeComponent,
                             l.LogLevelToClassPipe, c.ObjectToSortedValuesPipe,
                             p.ProgressBarComponent, h.StatusToClassPipe,
                             h.StatusToTextPipe, m.TimeAgoPipe,
                             g.TrimmedTextComponent, y.TooltipDirective
                           ]
                         })],
                         SharedModule)
            }();
        t.SharedModule = v
      },
      95: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), n(128), n(161),
            n(173);
        var r = n(2), i = n(0), o = 100, s = function() {
          function TimeService() {
            var e = this;
            this.observable = i.Observable.interval(o)
                                  .map(function() {
                                    return e.last = Date.now(), e.last
                                  })
                                  .publish(),
            this.last = null, this.observable.connect()
          }
          return TimeService = __decorate(
                     [r.Injectable(), __metadata('design:paramtypes', [])],
                     TimeService)
        }();
        t.TimeService = s
      },
      96: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}),
            t.logLevels =
                {debug: 10, info: 20, warning: 30, error: 40, critical: 50};
        var r = function() {
          return function LogRecord(e) {
            Object.assign(this, e)
          }
        }();
        t.LogRecord = r
      },
      97: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(2), i = function() {
          function SockJsService() {
            this.sockJs = SockJS
          }
          return SockJsService = __decorate([r.Injectable()], SockJsService)
        }();
        t.SockJsService = i
      },
      98: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0}), function(e) {
          e[e.unset = 0] = 'unset', e[e.pass = 1] = 'pass',
                      e[e.fail = 2] = 'fail'
        }(t.MeasurementStatus || (t.MeasurementStatus = {}));
        var r = function() {
          return function Measurement(e) {
            Object.assign(this, e)
          }
        }();
        t.Measurement = r
      },
      99: function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {value: !0});
        var r = n(233), i = n(2), o = n(25), s = n(32), a = n(26), u = n(241),
            l = n(242), c = function() {
              function HistoryService(e, t, n) {
                this.config = e, this.http = t, this.flashMessage = n,
                this.cache = {}, this.history = {}
              }
              return HistoryService.prototype
                         .getCache =
                         function(e) {
                return e.hostPort in this.cache ||
                           (this.cache[e.hostPort] = {}),
                       this.cache[e.hostPort]
              },
 HistoryService.prototype.getHistory =
                         function(e) {
   return e.hostPort in this.history || (this.history[e.hostPort] = []),
          this.history[e.hostPort]
 },
 HistoryService.prototype.loadItem =
                         function(e, t) {
   var n = this;
   if (t.status === u.HistoryItemStatus.loading ||
       t.status === u.HistoryItemStatus.loaded)
     throw new Error(
         'Cannot load a history item that is loading or has loaded.');
   var r = a.getStationBaseUrl(this.config.dashboardEnabled, e) + '/history/' +
       t.fileName;
   return t.status = u.HistoryItemStatus.loading,
          this.http.get(r)
              .toPromise()
              .then(function(r) {
                var i = t.fileName, o = l.makeTest(r, null, i, e);
                return n.getCache(e)[t.uniqueId] = o,
                       t.status = u.HistoryItemStatus.loaded, t.testState = o, o
              })
              .catch(function(e) {
                return t.status = u.HistoryItemStatus.error, Promise.reject(e)
              })
 },
 HistoryService.prototype.prependItemFromTestState =
                         function(e, t) {
   var n = new u.HistoryItem({
     drawAttention: !0,
     dutId: t.dutId,
     fileName: null,
     startTimeMillis: t.startTimeMillis,
     status: u.HistoryItemStatus.loaded,
     testState: t
   });
   this.getCache(e)[n.uniqueId] = t, this.getHistory(e).unshift(n)
 },
 HistoryService.prototype.refreshList =
                         function(e) {
   var t = this,
       n = a.getStationBaseUrl(this.config.dashboardEnabled, e) + '/history';
   return this.http.get(n)
       .toPromise()
       .then(function(n) {
         var r = n.data;
         t.getHistory(e).length = 0;
         var i, o = r.map(function(n) {
           var r = new u.HistoryItem({
             drawAttention: !1,
             dutId: n.dut_id,
             fileName: n.file_name,
             startTimeMillis: n.start_time_millis,
             status: u.HistoryItemStatus.unloaded,
             testState: null
           });
           if (r.uniqueId in t.getCache(e)) {
             var i = t.getCache(e)[r.uniqueId];
             r.status = u.HistoryItemStatus.loaded, r.testState = i
           }
           return r
         });
         a.sortByProperty(o, 'startTimeMillis', !0),
             (i = t.history[e.hostPort]).push.apply(i, o)
       })
       .catch(function(e) {
         if (404 === e.status)
           console.info('History from disk appears to be disabled.');
         else {
           var n = a.messageFromHttpClientErrorResponse(e);
           t.flashMessage.error('HTTP request for history failed.', n)
         }
         return Promise.reject(e)
       })
 },
 HistoryService.prototype.retrieveFileName =
                         function(e, t) {
   if (t.status !== u.HistoryItemStatus.loaded)
     throw new Error(
         'Cannot retrieve file name for a history item that is not loaded.');
   var n = a.getStationBaseUrl(this.config.dashboardEnabled, e) +
       '/history?dutId=' + t.dutId + '&startTimeMillis=' + t.startTimeMillis;
   return this.http.get(n).toPromise().then(function(e) {
     var n = e.data;
     if (0 === n.length)
       return Promise.reject(new Error('Server returned no history items.'));
     if (n.length > 1)
       return Promise.reject(
           new Error('Server returned more than one history item.'));
     var r = n[0];
     t.fileName = r.file_name, t.testState.fileName = r.file_name
   })
 },
 HistoryService = __decorate(
     [
       i.Injectable(),
       __metadata(
           'design:paramtypes',
           [o.ConfigService, r.HttpClient, s.FlashMessageService])
     ],
     HistoryService)
            }();
        t.HistoryService = c
      }
    },
    [559]);
// # sourceMappingURL=app.77df9acbfc40a7330df9.js.map