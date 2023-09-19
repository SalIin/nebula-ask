import path from "path";
import fsPromises from "fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "/public/questions.json");
  // Read the json file
  const data = await fsPromises.readFile(filePath, {
    encoding: "utf-8",
  });

  const jsonData = JSON.parse(data);

  return NextResponse.json(jsonData);
}
