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
    //TODO реализовать всплывашки уточнающие данные
    emailValid: function emailValid() {
      var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        val = this.user.email;
      if (val.length > 0) {
        if (!val.match(pattern)) {
          return {
            'is-invalid': true
          };
        } else if (val.match(pattern) && this.errors && this.errors.has('email')) {
          //TODO! по сделал так, но надо как-то создать массив и туда добавить значение, если почта уже зарегистирирована 
          this.errors["delete"]('email');
          return {
            'is-invalid': true
          };
        } else {
          return {
            'is-valid': true
          };
        }
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
    },
    nicknameValid: function nicknameValid() {
      //@TODO! паттерн для проверки на латинские буквы
      var val = this.user.nickname;
      if (val.length > 0 && this.errors && this.errors.has('nickname')) {
        this.errors["delete"]('nickname');
        return {
          'is-invalid': true
        };
      } else if (val.length > 0) {
        return {
          'is-valid': true
        };
      }
    },
    passwordValid: function passwordValid() {
      var val = this.user.password,
        regularExpression = /^(?=.*[0-9])(?=.*[!@#$%()^&*])[a-zA-Z0-9!@#()$%^&*]{8,25}$/;

      //не менее 8 символов
      if (val.length < 8 && val.length > 0) {
        return {
          'is-invalid': true
        };
      }
      if (!regularExpression.test(val)) {
        return {
          'is-invalid': true
        };
      }
      if (this.errors && this.errors.has('password')) {
        this.errors["delete"]('password');
        return {
          'is-invalid': true
        };
      } else if (val.length >= 8) {
        return {
          'is-valid': true
        };
      }
    },
    passwordConfirmValida: function passwordConfirmValida() {
      var valPasswordConfirm = this.user.password_confirm,
        valPasswoed = this.user.password;
      if (valPasswoed != valPasswordConfirm && valPasswordConfirm.length > 0) {
        return {
          'is-invalid': true
        };
      }
      if (valPasswordConfirm.length > 0) {
        if (this.errors && this.errors.has('password_confirm')) {
          this.errors["delete"]('password_confirm');
          return {
            'is-invalid': true
          };
        } else if (valPasswordConfirm.length > 0) {
          return {
            'is-valid': true
          };
        }
      } else if (valPasswordConfirm.length == 0 && this.errors && this.errors.has('password_confirm')) {
        this.errors["delete"]('password_confirm');
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
    staticClass: "gradient-custom py-5 h-100"
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("email")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("nickname")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.nickname,
      expression: "user.nickname"
    }],
    staticClass: "form-control form-control-lg",
    "class": _vm.nicknameValid,
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("telephone")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("firstname")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("lastname")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
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
  }, [_vm._v("\n                                        " + _vm._s(this.errors.get("birtday")[0]) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("input", {
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
    staticClass: "mb-3 form-outline"
  }, [_vm.errors && _vm.errors.has("password") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                    " + _vm._s(this.errors.get("password")[0]) + "\n                                ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control",
    "class": _vm.passwordValid,
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
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "exampleInputPassword1"
    }
  }, [_vm._v("Пароль")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 form-outline"
  }, [_vm.errors && _vm.errors.has("password_confirm") ? _c("div", {
    staticClass: "invalid-feedback",
    attrs: {
      id: "validationServerUsernameFeedback"
    }
  }, [_vm._v("\n                                    " + _vm._s(this.errors.get("password_confirm")[0]) + "\n                                ")]) : _vm._e(), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password_confirm,
      expression: "user.password_confirm"
    }],
    staticClass: "form-control",
    "class": _vm.passwordConfirmValida,
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
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "exampleInputPassword2"
    }
  }, [_vm._v("Повторите пароль")])])]), _vm._v(" "), _c("div", {
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
  })])])])])])])]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.invalid-feedback[data-v-4d9b9646] {\n    display: block !important;\n}\n.form-outline[data-v-4d9b9646] {\n    position: relative;\n}\n.invalid-feedback[data-v-4d9b9646] {\n    position: absolute;\n    top: -30px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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