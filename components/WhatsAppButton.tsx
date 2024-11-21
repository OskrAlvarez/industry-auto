"use client"
import { WhatsAppIcon } from "./ui/icons"

export default function WhatsAppButton({ phoneNumber = "1234567890" }: { phoneNumber?: string }) {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="h-16 w-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bc5a] transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon />
    </button>
  )
}