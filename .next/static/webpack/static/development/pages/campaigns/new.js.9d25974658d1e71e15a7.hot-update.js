webpackHotUpdate("static/development/pages/campaigns/new.js",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");

var _jsxFileName = "/home/sharan/kickstarter-campaign/pages/campaigns/new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // class CampaignNew extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Create a Campaign</h3>
//                 <Form>
//                     <Form.Field>
//                         <label>Minimum Contribution</label>
//                         <Input label="wei" labelPosition="right" />
//                     </Form.Field>
//                     <Button primary>Create!</Button>
//                 </Form>
//             </div>
//         )
//     }
// }

var CampaignNew = function CampaignNew() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      minimumContribution = _useState[0],
      setMinimumContribution = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var handleChange = function handleChange(e) {
    setMinimumContribution(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    var accounts;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts());

          case 3:
            accounts = _context.sent;
            console.log(accounts);
            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_factory__WEBPACK_IMPORTED_MODULE_3__["default"].methods.createCampaign(minimumContribution).send({
              from: accounts[0]
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Create a Campaign"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSubmit,
    error: !!errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Minimum Contribution"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    label: "wei",
    labelPosition: "right",
    value: minimumContribution,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
    error: true,
    header: "Oops!",
    content: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Create!")));
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignNew);

/***/ })

})
//# sourceMappingURL=new.js.9d25974658d1e71e15a7.hot-update.js.map