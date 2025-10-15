import { writeClient } from "@/sanity/lib/write-client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) return res.status(400).json({ error: "Missing id" });

  try {
    // Fetch current views
    const { views: totalViews = 0 } = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id });

    // Increment views atomically
    await writeClient
      .patch(id)
      .inc({ views: 1 })
      .commit();

    // Return the updated views
    res.status(200).json({ views: totalViews + 1 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update views" });
  }
}