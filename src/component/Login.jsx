import { useState } from "react";

const Login = ({
  setIsLoggedIn,
  setfname,
  fname,
  setlname,
  lname,
  setemail,
  email,
  theme,
}) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (fname && email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ fname }, { lname }, { email }),
      );
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="h-screen flex justify-center  bg-white dark:bg-[#0B0F1A]">
      <div className="flex mb-auto mt-10 flex-col gap-4 p-6 rounded-2xl  dark:bg-[#1e2027] shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
        <div className="flex gap-2">
          <input
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-200"
            type="name"
            placeholder="First Name"
            onChange={(e) => setfname(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-200"
            type="name"
            placeholder="Last Name"
            onChange={(e) => setlname(e.target.value)}
          />
        </div>

        <input
          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-200 "
          type="email"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-200"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-10 rounded-xl"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
