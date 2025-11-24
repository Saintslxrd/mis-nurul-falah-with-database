import VisiMisiClient from "./visiClient"

export default async function Page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/visimisi`, {
    cache: "no-store"
  })

  const data = await res.json()

  return <VisiMisiClient visiMisiData={data} />
}
