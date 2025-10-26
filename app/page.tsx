
import GalleryWidget from "./src/components/GalleryWidget";
import ProfileWidget from "./src/components/ProfileWidget";


export default function Home(){
  return (
    
      <main className="min-h-screen bg-[#1E222A] flex justify-center items-center text-white ">
      {/* Main container */}
      <div className="flex w-full max-w-6xl gap-6">
        {/* Left half - empty but responsive */}
        <div className="flex-1 hidden md:block" >
          
        </div>

        {/* Right half - widgets */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <ProfileWidget />
          <GalleryWidget />
        </div>
      </div>
    </main>
   
  )
}