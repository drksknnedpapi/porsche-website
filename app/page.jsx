import { PorscheSidebar } from "@/components/porsche-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <PorscheSidebar />
        <main className="flex-1">
          {/* Hero section */}
          <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://sjc.microlink.io/Qd414UjK_f6yiT_3Kz07ytHDKm94h3JxQUmkSci7B6yieYc-AfN8FFcozhOBgxu2WIYo7ILTtq-jyz8EWEHSsg.jpeg')`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-start p-24">
              <h1 className="text-7xl font-light text-white">Choose boldly!</h1>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

