import Home from "@/app/home/page";

const Page = async () => {

  // const session: any = await getServerSession(options);
  return (
    <div className="pt-20">
     
      <div className="relative pb-24">
        <Home />
      </div>
    </div>
  );
};

export default Page;
