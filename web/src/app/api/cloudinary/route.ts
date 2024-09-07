import { cloudinary } from "@/config/cloudinary";
import { UploadApiErrorResponse } from "cloudinary";
import { UploadApiResponse } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

type UploadResponse =
  | { success: true; result: UploadApiResponse }
  | { success: false; error: UploadApiErrorResponse };

const uploadToCloudinary = async (
  fileUri: string,
  fileName: string
): Promise<UploadResponse> => {
  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      resource_type: "auto",
      filename_override: fileName,
      folder: "product-images",
      use_filename: true,
    });
    return { success: true, result };
  } catch (error) {
    // console.log("cloud 2 " , error)
    return { success: false, error: error as UploadApiErrorResponse };
  }
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    console.log("file",file)
    if (!file) {
      return NextResponse.json({ message: "No file provided" }, { status: 400 });
    }

    // Convert the file to an array buffer and then to base64
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = fileBuffer.toString("base64");

    // Construct the data URI for Cloudinary
    const fileUri = `data:${mimeType};${encoding},${base64Data}`;

    const res = await uploadToCloudinary(fileUri, file.name);
    // console.log("cloud",res)
    if (res.success && res.result) {
      return NextResponse.json({
        message: "success",
        imgUrl: res.result.secure_url,
      });
    } else {
      return NextResponse.json(
        { message: "failure"},
        { status: 500 }
      );
    }
  } catch (error) {
    // console.log(error , "Ed")
    return NextResponse.json(
      { message: "Internal Server Error", error: (error as Error).message },
      { status: 500 }
    );
  }
}
