import React from "react"
import { ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Sample data structure
const models = [
  {
    name: "Taycan",
    variants: ["Electric"],
  },
  {
    name: "Panamera",
    variants: ["Hybrid", "Gasoline"],
  },
  {
    name: "Macan",
    variants: ["Electric", "Gasoline"],
  },
  {
    name: "Cayenne",
    variants: ["Hybrid", "Gasoline"],
  },
]

const mainNavItems = [
  {
    title: "Models",
    items: models,
  },
  {
    title: "Vehicle Purchase",
  },
  {
    title: "Services",
  },
  {
    title: "Experience",
  },
  {
    title: "Find a Dealer",
  },
]

export function PorscheSidebar() {
  return (
    <Sidebar className="border-none bg-white">
      <SidebarHeader className="p-6">
        {/* Logo placeholder */}
        <div className="h-6 w-32" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className="group flex h-14 items-center justify-between px-6 text-base hover:bg-neutral-100">
                {item.title}
                {item.items && (
                  <ChevronRight className="size-4 text-neutral-400 transition-transform group-data-[state=open]:rotate-90" />
                )}
              </SidebarMenuButton>
              {item.items && (
                <SidebarMenuSub>
                  {item.items.map((model) => (
                    <SidebarMenuSubItem key={model.name}>
                      <SidebarMenuSubButton
                        asChild
                        className="group flex flex-col items-start gap-4 p-6 hover:bg-neutral-100"
                      >
                        <div>
                          <div className="text-lg font-medium">{model.name}</div>
                          <div className="mt-2 flex gap-2">
                            {model.variants.map((variant) => (
                              <span key={variant} className="text-xs text-neutral-600">
                                {variant}
                              </span>
                            ))}
                          </div>
                          {/* Placeholder for model image */}
                          <div className="mt-4 aspect-[16/9] w-full bg-neutral-100" />
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

