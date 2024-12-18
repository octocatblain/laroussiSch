import Home from "@/app/home/page";

const Page = async () => {

  // const session: any = await getServerSession(options);
  return (
    <div className="pt-20">
      {/* {(session) ? (<>
        <div className="relative pb-24">
          <Home />
        </div>
      </>) : <h1 className="text-lg">Not Logged In</h1>} */}
      <div className="relative pb-24">
        <Home />
      </div>
    </div>
  );
};

export default Page;
