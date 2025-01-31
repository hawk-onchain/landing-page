"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles, PaperclipIcon as PaperClip, Menu } from "lucide-react"
import Sidebar from "./Sidebar"

const ChatInterface: React.FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted:", inputValue)
    setInputValue("")
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-white text-brand-light">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <header className="bg-brand-dark border-b border-brand-green border-opacity-20 p-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-brand-light hover:text-brand-green transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawk%20Logo%20Transparent-V1IPr1JCMA4SGMdcq4k2u5WGMyBzwJ.png"
            alt="Hawk Logo"
            className="h-6 w-auto"
          />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-white text-gray-900">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <p className="text-lg mb-4 text-gray-900">Welcome to Hawk AI. How can I assist you today?</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="bg-white border-gray-200 text-black hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-4 w-4" /> Generate Ideas
                </Button>
                <Button
                  variant="outline"
                  className="bg-white border-gray-200 text-black hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-4 w-4" /> Analyze Data
                </Button>
              </div>
            </div>
            {/* Chat messages will be rendered here */}
          </div>
        </main>
        <footer className="bg-brand-dark p-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto flex items-center gap-2 bg-white rounded-lg p-2 shadow-lg border border-gray-200/20"
          >
            <Input
              type="text"
              placeholder="Ask about crypto trading strategies..."
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow border-0 focus:ring-0 bg-transparent text-black placeholder-gray-500"
            />
            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <PaperClip className="h-5 w-5 text-gray-400" />
            </button>
            <button type="submit" className="p-2 bg-brand-green hover:bg-opacity-90 rounded-full transition-colors">
              <Send className="h-5 w-5 text-black" />
            </button>
          </form>
        </footer>
      </div>
    </div>
  )
}

export default ChatInterface

