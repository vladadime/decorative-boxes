import {useStateContext} from '../contexts/ContextProvider';

const Login = () => {
    const {setEmail, setPassword, signIn, signUp, errorMessage} = useStateContext();

    return (
        <div
            className="w-100 vh-100 d-flex justify-content-center align-content-center flex-wrap p-4 pb-4">
            <div className="w-25 d-flex justify-content-center border border-2">
                <div className="w-75 p-4 pb-4">
                    <form>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            {(errorMessage && errorMessage.includes("email")) && <div className="alert alert-danger" role="alert">Uneli ste pogrešnu email adresu. Molimo Vas da unesete ispravnu email adresu.</div>}
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}/>
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                            {(errorMessage && errorMessage.includes("password")) && <div className="alert alert-danger" role="alert">Uneli ste pogrešnu lozinku. Molimo Vas da unesete ispravnu lozinku.</div>}
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}/>
                            <label className="form-label" htmlFor="password">Lozinka</label>
                        </div>

                        {/* Submit button */}
                        <button
                            type="button"
                            className="btn btn-primary btn-block mb-4"
                            onClick={signUp}>Prijavi se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
