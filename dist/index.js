function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
    if (e && e.__esModule) { return e; } else {
        var n = {};
        if (e) {
            Object.keys(e).forEach(function (k) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            });
        }
        n['default'] = e;
        return n;
    }
}

var React = require('react');
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(require('react-dom/client'));
var reactDom = require('react-dom');

const Modal = _ref => {
  let {
    show,
    close,
    title,
    mainContent,
    footerContent
  } = _ref;
  return reactDom.createPortal( /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "modalContainer " + (show ? "show" : "") + " ",
    onClick: () => close(),
    "data-testid": "modal-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React__default.createElement("header", {
    className: "modal_header"
  }, /*#__PURE__*/React__default.createElement("h2", {
    className: "modal_header-title"
  }, title), /*#__PURE__*/React__default.createElement("button", {
    className: "close",
    onClick: () => close()
  }, "\xD7")), /*#__PURE__*/React__default.createElement("main", {
    className: "modal_content"
  }, mainContent), /*#__PURE__*/React__default.createElement("footer", {
    className: "modal_footer"
  }, footerContent)))), document.body);
};

function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    onClick: openModal
  }, "Click to open modal"), /*#__PURE__*/React__default.createElement(Modal, {
    show: modalVisible,
    close: closeModal,
    title: "My Modal",
    mainContent: /*#__PURE__*/React__default.createElement("p", null, "Main content!"),
    footerContent: /*#__PURE__*/React__default.createElement("div", {
      className: "modal-footer-actions"
    }, /*#__PURE__*/React__default.createElement("button", {
      onClick: () => {
        closeModal();
      }
    }, "Close"))
  }));
}

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    new Promise(function (resolve) { resolve(_interopNamespace(require('web-vitals'))); }).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React__default.createElement(React__default.StrictMode, null, /*#__PURE__*/React__default.createElement(App, null)));
reportWebVitals();

exports.Modal = Modal;
//# sourceMappingURL=index.js.map
