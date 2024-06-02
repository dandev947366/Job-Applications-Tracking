import Image from 'next/image'
import Logo from '../assets/logo.svg'
import LandingImg from '../assets/main.svg'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
export default function Home() {
  return (
   <main>
    <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
      <Image src={Logo} alt="logo"/>
    </header>
    <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
      <div>
        <h1 className="capitalize text-4xl md:text-7xl font-bold">job <span className="text-primary">tracking</span></h1>
      <p className="leading-loose max-w-md m mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis modi repellat omnis voluptas veritatis fugiat ab debitis, aut quaerat fugit. Cupiditate itaque exercitationem suscipit, voluptate laboriosam animi harum minus!</p>
      </div>
      <Button asChild className="mt-4">
        <Link href="/add-job">
          Get Started
        </Link>
      
      </Button>
      <Image src={LandingImg} atl="landing" className="hidden lg:block"/>
    </section>
   </main>
  );
}
