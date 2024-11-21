/* import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  console.log(instructorCoursesList, "instructorCoursesList");

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-700 shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl text-zinc-200 font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-gray-600 overflow-y-auto">
        <div className="max-w-7xl  mx-auto">
          <h1 className="text-3xl text-zinc-200 font-bold mb-8">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent value={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
 */

import InstructorCourses from "@/components/instructor-view/courses";
import InstructorDashboard from "@/components/instructor-view/dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import { fetchInstructorCourseListService } from "@/services";
import { BarChart, Book, LogOut, MessageSquare, Settings } from "lucide-react";
import { useContext, useEffect, useState } from "react";

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { resetCredentials } = useContext(AuthContext);
  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: MessageSquare, // Icon for messages
      label: "Messages",
      value: "messages",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Settings, // Icon for settings
      label: "Settings",
      value: "settings",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },

    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <div className="flex flex-col h-full min-h-screen bg-teal-50">
      {/* Horizontal Navigation Bar */}
      <header className="w-full bg-teal-700 shadow-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl text-white font-bold">Instructor View</h2>
          <nav className="flex space-x-4">
            {menuItems.map((menuItem) => (
              <Button
                className="w-auto justify-start mb-2 transform transition-all duration-200 ease-in-out hover:scale-105 hover:bg-teal-600"
                key={menuItem.value}
                variant={activeTab === menuItem.value ? "secondary" : "ghost"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
                style={{
                  backgroundColor:
                    activeTab === menuItem.value ? "#2d3748" : "transparent", // Darker teal for active button
                  color:
                    activeTab === menuItem.value
                      ? "white"
                      : "rgba(255, 255, 255, 0.7)", // White text for active, lighter text for others
                }}
              >
                <menuItem.icon
                  className="mr-2 h-4 w-4"
                  style={{
                    color:
                      activeTab === menuItem.value
                        ? "white"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                />
                <span
                  className={
                    activeTab === menuItem.value
                      ? "text-white"
                      : "text-teal-200"
                  } // Ensures active text is white
                >
                  {menuItem.label}
                </span>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-teal-100 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-teal-700 font-bold mb-8">Dashboard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((menuItem) => (
              <TabsContent value={menuItem.value} key={menuItem.value}>
                {menuItem.component !== null ? menuItem.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
