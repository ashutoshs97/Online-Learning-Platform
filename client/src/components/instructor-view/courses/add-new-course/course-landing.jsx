/* import FormControls from "@/components/common-form/form-controls";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { courseLandingPageFormControls } from "@/config";
  import { InstructorContext } from "@/context/instructor-context";
  import { useContext } from "react";

  function CourseLanding() {
    const { courseLandingFormData, setCourseLandingFormData } =
      useContext(InstructorContext);
    return (
      <Card>
        <CardHeader>
          <CardTitle>Course Landing Page</CardTitle>
        </CardHeader>
        <CardContent>
          <FormControls
            formControls={courseLandingPageFormControls}
            formData={courseLandingFormData}
            setFormData={setCourseLandingFormData}
          />
        </CardContent>
      </Card>
    );
  }

export default CourseLanding; */

import FormControls from "@/components/common-form/form-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";
import { Input } from "@/components/ui/input"; // Ensure Input component is imported
import { Button } from "@/components/ui/button"; // Ensure Button component is imported
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Ensure Select components are imported

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card className="bg-teal-50 shadow-lg rounded-lg p-6">
      <CardHeader className="border-b border-teal-200 pb-4">
        <CardTitle className="text-xl font-semibold text-teal-700">
          Course Landing Page
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />



        {/* Teal-Themed Dropdown Menu (Select) */}
        <div className="mt-4">
          <Select
            value={courseLandingFormData?.category}
            onValueChange={(value) =>
              setCourseLandingFormData({
                ...courseLandingFormData,
                category: value,
              })
            }
          >
            
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseLanding;
