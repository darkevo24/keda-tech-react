import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css"

function Home() {
  const [showText, setShowText] = useState(false);

  return (
    <div id="home" className="h-screen">
            <div class="absolute top-0 left-0 bg-blue-500 h-96 w-96 rounded-full -translate-y-2/3 transform rotate-45 origin-top-left"></div>
      <div class="container mx-auto px-4">

    </div>
      <div className="relative">
        <Navbar></Navbar>
      </div>
      <div className="w-full flex justify-center">
        <div
          className={`lg:w-[600px] mt-10 lg:ml-40 p-10 lg:p-0 ${
            showText ? "animate-fade-in" : ""
          }`}
          onAnimationStart={() => setShowText(true)}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          ante sit amet neque varius, vel aliquet dolor consequat. In hac
          habitasse platea dictumst. Nulla facilisi. Morbi malesuada, nunc eu
          tincidunt pulvinar, metus nisi vulputate odio, a faucibus velit velit
          vitae nibh. Integer eu libero in ante malesuada efficitur nec vel
          purus. Fusce sed nulla id lorem accumsan lobortis sit amet vitae
          sapien.
        </div>
      </div>

      <div className="mt-10 p-10">
        <p>*Excepteur sint occoecat culpadat mpm prodent.*</p>
      </div>

    </div>
  );
}

export default Home;

