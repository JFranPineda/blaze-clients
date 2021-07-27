import React, { useState } from 'react';
import { Link } from '@reach/router';
import Modal from './Modal';
import ClientForm from './ClientForm';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    return (
        <div className="container">
            <Link to="/commits">
                <button>
                    Watch Commits
                </button>
            </Link>
            <Link to="/grid-client">
                <button>
                    Assignment
                </button>
            </Link>
            <Link to="/grid-full-client">
                <button>
                    Extra Bonus 01
                </button>
            </Link>
            <Link to="/" onClick={toggleModal}>
                <button>
                    New Client
                </button>
            </Link>
            {
                showModal ? (
                    <Modal>
                        <div>
                            <h1>
                                Would you like to add a new client?
                            </h1>
                            <ClientForm />
                            <div className="buttons">
                                <button onClick={toggleModal}>Cancel</button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
        </div>
    );
};

export default Home;