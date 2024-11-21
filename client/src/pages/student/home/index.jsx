// import { courseCategories } from "@/config";
// import banner from "../../../../public/e-learning_app.jpg";
// import { Button } from "@/components/ui/button";
// import { useContext, useEffect } from "react";
// import { StudentContext } from "@/context/student-context";
// import {
//   checkCoursePurchaseInfoService,
//   fetchStudentViewCourseListService,
// } from "@/services";
// import { AuthContext } from "@/context/auth-context";
// import { useNavigate } from "react-router-dom";

// function StudentHomePage() {
//   const { studentViewCoursesList, setStudentViewCoursesList } =
//     useContext(StudentContext);
//   const { auth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   function handleNavigateToCoursesPage(getCurrentId) {
//     console.log(getCurrentId);
//     sessionStorage.removeItem("filters");
//     const currentFilter = {
//       category: [getCurrentId],
//     };

//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));

//     navigate("/courses");
//   }

//   async function fetchAllStudentViewCourses() {
//     const response = await fetchStudentViewCourseListService();
//     if (response?.success) setStudentViewCoursesList(response?.data);
//   }

//   async function handleCourseNavigate(getCurrentCourseId) {
//     const response = await checkCoursePurchaseInfoService(
//       getCurrentCourseId,
//       auth?.user?._id
//     );

//     if (response?.success) {
//       if (response?.data) {
//         navigate(`/course-progress/${getCurrentCourseId}`);
//       } else {
//         navigate(`/course/details/${getCurrentCourseId}`);
//       }
//     }
//   }

//   useEffect(() => {
//     fetchAllStudentViewCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-zinc-400">
//       <section className="flex flex-row lg:flex-col items-center justify-between py-8 px-4 lg:px-8">
//         <div className="lg:w-1/2 lg:pr-12">
//           <h1 className="text-4xl font-bold  mb-4">Learning that gets you</h1>
//           <p className="text-xl">
            
//           </p>
//         </div>
//         <div className="lg:w-full mb-8 lg:mb-0">
//           <img
//             src={banner}
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </section>
//       <section className="py-8 px-4 lg:px-8 bg-black-100">
//         <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {courseCategories.map((categoryItem) => (
//             <Button
            
//               className="justify-start"
//               variant="secondary"
//               key={categoryItem.id}
//               onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
//             >
//               {categoryItem.label}
//             </Button>
//           ))}
//         </div>
//       </section>
//       <section className="py-12 px-4 lg:px-8">
//         <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
//             studentViewCoursesList.map((courseItem) => (
//               <div
//                 onClick={() => handleCourseNavigate(courseItem?._id)}
//                 className="border rounded-lg overflow-hidden shadow cursor-pointer"
//               >
//                 <img
//                   src={courseItem?.image}
//                   width={300}
//                   height={150}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-bold mb-2">{courseItem?.title}</h3>
//                   <p className="text-sm text-gray-700 mb-2">
//                     {courseItem?.instructorName}
//                   </p>
//                   <p className="font-bold text-[16px]">
//                     ${courseItem?.pricing}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h1>No Courses Found</h1>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default StudentHomePage;

// import { courseCategories } from "@/config";
// import banner from "../../../../public/e-learning_app.jpg";
// import { Button } from "@/components/ui/button";
// import { useContext, useEffect } from "react";
// import { StudentContext } from "@/context/student-context";
// import {
//   checkCoursePurchaseInfoService,
//   fetchStudentViewCourseListService,
// } from "@/services";
// import { AuthContext } from "@/context/auth-context";
// import { useNavigate } from "react-router-dom";

// function StudentHomePage() {
//   const { studentViewCoursesList, setStudentViewCoursesList } =
//     useContext(StudentContext);
//   const { auth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   function handleNavigateToCoursesPage(getCurrentId) {
//     sessionStorage.removeItem("filters");
//     const currentFilter = {
//       category: [getCurrentId],
//     };

//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));
//     navigate("/courses");
//   }

//   async function fetchAllStudentViewCourses() {
//     const response = await fetchStudentViewCourseListService();
//     if (response?.success) setStudentViewCoursesList(response?.data);
//   }

//   async function handleCourseNavigate(getCurrentCourseId) {
//     const response = await checkCoursePurchaseInfoService(
//       getCurrentCourseId,
//       auth?.user?._id
//     );

//     if (response?.success) {
//       if (response?.data) {
//         navigate(`/course-progress/${getCurrentCourseId}`);
//       } else {
//         navigate(`/course/details/${getCurrentCourseId}`);
//       }
//     }
//   }

//   useEffect(() => {
//     fetchAllStudentViewCourses();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-200">
//       {/* Banner Section */}
//       <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-16 bg-teal-600">
//         <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left text-white">
//           <h1 className="text-5xl font-extrabold mb-6">Learning That Gets You</h1>
//           <p className="text-lg font-light mb-4">
//             Unlock your potential with personalized courses from top instructors.
//           </p>
//         </div>
//         <div className="lg:w-1/2">
//           <img
//             src={banner}
//             alt="E-Learning"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Course Categories Section */}
//       <section className="py-8 px-6 lg:px-16">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Course Categories
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {courseCategories.map((categoryItem) => (
//             <Button
//               key={categoryItem.id}
//               onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
//               className="bg-gray-700 text-white hover:bg-teal-600 transition-all duration-200 py-3 px-4 rounded-lg shadow-lg text-center"
//             >
//               {categoryItem.label}
//             </Button>
//           ))}
//         </div>
//       </section>

//       {/* Featured Courses Section */}
//       <section className="py-12 px-6 lg:px-16">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           Featured Courses
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
//             studentViewCoursesList.map((courseItem) => (
//               <div
//                 key={courseItem?._id}
//                 onClick={() => handleCourseNavigate(courseItem?._id)}
//                 className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white"
//               >
//                 <img
//                   src={courseItem?.image}
//                   alt={courseItem?.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="font-bold text-lg mb-2 text-gray-700">
//                     {courseItem?.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-2">
//                     {courseItem?.instructorName}
//                   </p>
//                   <p className="font-bold text-teal-600 text-[16px]">
//                     ${courseItem?.pricing}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <h1 className="text-center text-gray-500 w-full">
//               No Courses Found
//             </h1>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default StudentHomePage;
import { courseCategories } from "@/config";
import banner from "../../../../public/e-learning_app.jpg";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [banner, banner, banner]; // Add images for the slides here.

  function handleNavigateToCoursesPage(getCurrentId) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    const response = await checkCoursePurchaseInfoService(
      getCurrentCourseId,
      auth?.user?._id
    );

    if (response?.success) {
      if (response?.data) {
        navigate(`/course-progress/${getCurrentCourseId}`);
      } else {
        navigate(`/course/details/${getCurrentCourseId}`);
      }
    }
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  // Function for automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Function for manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#FFF4EA] ">
      {/* Banner Section */}
      <section className="py-12 px-6 lg:px-16 bg-gradient-to-r from-teal-100 to-teal-200 relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-between"
              >
                <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
                  <h1 className="text-5xl font-extrabold mb-6 text-teal-800">
                    Learning That Gets You
                  </h1>
                  <p className="text-lg font-light mb-4 text-teal-600">
                    Unlock your potential with personalized courses from top
                    instructors.
                  </p>
                  <Button
                    onClick={() => navigate("/courses")}
                    className="bg-teal-500 text-white hover:bg-teal-600 transition-all duration-200 py-2 px-4 rounded-lg"
                  >
                    Explore Courses
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-teal-600" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-8 px-6 lg:px-16 relative">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Course Categories
        </h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 bg-[rgb(13,148,136)] hover:bg-[rgb(11,128,117)] text-white p-2 rounded-full shadow-md z-10"
            onClick={() => {
              const container = document.querySelector("#category-container");
              container.scrollBy({ left: -200, behavior: "smooth" });
            }}
          >
            &#8592;
          </button>

          {/* Categories List */}
          <div
            id="category-container"
            className="flex space-x-4 overflow-hidden no-scrollbar py-4 w-full px-12"
          >
            {courseCategories.map((categoryItem) => (
              <Button
                key={categoryItem.id}
                onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
                className="flex-shrink-0 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 transition-all duration-200 py-4 px-6 rounded-full shadow-sm text-center whitespace-nowrap"
              >
                <div className="text-lg font-bold">{categoryItem.label}</div>
              </Button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 bg-[rgb(13,148,136)] hover:bg-[rgb(11,128,117)] text-white p-2 rounded-full shadow-md z-10"
            onClick={() => {
              const container = document.querySelector("#category-container");
              container.scrollBy({ left: 200, behavior: "smooth" });
            }}
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.map((courseItem) => (
              <div
                key={courseItem?._id}
                onClick={() => handleCourseNavigate(courseItem?._id)}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={courseItem?.image}
                  alt={courseItem?.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-700">
                    {courseItem?.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-teal-600 text-[16px]">
                    ${courseItem?.pricing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-gray-500 w-full">
              No Courses Found
            </h1>
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
