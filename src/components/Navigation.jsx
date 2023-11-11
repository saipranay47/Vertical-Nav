import React from 'react'

function Navigation() {
  return (
    <div className="flex-col h-screen justify-start overflow-y-auto relative w-[226px] z-[1200] left-0">
      <nav
        className="items-center flex flex-col gap-3 justify-start w-full my-6"
        style={{
          height: "104px",
          pointerEvents: "all",
          transition:
            "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
        }}
      >
        <button
          className="bg-white text-black navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">00</span>
          <span className="navItemText">Raw Materials</span>
        </button>

        <button
          className="bg-[#ff3d00] text-white navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">01</span>
          <span className="navItemText">Hello</span>
        </button>

        <button
          className="bg-[#5900cc] text-white navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">02</span>
          <span className="navItemText">Approach</span>
        </button>

        <button
          className="bg-black text-white navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">03</span>
          <span className="navItemText">Work</span>
        </button>

        <button
          className="bg-[#2835f8] text-white navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">04</span>
          <span className="navItemText">Talent</span>
        </button>

        <button
          className="bg-[#ff003d] text-white navButton"
          style={{
            height: "104px",
            pointerEvents: "all",
            transition:
              "background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
        >
          <span className="navItemNumber">05</span>
          <span className="navItemText">Careers</span>
        </button>
      </nav>
    </div>
  );
}

export default Navigation