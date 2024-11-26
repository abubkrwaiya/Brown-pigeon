import React from "react";

export default function Map() {
  return (
    <div className="flex justify-center items-center p-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18257.248772470066!2d8.459299656896063!3d11.992139985989878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7fd3cb4bb5ef%3A0x123e137813dd10f7!2sKano%20peace%20Committee%20Secretariat!5e0!3m2!1sen!2sng!4v1732310140158!5m2!1sen!2sng"
        className="w-full max-w-4xl h-96 border-0 rounded-lg shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Kano Peace Committee Secretariat"
      ></iframe>
    </div>
  );
}
