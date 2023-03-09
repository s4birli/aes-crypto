import FileUpload from "./components/FileUpload";

const routes = [
  {
    type: "collapse",
    name: "File Upload",
    key: "file-upload",
    route: "/fileupload",
    component: <FileUpload />,
    noCollapse: true,
  },
];

export default routes;
