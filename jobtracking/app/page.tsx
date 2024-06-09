import { Button } from "@/components/ui/button";
import {connectToDatabase} from '@/lib/mongoose'
import Link from "next/link";
export default function Home() {
  const connect = connectToDatabase()
  console.log("Home ~ connect: ", connect)
  return (
    <main>
      <section>
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span>
          </h1>
          <p className="leading-loose max-w-md m mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            blanditiis modi repellat omnis voluptas veritatis fugiat ab debitis,
            aut quaerat fugit. Cupiditate itaque exercitationem suscipit,
            voluptate laboriosam animi harum minus!
          </p>
        </div>
        <Button asChild className="mt-4">
          <Link href="/add-job">Get Started</Link>
        </Button>
      </section>
    </main>
  );
}
