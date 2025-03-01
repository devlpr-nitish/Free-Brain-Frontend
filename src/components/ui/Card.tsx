import { CiLink } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentsOutline } from "react-icons/io5";
import { LiaFileVideoSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";
import ShareICon from "../../icons/ShareICon";
import DeleteIcon from "../../icons/DeleteIcon";
import CalenderIcon from "../../icons/CalenderIcon";

interface CardProps {
  title: string;
  type: "twitter" | "video" | "document" | "code" | "link";
  content: string;
  tags: string[];
  createdAt: string;
}

const typeInfo = {
  twitter: <FaXTwitter />,
  video: <LiaFileVideoSolid />,
  document: <IoDocumentsOutline />,
  code: <FaCode />,
  link: <CiLink />,
};

const Card = ({ title, type, content, tags, createdAt }: CardProps) => {
  const formatDate = (date: string | Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(new Date(date));
  };


  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };


  return (
    <div className="bg-gray-100 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden flex flex-col gap-4  rounded-md p-4 border border-gray-300 shadow-md transition hover:border-purple-500 cursor-pointer">
      <div className=" flex flex-wrap items-center justify-between border-b border-gray-300 pb-2">
        <div className="flex items-center font-bold gap-2 text-xl ">
          <div className="opacity-60 ">{typeInfo[type]}</div>
          <div className="title">{truncateText(title, 20)}</div>
        </div>

        <div className="flex items-center gap-4 opacity-60">
          <div className="cursor-pointer">
            <ShareICon size="lg" />
          </div>

          <div className="cursor-pointer">
            <DeleteIcon size="lg" />
          </div>
        </div>
      </div>

      <div className="w-full text-xl min-h-40">{truncateText(content, 80)}</div>

      <div className="tags flex gap-2 flex-wrap ">
        {tags.map((tag) => (
          <div className="text-purple-600 px-2 bg-white rounded-md text-md">{`# ${tag}`}</div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-2 text-sm font-normal opacity-60">
        <div className="">
            <CalenderIcon/>
        </div>
        <div className="">
         {formatDate(createdAt)}
        </div>
        </div>
    </div>
  );
};

export default Card;
