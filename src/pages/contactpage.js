import React from "react"
import LocationDisplay from "../components/locationdisplay"
import ContactForm from "../components/contactform"
import ContactImage from "./contact-us-.png"

function ContactPage() {
  return (
    <div className="mt-10 mr-5 ml-5 flex flex-col items-center">
      <div className="w-full">
        <div className="text-6xl text-center font-montserrat font-bold text-primaryB w-full">Need to Contact Us?</div>
      </div>

      <div className="flex flex-row bg-primaryB items-center w-2/3 ring ring-primaryB rounded-lg mt-5">
        <div className=" text-4xl text-center font-montserrat font-semibold text-white px-8">Come Visit!</div>
        <LocationDisplay />
      </div>

      <div className="flex flex-row bg-white items-center w-2/3 ring ring-primaryB rounded-lg mt-8 mb-10">
        <img src={ContactImage} className="w-1/2 h-full" />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage
