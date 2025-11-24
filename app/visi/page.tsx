// app/visi/page.tsx
import VisiMisiClient from "./visiClient";

export const revalidate = 0; // selalu fresh (opsional)

export default async function Page() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? ""; // optional
  // jika menjalankan di server dev, fetch ke relatif juga bekerja:
  const res = await fetch(`${base}/api/visimisi`, { cache: "no-store" });
  const data = await res.json();

  return <VisiMisiClient visiMisiData={data} />;
}
