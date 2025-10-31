import Hello from "@/components/hello";

export default function Home() {
  console.log("hola");
  return (
    <div className="container px-2 md:px-4 py-5 text-4xl">
      Home
      <Hello/>
    </div>
  )
}
