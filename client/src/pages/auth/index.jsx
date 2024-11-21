// import CommonForm from "@/components/common-form";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { signInFormControls, signUpFormControls } from "@/config";
// import { AuthContext } from "@/context/auth-context";
// import { GraduationCap } from "lucide-react";
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";

// function AuthPage() {
//   const [activeTab, setActiveTab] = useState("signin");
//   const {
//     signInFormData,
//     setSignInFormData,
//     signUpFormData,
//     setSignUpFormData,
//     handleRegisterUser,
//     handleLoginUser,
//   } = useContext(AuthContext);

//   function handleTabChange(value) {
//     setActiveTab(value);
//   }

//   function checkIfSignInFormIsValid() {
//     return (
//       signInFormData &&
//       signInFormData.userEmail !== "" &&
//       signInFormData.password !== ""
//     );
//   }

//   function checkIfSignUpFormIsValid() {
//     return (
//       signUpFormData &&
//       signUpFormData.userName !== "" &&
//       signUpFormData.userEmail !== "" &&
//       signUpFormData.password !== ""
//     );
//   }

//   console.log(signInFormData);

//   return (
//     <div className="flex flex-col bg-teal-600 min-h-screen">
//       <header className="border-none px-4 lg:px-6 h-14 flex items-center justify-center border-b">
//         <Link to={"/"} className="flex items-center justify-center">
//           <GraduationCap className="h-8 w-8 mr-4" />
//           <span className="font-extrabold text-xl">E-LEARNER</span>
//         </Link>
//       </header>
//       <div className="flex items-center justify-center min-h-screen bg-gray-700">
//         <Tabs
//           value={activeTab}
//           defaultValue="signin"
//           onValueChange={handleTabChange}
//           className="w-full max-w-md"
//         >
//           <TabsList className="grid w-full grid-cols-2 bg-black">
//             <TabsTrigger value="signin">Sign In</TabsTrigger>
//             <TabsTrigger value="signup">Sign Up</TabsTrigger>
//           </TabsList>
//           <TabsContent value="signin">
//             <Card className="  p-6 space-y-4">
//               <CardHeader>
//                 <CardTitle className=" text-lg">Sign in to your account</CardTitle>
//                 <CardDescription >
//                   Enter your email and password to access your account
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className=" space-y-2">
//                 <CommonForm
//                   formControls={signInFormControls}
                  
//                   buttonText={"Sign Inn"}
//                   formData={signInFormData}
//                   setFormData={setSignInFormData}
//                   isButtonDisabled={!checkIfSignInFormIsValid()}
//                   handleSubmit={handleLoginUser}
//                 />
//               </CardContent>
//             </Card>
//           </TabsContent>
//           <TabsContent value="signup">
//             <Card className="p-6 space-y-4">
//               <CardHeader>
//                 <CardTitle>Create a new account</CardTitle>
//                 <CardDescription>
//                   Enter your details to get started
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <CommonForm
//                   formControls={signUpFormControls}
//                   buttonText={"Sign Up"}
//                   formData={signUpFormData}
//                   setFormData={setSignUpFormData}
//                   isButtonDisabled={!checkIfSignUpFormIsValid()}
//                   handleSubmit={handleRegisterUser}
//                 />
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default AuthPage;
import CommonForm from "@/components/common-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { GraduationCap } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  return (
    <div className="flex flex-col bg-teal-600 min-h-screen">
      <header className="border-none px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link to={"/"} className="flex items-center justify-center text-center">
          <GraduationCap className="h-8 w-8 mr-2 text-white" />
          <span className="font-extrabold text-xl text-white">CourseHive</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2 rounded-t-md">
            <TabsTrigger
              value="signin"
              className={`transition-all duration-300 px-4 py-2 ${
                activeTab === "signin"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-500"
              } rounded-t-md border-b-4 ${
                activeTab === "signin" ? "border-teal-600" : "border-gray-300"
              }`}
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className={`transition-all duration-300 px-4 py-2 ${
                activeTab === "signup"
                  ? "bg-teal-500 text-white"
                  : "bg-white text-teal-500"
              } rounded-t-md border-b-4 ${
                activeTab === "signup" ? "border-teal-600" : "border-gray-300"
              }`}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-6 space-y-4 bg-[#E2F1E7] shadow-md transition-all duration-200 hover:scale-102 min-h-[450px]">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-700">
                  Sign in to your account
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                  handleSubmit={handleLoginUser}
                  inputStyles="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-teal-400 focus:outline-none"
                  buttonStyles="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-600 active:scale-95"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="p-6 space-y-4 bg-[#E2F1E7] shadow-md transition-all duration-200 hover:scale-102 min-h-[450px]">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-700">
                  Create a new account
                </CardTitle>
                <CardDescription className="text-gray-500">
                  Enter your details to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                  inputStyles="border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-teal-400 focus:outline-none"
                  buttonStyles="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-600 active:scale-95"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;


