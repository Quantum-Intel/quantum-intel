const CLOUD = "dkhawygrr";

type CldResource = {
  public_id: string;
  format: string;
  created_at: string;
  context?: { custom?: Record<string, string> };
};

async function fetchResources(resourceType: "image" | "video", assetFolder: string) {
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;

  if (!key || !secret) {
    console.error("[Cloudinary] Missing CLOUDINARY_API_KEY or CLOUDINARY_API_SECRET");
    return [];
  }

  const params = new URLSearchParams({
    asset_folder: assetFolder,
    resource_type: resourceType,
    max_results: "50",
    context: "true",
  });
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD}/resources/by_asset_folder?${params}`,
    {
      headers: {
        Authorization: "Basic " + Buffer.from(`${key}:${secret}`).toString("base64"),
      },
      next: { revalidate: 86400 },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error(`[Cloudinary] API error ${res.status}:`, JSON.stringify(data));
    return [];
  }

  return (data.resources ?? []) as CldResource[];
}

export async function getPhotos() {
  const resources = await fetchResources("image", "quantumintel/website/images");
  return resources.map((r) => ({
    id: r.public_id,
    src: `https://res.cloudinary.com/${CLOUD}/image/upload/${r.public_id}.${r.format}`,
    caption: r.context?.custom?.caption ?? "",
    programme: r.context?.custom?.programme ?? "",
    region: r.context?.custom?.region ?? "",
    year: r.created_at.slice(0, 4),
  }));
}

