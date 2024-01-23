// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
// import { googleSignIn, userSignIn } from "../utils/authentication";
import { useNavigate } from "react-router-dom";
import { sendUserPasswordResetEmail } from "../utils/authentication";

export default function RecoveryUser() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleUserAuthentication = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendUserPasswordResetEmail(email);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://ik.imagekit.io/13x54r/nmh/NMH.png?updatedAt=1705392802106"
              alt="Nepali Momo House"
            />
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Recover your account.
            </h2>
          </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => handleUserAuthentication(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send recovery mail
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              onClick={() => navigate("/auth/register")}
              className="font-semibold leading-6 cursor-pointer text-indigo-600 hover:text-indigo-500"
            >
              Create an account instead.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
