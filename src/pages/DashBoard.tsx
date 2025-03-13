import { FaXTwitter } from "react-icons/fa6";
import { LiaFileVideoSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { TiThSmallOutline } from "react-icons/ti";
import { CiLink } from "react-icons/ci";
import { MyButton } from "../components/Self/MyButton";
import ShareICon from "../icons/ShareICon";
import PlusIcon from "../icons/PlusIcon";
import CodeIcon from "../icons/CodeIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@/components/Self/Card";

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner";
import { backend_url } from "@/utils/bakendUrl";
import ExpandIcon from "@/icons/ExpandIcon";
import CollapseIcon from "@/icons/CollapseIcon";
import { z } from "zod";
import { objectIdRegex } from "@/components/AddContentForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";




export const DashBoardInfo = [
  { name: "All", icon: <TiThSmallOutline /> },
  { name: "Twitters", icon: <FaXTwitter /> },
  { name: "Videos", icon: <LiaFileVideoSolid /> },
  { name: "Documents", icon: <IoDocumentsOutline /> },
  { name: "Links", icon: <CiLink /> },
  { name: "Codes", icon: <CodeIcon /> },
];


const DashBoard = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLimitedtypes, setShowLimitedtypes] = useState(true);

  const token = localStorage.getItem("token");
  if (!token) {
    toast("Expired token, Please login");
    setTimeout(() => {
      navigate("/auth");
    }, 1000);
    return;
  }


  const typeSchema = z.object({
    typename: z.string().min(3, "type name cannot be less than 3 length").max(10, "type name cannot be more than 10 length")
  })

  const form = useForm<z.infer<typeof typeSchema>>({
    resolver: zodResolver(typeSchema),
    defaultValues: {
      typename: ""
    },
  });

  async function onSubmit(values: z.infer<typeof typeSchema>) {

  }




  useEffect(() => {
    const fetchContents = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");
        if (!token) {
          toast("Expired token, Please login");
          setTimeout(() => {
            navigate("/auth");
          }, 1000);
          return;
        }
        const response = await fetch(`${backend_url}/contents`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setContents(data.contents)
        } else {
          const data = await response.json();
          toast(data.message || "Failed to fetch contents");
        }
      } catch (error) {
        toast("Internal server error while fetching content")
      } finally {
        setLoading(false);
      }
    }

    // fetchContents();
  }, [loading])


  const visibleTypes = showLimitedtypes ? DashBoardInfo.slice(0, 6) : DashBoardInfo;


  return (
    <div className="w-full bg-[#171717] rounded-md min-h-[750px] flex flex-col">
      <div className="flex  items-center md:flex-row flex-wrap w-full p-3 bg-[#171717] border-b-2  border-black shadow-md justify-center gap-6">
        {visibleTypes.map((info, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-lg cursor-pointer border border-[#594ef1] shadow-sm hover:bg-[#594ef1] transition"
          >
            <div className="text-xl">{info.icon}</div>
            <div className="text-lg font-medium">{info.name}</div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => setShowLimitedtypes((prev) => !prev)}
          className="flex items-center gap-1 text-white opacity-90 hover:text-[#594ef1] transition cursor-pointer" >
          {showLimitedtypes ? <> Expand <ExpandIcon /> </> : <> Collapse <CollapseIcon /> </>}
        </motion.div>


        <Dialog >
          <DialogTrigger asChild>
            <MyButton
              size="md"
              variant="primary"
              startIcon={<PlusIcon />}
              text="add new type"
              onClick={() => { }}
            />

          </DialogTrigger>


          <DialogContent className="flex bg-black border border-gray-500 text-white flex-col items-center justify-center absolute md:left-173 md:top-100 left-4 top-100 sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add <span className="text-[#594EF1]">new type</span></DialogTitle>
            </DialogHeader>


            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="typename"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Typename</FormLabel>
                      <FormControl>
                        <Input placeholder="your new type" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full cursor-pointer bg-[#594EF1] hover:bg-[#594ef1e0]"
                >
                  {loading ? "submiting..." : "submit"}
                </Button>
              </form>
            </Form>

          </DialogContent>
        </Dialog>
      </div>


      <div className="p-4 relative">
        <div className="flex items-center justify-center gap-2 absolute top-4 right-8">



          <Dialog >
            <DialogTrigger asChild>
              <MyButton
                size="md"
                variant="secondary"
                startIcon={<ShareICon size="md" />}
                text="Share U'r Brain"
                onClick={() => { }}
              />

            </DialogTrigger>


            <DialogContent className="flex bg-black border border-gray-500 text-white flex-col items-center justify-center absolute md:left-173 md:top-100 left-4 top-100 sm:max-w-md">
              <DialogHeader>
                <DialogTitle>You are sharing your brain</DialogTitle>
                <DialogDescription>
                  Anyone who get this link will be able to see your brain data.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue="https://ui.shadcn.com/docs/installation"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3 cursor-pointer">
                  <Copy />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" className="bg-[#594EF1] hover:bg-[#594ef1e0] cursor-pointer">
                    Don't share
                  </Button>
                </DialogClose>
              </DialogFooter>

            </DialogContent>
          </Dialog>

          <MyButton

            size="md"
            variant="primary"
            startIcon={<PlusIcon size="md" />}
            text="Add Content"
            onClick={() => {
              navigate("/addcontent")
            }}
          />

        </div>

        <div className="w-full mt-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mx-auto">
          {/* {contents?.map((value) => (
            
            
          ))} */}

          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />
          <Card
            key={1}
            title={"value.title"}
            content={"value.content"}
            type="link"
            tags={["avsd", "dcscsd"]}
            createdAt="2023-12-25"
          />

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
