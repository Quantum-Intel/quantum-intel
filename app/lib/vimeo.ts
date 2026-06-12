const FOLDER_ID = "29555973";

type VimeoVideo = {
  uri: string;
  name: string;
  duration: number;
  created_time: string;
  pictures: { sizes: { width: number; link: string }[] };
};

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export async function getVideos() {
  const token = process.env.VIMEO_ACCESS_TOKEN;
  if (!token) {
    console.error("[Vimeo] Missing VIMEO_ACCESS_TOKEN");
    return [];
  }

  const params = new URLSearchParams({
    fields: "uri,name,duration,pictures.sizes,created_time",
    per_page: "50",
  });

  const res = await fetch(
    `https://api.vimeo.com/me/projects/${FOLDER_ID}/videos?${params}`,
    {
      headers: { Authorization: `bearer ${token}` },
      next: { revalidate: 86400 },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("[Vimeo] API error:", res.status, data.error);
    return [];
  }

  return (data.data as VimeoVideo[]).map((v) => {
    const id = v.uri.split("/").pop()!;
    const thumb =
      v.pictures?.sizes?.find((s) => s.width >= 1280) ??
      v.pictures?.sizes?.at(-1);
    return {
      id,
      src: `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0`,
      poster: thumb?.link ?? "",
      title: v.name,
      programme: "",
      duration: formatDuration(v.duration),
      year: v.created_time.slice(0, 4),
    };
  });
}
