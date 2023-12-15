# HRNet Modal

## Install

```bash
npm i hrnet-modal-aplainea
```

## Usage

```jsx
import { Modal } from "hrnet-modal-aplainea";

function MyModal() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <div>
            <button onClick={openModal}>Click to open modal</button>
            <Modal
                show={modalVisible}
                close={closeModal}
                title="My Modal"
                mainContent={<p>Main content!</p>}
                footerContent={
                    <div className="modal-footer-actions">
                        <button
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            Close
                        </button>
                    </div>
                }
            />
        </div>
    );
}
```
