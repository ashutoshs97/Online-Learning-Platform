// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Label } from "@/components/ui/label";
// import { Skeleton } from "@/components/ui/skeleton";
// import { filterOptions, sortOptions } from "@/config";
// import { AuthContext } from "@/context/auth-context";
// import { StudentContext } from "@/context/student-context";
// import {
//   checkCoursePurchaseInfoService,
//   fetchStudentViewCourseListService,
// } from "@/services";
// import { ArrowUpDownIcon } from "lucide-react";
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// function createSearchParamsHelper(filterParams) {
//   const queryParams = [];

//   for (const [key, value] of Object.entries(filterParams)) {
//     if (Array.isArray(value) && value.length > 0) {
//       const paramValue = value.join(",");

//       queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
//     }
//   }

//   return queryParams.join("&");
// }

// function StudentViewCoursesPage() {
//   const [sort, setSort] = useState("price-lowtohigh");
//   const [filters, setFilters] = useState({});
//   const [searchParams, setSearchParams] = useSearchParams();
//   const {
//     studentViewCoursesList,
//     setStudentViewCoursesList,
//     loadingState,
//     setLoadingState,
//   } = useContext(StudentContext);
//   const navigate = useNavigate();
//   const { auth } = useContext(AuthContext);

//   function handleFilterOnChange(getSectionId, getCurrentOption) {
//     let cpyFilters = { ...filters };
//     const indexOfCurrentSeection =
//       Object.keys(cpyFilters).indexOf(getSectionId);

//     console.log(indexOfCurrentSeection, getSectionId);
//     if (indexOfCurrentSeection === -1) {
//       cpyFilters = {
//         ...cpyFilters,
//         [getSectionId]: [getCurrentOption.id],
//       };

//       console.log(cpyFilters);
//     } else {
//       const indexOfCurrentOption = cpyFilters[getSectionId].indexOf(
//         getCurrentOption.id
//       );

//       if (indexOfCurrentOption === -1)
//         cpyFilters[getSectionId].push(getCurrentOption.id);
//       else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
//     }

//     setFilters(cpyFilters);
//     sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
//   }

//   async function fetchAllStudentViewCourses(filters, sort) {
//     const query = new URLSearchParams({
//       ...filters,
//       sortBy: sort,
//     });
//     const response = await fetchStudentViewCourseListService(query);
//     if (response?.success) {
//       setStudentViewCoursesList(response?.data);
//       setLoadingState(false);
//     }
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
//     const buildQueryStringForFilters = createSearchParamsHelper(filters);
//     setSearchParams(new URLSearchParams(buildQueryStringForFilters));
//   }, [filters]);

//   useEffect(() => {
//     setSort("price-lowtohigh");
//     setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
//   }, []);

//   useEffect(() => {
//     if (filters !== null && sort !== null)
//       fetchAllStudentViewCourses(filters, sort);
//   }, [filters, sort]);

//   useEffect(() => {
//     return () => {
//       sessionStorage.removeItem("filters");
//     };
//   }, []);

//   console.log(loadingState, "loadingState");

//   return (
//     <div className="container bg-zinc-400 mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">All Courses</h1>
//       <div className="flex flex-col md:flex-row gap-4">
//         <aside className="w-full md:w-64 space-y-4">
//           <div>
//             {Object.keys(filterOptions).map((ketItem) => (
//               <div className="p-4 border-b">
//                 <h3 className="font-bold mb-3">{ketItem.toUpperCase()}</h3>
//                 <div className="grid gap-2 mt-2">
//                   {filterOptions[ketItem].map((option) => (
//                     <Label className="flex font-medium items-center gap-3">
//                       <Checkbox
//                         checked={
//                           filters &&
//                           Object.keys(filters).length > 0 &&
//                           filters[ketItem] &&
//                           filters[ketItem].indexOf(option.id) > -1
//                         }
//                         onCheckedChange={() =>
//                           handleFilterOnChange(ketItem, option)
//                         }
//                       />
//                       {option.label}
//                     </Label>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>
//         <main className="flex-1">
//           <div className="flex justify-end items-center mb-4 gap-5">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="flex items-center gap-2 p-5"
//                 >
//                   <ArrowUpDownIcon className="h-4 w-4" />
//                   <span className="text-[16px] font-medium">Sort By</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-[180px]">
//                 <DropdownMenuRadioGroup
//                   value={sort}
//                   onValueChange={(value) => setSort(value)}
//                 >
//                   {sortOptions.map((sortItem) => (
//                     <DropdownMenuRadioItem
//                       value={sortItem.id}
//                       key={sortItem.id}
//                     >
//                       {sortItem.label}
//                     </DropdownMenuRadioItem>
//                   ))}
//                 </DropdownMenuRadioGroup>
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <span className="text-sm text-black font-bold">
//               {studentViewCoursesList.length} Results
//             </span>
//           </div>
//           <div className="space-y-4">
//             {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
//               studentViewCoursesList.map((courseItem) => (
//                 <Card
//                   onClick={() => handleCourseNavigate(courseItem?._id)}
//                   className="cursor-pointer"
//                   key={courseItem?._id}
//                 >
//                   <CardContent className="flex gap-4 p-4">
//                     <div className="w-48 h-32 flex-shrink-0">
//                       <img
//                         src={courseItem?.image}
//                         className="w-ful h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <CardTitle className="text-xl mb-2">
//                         {courseItem?.title}
//                       </CardTitle>
//                       <p className="text-sm text-gray-600 mb-1">
//                         Created By{" "}
//                         <span className="font-bold">
//                           {courseItem?.instructorName}
//                         </span>
//                       </p>
//                       <p className="text-[16px] text-gray-600 mt-3 mb-2">
//                         {`${courseItem?.curriculum?.length} ${
//                           courseItem?.curriculum?.length <= 1
//                             ? "Lecture"
//                             : "Lectures"
//                         } - ${courseItem?.level.toUpperCase()} Level`}
//                       </p>
//                       <p className="font-bold text-lg">
//                         ${courseItem?.pricing}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))
//             ) : loadingState ? (
//               <Skeleton />
//             ) : (
//               <h1 className="font-extrabold text-4xl">No Courses Found</h1>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default StudentViewCoursesPage;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { filterOptions, sortOptions } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { ArrowUpDownIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  return queryParams.join("&");
}

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    if (!cpyFilters[getSectionId]) {
      cpyFilters[getSectionId] = [getCurrentOption.id];
    } else {
      const index = cpyFilters[getSectionId].indexOf(getCurrentOption.id);
      if (index === -1) cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(index, 1);
    }

    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort) {
    const query = new URLSearchParams({
      ...filters,
      sortBy: sort,
    });
    const response = await fetchStudentViewCourseListService(query);
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
      setLoadingState(false);
    }
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
    const buildQueryStringForFilters = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(buildQueryStringForFilters));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters !== null && sort !== null)
      fetchAllStudentViewCourses(filters, sort);
  }, [filters, sort]);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("filters");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        All Courses
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Section */}
        <aside className="w-full md:w-64 bg-teal-50 rounded-lg shadow p-4">
          <h3 className="text-xl font-bold mb-4 text-teal-800">Filters</h3>
          <div className="space-y-6">
            {Object.keys(filterOptions).map((keyItem) => {
              const [isOpen, setIsOpen] = useState(true); // Default open state

              return (
                <div key={keyItem} className="border-b pb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <h4 className="font-semibold text-teal-700 mb-3">
                      {keyItem.toUpperCase()}
                    </h4>
                    <span
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  {isOpen && (
                    <div className="space-y-2">
                      {filterOptions[keyItem].map((option) => (
                        <Label
                          key={option.id}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <Checkbox
                            checked={
                              filters[keyItem] &&
                              filters[keyItem].includes(option.id)
                            }
                            onCheckedChange={() =>
                              handleFilterOnChange(keyItem, option)
                            }
                            className="transition-transform duration-200 transform group-hover:scale-105 group-focus:ring-2 group-focus:ring-teal-400"
                          />
                          <span className="text-gray-600 group-hover:text-teal-800 transition-colors">
                            {option.label}
                          </span>
                        </Label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* <aside className="w-full md:w-64 bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Filters</h3>
          <div className="space-y-6">
            {Object.keys(filterOptions).map((keyItem) => (
              <div key={keyItem} className="border-b pb-4">
                <h4 className="font-semibold text-gray-700 mb-3">
                  {keyItem.toUpperCase()}
                </h4>
                <div className="space-y-2">
                  {filterOptions[keyItem].map((option) => (
                    <Label
                      key={option.id}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        checked={
                          filters[keyItem] &&
                          filters[keyItem].includes(option.id)
                        }
                        onCheckedChange={() =>
                          handleFilterOnChange(keyItem, option)
                        }
                      />
                      <span className="text-gray-600">{option.label}</span>
                    </Label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside> */}

        {/* Courses Section */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center bg-gray-700 text-white hover:bg-teal-600 transition-all duration-200 px-4 py-2 rounded-lg">
                  <ArrowUpDownIcon className="mr-2" />
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg p-2 rounded-md">
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => setSort(value)}
                >
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      key={sortItem.id}
                      value={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="font-medium text-gray-600">
              {studentViewCoursesList.length} Results
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentViewCoursesList.length > 0 ? (
              studentViewCoursesList.map((courseItem) => (
                <Card
                  /*                   key={courseItem._id}
                  onClick={() => handleCourseNavigate(courseItem._id)} */
                  onClick={() => navigate(`/course/details/${courseItem._id}`)}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
                >
                  <CardContent className="flex gap-4 p-4">
                    <img
                      src={courseItem.image}
                      alt={courseItem.title}
                      className="w-40 h-24 object-cover rounded-md"
                    />
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-800">
                        {courseItem.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        By {courseItem.instructorName}
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        {courseItem.curriculum.length} Lectures -{" "}
                        {courseItem.level.toUpperCase()}
                      </p>
                      <p className="font-bold text-teal-600 mt-2">
                        ${courseItem.pricing}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : loadingState ? (
              <Skeleton />
            ) : (
              <h1 className="text-2xl font-bold text-gray-500">
                No Courses Found
              </h1>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;
