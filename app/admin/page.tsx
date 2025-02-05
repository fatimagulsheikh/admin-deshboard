// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();


//     if (email === "gull33416@gmail.com" && password === "fati0314") {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/admin/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
    
//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={email}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={password}
//         />
//         <button
//           type="submit"
//           className="bg-red-500 text-white px-4 py-2 rounded w-full"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }














"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "gull33416@gmail.com" && password === "fati0314") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form 
        onSubmit={handleLogin} 
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 border border-white/20"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-white/30 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-white/30 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          value={password}
        />
        <button
          type="submit"
          className="bg-white text-purple-500 font-bold px-4 py-2 rounded w-full hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}







