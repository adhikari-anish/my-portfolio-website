import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";


export default function Home() {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
}
