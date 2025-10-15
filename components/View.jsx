import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
// import { unstable_after as after } from "next/server";
// unstable_after don't work for newer canary versions 

export const dynamic = "force-dynamic"; // tells Next.js to re-render on every request

const View = async ({ id }) => {

try {
  const updatedDoc = await writeClient
    .patch(id)
    .setIfMissing({ views: 0 })
    .inc({ views: 1 })
    .commit(); // returns the updated document
  const totalViews = updatedDoc.views || 0;
  
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
} catch (err) {
  console.error(err);
}

};

export default View;