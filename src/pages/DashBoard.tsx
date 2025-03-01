import { FaXTwitter } from "react-icons/fa6";
import { LiaFileVideoSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { TiThSmallOutline } from "react-icons/ti";
import { CiLink } from "react-icons/ci";
import { Button } from "../components/ui/Button";
import ShareICon from "../icons/ShareICon";
import PlusIcon from "../icons/PlusIcon";
import Card from "../components/ui/Card";
import CodeIcon from "../icons/CodeIcon";


const DashBoard = () => {
  const DashBoardInfo = [
    { name: "All", icon: <TiThSmallOutline /> },
    { name: "Twitters", icon: <FaXTwitter /> },
    { name: "Videos", icon: <LiaFileVideoSolid /> },
    { name: "Documents", icon: <IoDocumentsOutline /> },
    { name: "Links", icon: <CiLink /> },
    // { name: "Tags", icon: <GoHash /> },
    { name: "Codes", icon: <CodeIcon /> },
  ];

  return (
    <div className="w-full bg-white rounded-md">
      <div className="flex w-full p-3 bg-gray-100 border-b border-gray-300 shadow-md justify-center gap-6">
        {DashBoardInfo.map((info, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg cursor-pointer border border-gray-300 shadow-sm hover:bg-purple-100 transition"
          >
            <div className="text-xl">{info.icon}</div>
            <div className="text-lg font-medium">{info.name}</div>
          </div>
        ))}
      </div>

      <div className="p-4 relative">
        <div className="flex gap-2 absolute top-4 right-8">
          <Button
            size="md"
            variant="secondary"
            startIcon={<ShareICon size="md" />}
            text="Share U'r Brain"
            onClick={() => {}}
          />
          <Button
            size="md"
            variant="primary"
            startIcon={<PlusIcon size="md" />}
            text="Add Content"
            onClick={() => {}}
          />
        </div>

        <div className="w-full mt-12 p-4 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Card
                key={index}
                title="Next Project"
                type="document"
                content="This is a new AI project starting next month..."
                createdAt="2024-02-29T10:30:00Z"
                tags={["AI", "Web Dev", "Project"]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
