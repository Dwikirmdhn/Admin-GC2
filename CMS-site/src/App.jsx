import { RouterProvider } from 'react-router-dom';
import router from './routers'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}







// // Dashboard.jsx
// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-blue-800 p-4 text-white">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <a href="#" className="hover:underline">
//               Home
//             </a>
//             <a href="#" className="hover:underline">
//               Settings
//             </a>
//             <a href="#" className="hover:underline">
//               Profile
//             </a>
//             <a href="#" className="hover:underline">
//               Logout
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar and Main Content */}
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 bg-blue-900 text-white h-screen p-6">
//           <ul className="space-y-4">
//             <li>
//               <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
//                 Users
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
//                 Reports
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
//                 Settings
//               </a>
//             </li>
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6">
//           <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

//           {/* Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">Total Users</h3>
//               <p className="text-3xl mt-2">1,234</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">Revenue</h3>
//               <p className="text-3xl mt-2">$12,345</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">New Orders</h3>
//               <p className="text-3xl mt-2">123</p>
//             </div>
//             <div className="bg-white p-4 rounded shadow">
//               <h3 className="text-xl font-semibold">Pending Tasks</h3>
//               <p className="text-3xl mt-2">5</p>
//             </div>
//           </div>

//           {/* Table Section */}
//           <div className="mt-8">
//             <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
//             <div className="overflow-auto">
//               <table className="min-w-full bg-white">
//                 <thead>
//                   <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                     <th className="py-3 px-6 text-left">User</th>
//                     <th className="py-3 px-6 text-left">Activity</th>
//                     <th className="py-3 px-6 text-center">Date</th>
//                     <th className="py-3 px-6 text-center">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-600 text-sm font-light">
//                   <tr className="border-b border-gray-200 hover:bg-gray-100">
//                     <td className="py-3 px-6 text-left">John Doe</td>
//                     <td className="py-3 px-6 text-left">Created a new task</td>
//                     <td className="py-3 px-6 text-center">Sep 25, 2024</td>
//                     <td className="py-3 px-6 text-center">
//                       <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
//                         Completed
//                       </span>
//                     </td>
//                   </tr>
//                   <tr className="border-b border-gray-200 hover:bg-gray-100">
//                     <td className="py-3 px-6 text-left">Jane Smith</td>
//                     <td className="py-3 px-6 text-left">Updated profile settings</td>
//                     <td className="py-3 px-6 text-center">Sep 24, 2024</td>
//                     <td className="py-3 px-6 text-center">
//                       <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
//                         Pending
//                       </span>
//                     </td>
//                   </tr>
//                   {/* Add more rows as needed */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
