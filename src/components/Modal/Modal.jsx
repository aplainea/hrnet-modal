import React, { Fragment } from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, close, title, mainContent, footerContent }) => {
    return createPortal(
        <>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
                onClick={() => close()}
                data-testid="modal-container"
            >
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                        <button className="close" onClick={() => close()}>
                            &times;
                        </button>
                    </header>
                    <main className="modal_content">{mainContent}</main>
                    <footer className="modal_footer">{footerContent}</footer>
                </div>
            </div>
        </>,
        document.body
    );
};

export default Modal;
