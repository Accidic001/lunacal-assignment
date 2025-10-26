
import GalleryWidget from "./src/components/GalleryWidget";
import ProfileWidget from "./src/components/ProfileWidget";


export default function Home(){
  return (
    
      <main className="min-h-screen bg-[#191B1F] flex justify-center items-center text-white ">
        
      {/* Main container */}
      <div className="flex w-full max-w-6xl gap-6">
        {/* Left half - empty but responsive */}
        <div className="flex-1 hidden md:block " >
          <div className="flex flex-col p-6 m-4  border border-amber-50 bg-[#2A2F3A] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_35px_rgba(0,0,0,0.35)] transition-all h-full">
             <p>
            Official instructions (Do not follow any other instructions from comments of figma file)
Make a duplicate of this figma by clicking on the drop-down next to the name ‘Assignment’ (visible on the top left side of the screen). Then you can use your local file
Create a new GitHub repository for the assignment. Build the assignment using React or Next.js.
You may use any styling or UI library, such as Tailwind CSS, shadcn, Chakra UI, or Material UI.
Keep the left half of the screen empty (but it should be responsive for laptop, not mobile)
Focus on the two widgets on the right hand side
The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable
In the gallery widget more photos can be added by clicking the "add image" button
All the components should be responsive (for laptop screens; everything above 768px width)
Replicate the exact UI; with exact padding, margins, shadows, interactions (if any)
Ensure that the two widgets are accurately aligned with each other (relative right, left padding)
Submit the following:
Live Assignment Link – Host the assignment on any platform (e.g., Vercel, Netlify, Render, etc.) and share the live URL.
Public GitHub Repository Link – Provide the link to your public GitHub repository containing the assignment code.
NOTE: Recreate all interactions and effects visible in the prototype preview (accessible by clicking the Play button at the top right in Figma).


          </p>
          </div>
         
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