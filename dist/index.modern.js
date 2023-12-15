import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';

const Modal = _ref => {
  let {
    show,
    close,
    title,
    mainContent,
    footerContent
  } = _ref;
  return createPortal( /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "modalContainer " + (show ? "show" : "") + " ",
    onClick: () => close(),
    "data-testid": "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("header", {
    className: "modal_header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal_header-title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: () => close()
  }, "\xD7")), /*#__PURE__*/React.createElement("main", {
    className: "modal_content"
  }, mainContent), /*#__PURE__*/React.createElement("footer", {
    className: "modal_footer"
  }, footerContent)))), document.body);
};

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: openModal
  }, "Click to open modal"), /*#__PURE__*/React.createElement(Modal, {
    show: modalVisible,
    close: closeModal,
    title: "My Modal",
    mainContent: /*#__PURE__*/React.createElement("p", null, "Main content!"),
    footerContent: /*#__PURE__*/React.createElement("div", {
      className: "modal-footer-actions"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        closeModal();
      }
    }, "Close"))
  }));
}

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(_ref => {
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
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));
reportWebVitals();

export { Modal };
//# sourceMappingURL=index.modern.js.map
