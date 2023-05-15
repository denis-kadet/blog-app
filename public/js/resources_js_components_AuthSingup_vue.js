"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_AuthSingup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route */ "./resources/js/route.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AuthSingup",
  data: function data() {
    return {
      user: {
        email: '',
        nickname: '',
        firstname: '',
        lastname: '',
        birtday: '',
        telephone: '',
        gender: 'N',
        password: '',
        password_confirm: ''
      },
      errors: null
    };
  },
  computed: {
    //TODO написать проверку на 50/25/30 символов, чтобы загоралось красным
    // реализовать всплывашки уточнающие данные
    emailValid: function emailValid() {
      var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      var val = this.user.email;
      if (val.length > 0 && val.match(pattern)) {
        return {
          'is-valid': true
        };
      } else if (val.length > 0 || this.errors && this.errors.has('email') && !val.match(pattern)) {
        return {
          'is-invalid': true
        };
      }
    },
    telValid: function telValid() {
      //TODO! провести рефакторинг данного кода
      var patternMatch = /^7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/,
        val = this.user.telephone,
        x = val.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/),
        y = !x[3] ? x[1] + x[2] : x[1] + x[2] + x[3] + x[4] + x[5];
      //очищаем форму
      if (val.length == 4) {
        this.user.telephone = '';
      }
      if (val.length > 0 && y.match(patternMatch)) {
        return {
          'is-valid': true
        };
      } else if (val.length > 0 && val.length != 4 || this.errors && this.errors.has('telephone') && !y.match(patternMatch)) {
        return {
          'is-invalid': true
        };
      }
    }
  },
  // watch: {
  //     'user.email':function(val){
  //         var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  //         if(val.length > 0){
  //             if( val.match(pattern)){
  //                  console.log(val.match(pattern)) 
  //                 return {'is-valid': true};
  //             }else{
  //                 return 'is-invalid';
  //             }
  //         }
  //     } 
  // },
  methods: {
    getDataSubmit: function getDataSubmit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              axios__WEBPACK_IMPORTED_MODULE_0___default().get('/sanctum/csrf-cookie').then(function (res) {
                axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_route__WEBPACK_IMPORTED_MODULE_1__["default"])("signup"), {
                  email: _this.user.email,
                  nickname: _this.user.nickname,
                  firstname: _this.user.firstname,
                  lastname: _this.user.lastname,
                  birtday: _this.user.birtday,
                  telephone: _this.telNumber(),
                  gender: _this.user.gender,
                  password: _this.user.password,
                  password_confirm: _this.user.password_confirm
                }).then(function (response) {
                  console.log(response.data.created);
                  if (response.data.created) {
                    //TODO! переделать перехват ошибок https://stackoverflow.com/questions/48656993/best-practice-in-error-handling-in-vuejs-with-vuex-and-axios
                    _this.$router.push({
                      name: 'AuthLogin'
                    });
                  } else {
                    _this.errors = response.data.message;
                  }
                })["catch"](function (errors) {
                  var input = errors.response.data.errors,
                    error = new Map();
                  for (var key in input) {
                    var val = input[key];
                    error.set(key, val);
                  }
                  _this.errors = error;
                  console.log(error);
                });
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    acceptNumber: function acceptNumber() {
      var x = this.user.telephone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      if (x[1] === '7' || x[1] === '8') {
        x[1] = '+7';
      } else {
        x[2] = x[1];
        x[1] = '+7';
      }
      this.user.telephone = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    },
    telNumber: function telNumber() {
      var x = this.user.telephone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/),
        y = !x[3] ? x[1] + x[2] : x[1] + x[2] + x[3] + x[4] + x[5];
      return y;
    }
  },
  mounted: function mounted() {
    console.log('Component AuthSingup mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("section", {
    staticClass: "gradient-custom"
  }, [_c("div", {
    staticClass: "container py-5 h-100"
  }, [_c("div", {
    staticClass: "row justify-content-center align-items-center h-100"
  }, [_c("div", {
    staticClass: "col-12 col-lg-9 col-xl-7"
  }, [_c("div", {
    staticClass: "card shadow-2-strong card-registration",
    staticStyle: {
      "border-radius": "15px"
    }
  }, [_c("div", {
    staticClass: "card-body p-4 p-md-5"
  }, [_c("h3", {
    staticClass: "mb-4 pb-2 pb-md-0 mb-md-5"
  }, [_vm._v("Форма регистрации")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-4 pb-2"
  }, [_c("div", {
    staticClass: "form-outline"
  }, [_vm.errors && _vm.errors.has("email") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("email")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.email,
      expression: "user.email"
    }],
    staticClass: "form-control form-control-lg",
    "class": _vm.emailValid,
    attrs: {
      type: "email",
      maxlength: "50",
      id: "emailAddress",
      required: ""
    },
    domProps: {
      value: _vm.user.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "emailAddress"
    }
  }, [_vm._v("Email")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4 pb-2"
  }, [_c("div", {
    staticClass: "form-outline"
  }, [_vm.errors && _vm.errors.has("nickname") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("nickname")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.nickname,
      expression: "user.nickname"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      maxlength: "50",
      id: "validationCustomUsername",
      "aria-describedby": "inputGroupPrepend",
      required: ""
    },
    domProps: {
      value: _vm.user.nickname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "nickname", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label requer",
    attrs: {
      "for": "validationCustomUsername"
    }
  }, [_vm._v("Никнейм")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-4 pb-2"
  }, [_c("div", {
    staticClass: "form-outline"
  }, [_vm.errors && _vm.errors.has("telephone") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("telephone")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.telephone,
      expression: "user.telephone"
    }],
    staticClass: "form-control form-control-lg",
    "class": _vm.telValid,
    attrs: {
      type: "tel",
      id: "phoneNumber",
      placeholder: "+7 (999) 888-77-22"
    },
    domProps: {
      value: _vm.user.telephone
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "telephone", $event.target.value);
      }, _vm.acceptNumber]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "phoneNumber"
    }
  }, [_vm._v("Телефон")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "form-outline"
  }, [_vm.errors && _vm.errors.has("firstname") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("firstname")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.firstname,
      expression: "user.firstname"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      maxlength: "20",
      id: "firstName"
    },
    domProps: {
      value: _vm.user.firstname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "firstname", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "firstName"
    }
  }, [_vm._v("Имя")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "form-outline"
  }, [_vm.errors && _vm.errors.has("lastname") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("lastname")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.lastname,
      expression: "user.lastname"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "text",
      maxlength: "30",
      id: "lastName"
    },
    domProps: {
      value: _vm.user.lastname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "lastname", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "lastName"
    }
  }, [_vm._v("Фамилия")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-4 d-flex align-items-center"
  }, [_c("div", {
    staticClass: "form-outline datepicker w-100"
  }, [_vm.errors && _vm.errors.has("birtday") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                            " + _vm._s(this.errors.get("birtday")[0]) + "\n                                        ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.birtday,
      expression: "user.birtday"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      type: "date",
      id: "birthdayDate"
    },
    domProps: {
      value: _vm.user.birtday
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "birtday", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "birthdayDate"
    }
  }, [_vm._v("Дата рождения")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-4"
  }, [_c("h6", {
    staticClass: "mb-2 pb-1"
  }, [_vm._v("Пол: ")]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.gender,
      expression: "user.gender"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "femaleGender",
      value: "F",
      checked: ""
    },
    domProps: {
      checked: _vm._q(_vm.user.gender, "F")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.user, "gender", "F");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "femaleGender"
    }
  }, [_vm._v("Жен")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.gender,
      expression: "user.gender"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "maleGender",
      value: "M"
    },
    domProps: {
      checked: _vm._q(_vm.user.gender, "M")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.user, "gender", "M");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "maleGender"
    }
  }, [_vm._v("Муж")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.gender,
      expression: "user.gender"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      id: "otherGender",
      value: "N"
    },
    domProps: {
      checked: _vm._q(_vm.user.gender, "N")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.user, "gender", "N");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "otherGender"
    }
  }, [_vm._v("Other")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_vm.errors && _vm.errors.has("password") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("password")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "exampleInputPassword1"
    }
  }, [_vm._v("Пароль")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      maxlength: "25",
      id: "exampleInputPassword1"
    },
    domProps: {
      value: _vm.user.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_vm.errors && _vm.errors.has("password_confirm") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("password_confirm")[0]) + "\n                                    ")]) : _c("div", {
    staticClass: "valid-feedback"
  }, [_vm._v("\n                                        все заебись\n                                    ")]), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "exampleInputPassword2"
    }
  }, [_vm._v("Повторите пароль")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password_confirm,
      expression: "user.password_confirm"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password",
      maxlength: "25",
      id: "exampleInputPassword2"
    },
    domProps: {
      value: _vm.user.password_confirm
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.user, "password_confirm", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4 pt-2"
  }, [_c("input", {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      type: "submit",
      value: "Отправить"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getDataSubmit.apply(null, arguments);
      }
    }
  })])])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.invalid-feedback[data-v-4d9b9646] {\n    display: block !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_style_index_0_id_4d9b9646_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_style_index_0_id_4d9b9646_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_style_index_0_id_4d9b9646_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/AuthSingup.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AuthSingup.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true& */ "./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true&");
/* harmony import */ var _AuthSingup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthSingup.vue?vue&type=script&lang=js& */ "./resources/js/components/AuthSingup.vue?vue&type=script&lang=js&");
/* harmony import */ var _AuthSingup_vue_vue_type_style_index_0_id_4d9b9646_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& */ "./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthSingup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d9b9646",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AuthSingup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AuthSingup.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AuthSingup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthSingup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_template_id_4d9b9646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=template&id=4d9b9646&scoped=true&");


/***/ }),

/***/ "./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthSingup_vue_vue_type_style_index_0_id_4d9b9646_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AuthSingup.vue?vue&type=style&index=0&id=4d9b9646&scoped=true&lang=css&");


/***/ })

}]);