import React, { useState } from 'react';

const ClientForm = () => {
    const [first_name, setFirstName] = useState("Jesus");
    const [last_name, setLastName] = useState("Pineda");
    const [email, setEmail] = useState("jpinedas@uni.pe");
    const [phone, setPhone] = useState("+51992229450");

    function submitClient() {
        const apiUrl = `http://localhost:3000/clients`;
        fetch(apiUrl,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ first_name, last_name, email, phone })
            })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) });

    };

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitClient();
                }}
            >
                <label htmlFor="First Name">
                    First Name
                    <input
                        id="first-name"
                        value={first_name}
                        placeholder="First name"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </label>
                <label htmlFor="Last Name">
                    Last Name
                    <input
                        id="last-name"
                        value={last_name}
                        placeholder="Last name"
                        onChange={e => setLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="Email">
                    Email
                    <input
                        id="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="Phone Number">
                    Phone Number
                    <input
                        id="phone-number"
                        value={phone}
                        placeholder="Phone number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ClientForm;