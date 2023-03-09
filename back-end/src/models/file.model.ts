import { Schema, model, Document } from "mongoose";

export interface IFile {
  file_name: string;
  user_id: number;
  extension: boolean;
  file: string;
  iv: string;
}

export interface IFileModel extends IFile, Document {}

const FileSchema: Schema = new Schema(
  {
    file_name: { type: String, required: true },
    user_id: { type: Number, required: true },
    extension: { type: String, required: true },
    file: { type: String, required: true },
    iv: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "File",
  }
);

export default model<IFileModel>("File", FileSchema);
