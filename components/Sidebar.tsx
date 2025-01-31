"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle, Home, Wallet, X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white lg:bg-brand-dark text-brand-dark lg:text-brand-light transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:w-64`}
      >
        <div className="h-full p-4 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawk%20Logo%20Transparent-V1IPr1JCMA4SGMdcq4k2u5WGMyBzwJ.png"
              alt="Hawk Logo"
              className="h-8 w-auto"
            />
            <button onClick={onClose} className="lg:hidden text-brand-light hover:text-brand-green p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <Button
            variant="outline"
            className="w-full mb-6 bg-white border-gray-200 text-black hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> New Conversation
          </Button>
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-brand-green hover:bg-opacity-10 transition-all duration-300"
                >
                  <Home className="mr-2 h-4 w-4" /> Home
                </Button>
              </li>
            </ul>
          </nav>
          <Button
            variant="outline"
            className="w-full justify-start bg-white border-gray-200 text-black hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
          >
            <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar

