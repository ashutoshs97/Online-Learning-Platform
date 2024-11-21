/* import MediaProgressbar from "@/components/media-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";
import { useContext } from "react";

function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <div className="p-4">
        {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
      </div>
      <CardContent>
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData.image} />
        ) : (
          <div className="flex flex-col gap-3">
            <Label>Upload Course Image</Label>
            <Input
              onChange={handleImageUploadChange}
              type="file"
              accept="image/*"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CourseSettings;
 */

import MediaProgressbar from "@/components/media-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";
import { useContext } from "react";

function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <Card className="bg-teal-50 shadow-lg rounded-lg p-6">
      <CardHeader className="border-b border-teal-200 pb-4">
        <CardTitle className="text-xl font-semibold text-teal-700">
          Course Settings
        </CardTitle>
      </CardHeader>
      <div className="p-4">
        {mediaUploadProgress ? (
          <MediaProgressbar
            isMediaUploading={mediaUploadProgress}
            progress={mediaUploadProgressPercentage}
          />
        ) : null}
      </div>
      <CardContent>
        {courseLandingFormData?.image ? (
          <div className="flex justify-center mt-4">
            <img
              src={courseLandingFormData.image}
              alt="Course Image"
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4">
            <Label className="text-teal-700">Upload Course Image</Label>
            <div className="relative">
              <Input
                id="file-upload" // Add an id to associate with the label
                onChange={handleImageUploadChange}
                type="file"
                accept="image/*"
                className="py-2 px-4 border border-teal-300 rounded-md bg-teal-50 text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <label
                htmlFor="file-upload" // Associate the label with the input field
                className="absolute inset-0 flex items-center justify-center bg-teal-500 text-white font-semibold rounded-md cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                Choose File
              </label>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CourseSettings;
