import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { FaPrint } from "react-icons/fa6";
const Qr = () => {
  const [numero, setNumero] = useState(1);
  return (
    <>
      <div className="flex gap-2 p-2">
        
        <input
          type="range"
          className="print:hidden"
          min={1}
          max={48}
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button
          type="button"
          className="print:hidden border p-1 rounded-lg cursor-pointer shadow hover:bg-slate-300"
          id="btnPrint"
          onClick={()=>window.print()}
        >
          <FaPrint className="size-10"/> {numero}
        </button>
      </div>

      <div className=" flex flex-wrap w-full bg-slate-200 items-start justify-evenly gap-2 ">
        {[...Array(parseInt(numero))].map((_, key) => (
          <div key={key} className="border-2">
            <QRCodeSVG
              fgColor={2}
              value="http://192.168.1.3:3000"
              size={150}
              level={"H"}
              marginSize={1}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Qr;
