import { Button } from "@/components/ui/button";
// import {connectToDatabase} from '@/lib/mongoose'
import CompanyItem from '@/components/company/CompanyItem'
import Link from "next/link";
export default function Home() {
  // const connect = connectToDatabase()
  // console.log("Home ~ connect: ", connect)
  return (
    <main>
      <section>
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span>
          </h1>
        
        </div>
        <Button asChild className="mt-4">
          <Link href="/add-job">Get Started</Link>
        </Button>
      </section>
    </main>
  );
}
