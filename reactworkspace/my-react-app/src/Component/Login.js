import { useState } from 'react';

const Login = () => {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.username || !data.password) {
            setStatus(false);
        } else {
            setStatus(true)
        }
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    return (
        <>
            <div className="container ">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            id="username"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            style={{ width: "40%" }}
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    {status === false && <div className="text-danger">Enter User Name and Password</div>}
                    {status === true && <div className="text-success">Login Successful</div>}
                </form>
            </div>
        </>
    );

};

export default Login