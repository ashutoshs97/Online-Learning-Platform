// import { GraduationCap, TvMinimalPlay } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { useContext } from "react";
// import { AuthContext } from "@/context/auth-context";

// function StudentViewCommonHeader() {
//   const navigate = useNavigate();
//   const { resetCredentials } = useContext(AuthContext);

//   function handleLogout() {
//     resetCredentials();
//     sessionStorage.clear();
//   }

//   return (
//     <header className="flex items-center justify-between bg-teal-600 p-4 border-b relative">
//       <div className="flex items-center space-x-4">
//         <Link to="/home" className="flex items-center hover:text-black">
//           <GraduationCap className="h-8 w-8 mr-4 " />
//           <span className="font-extrabold md:text-xl text-[14px]">
//             E-LEARNER
//           </span>
//         </Link>
//         <div className="flex items-center space-x-1">
//           <Button
//             variant="Destructive"
//             onClick={() => {
//               location.pathname.includes("/courses")
//                 ? null
//                 : navigate("/courses");
//             }}
//             className="text-[14px] md:text-[16px] font-medium"
//           >
//             MORE COURSES
//           </Button>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="flex gap-4 items-center">
//           <div
//             onClick={() => navigate("/student-courses")}
//             className="flex cursor-pointer items-center gap-3"
//           >
//             <span className="font-extrabold md:text-xl text-[14px]">
//               My Courses
//             </span>
//             <TvMinimalPlay className="w-8 h-8 cursor-pointer" />
//           </div>
//           <Button variant="destructive" onClick={handleLogout}>Sign Out</Button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default StudentViewCommonHeader;
import { GraduationCap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between bg-teal-600 p-4 border-b">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-4 text-white" />
          <span className="font-extrabold md:text-xl text-[14px] text-white">
            CourseHive
          </span>
        </Link>
      </div>

      {/* Right Section: Buttons & Logout */}
      <div className="flex items-center space-x-6">
        {/* My Courses Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/student-courses")}
          className="px-6 py-3 text-white bg-[#243642] hover:bg-teal-700 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          My Courses
        </Button>

        {/* More Courses Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/courses")}
          className="px-6 py-3 text-white bg-[#243642] hover:bg-teal-700 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          More Courses
        </Button>

        {/* Sign Out Button */}
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="px-6 py-3 text-white bg-[#181C14] hover:bg-teal-700 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Sign Out
        </Button>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;




