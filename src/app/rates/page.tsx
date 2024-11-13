"use client";
import { useState, useEffect} from "react";

interface Rates {
    rates: {
        [kety: string]: number;
    };
}

export default function Rates() {
    const API_KEY = "a9da3d4ae5af956aee06b06016bcdc98";
    const [data, setData] = useState<Rates|null>(null);

    useEffect(() => {
        fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
          .then((response) => response.json())
          .then((jsonConverted) => {
            console.log("JSON Converted Data : ", jsonConverted);
            setData(jsonConverted);
          });
      }, []);

    return(
        <div>
            <div className="h-screen w-full bg-black flex flex-col items-center gap-5">
                <h1 className="text-white sm:text-4xl text-2xl md:text-5xl font-bold py-3"><span className="text-yellow-600">Real-Time</span> Coin Prices</h1>

<table className="h-[70vh] w-[90vw] sm:w-[79.5vw] overflow-y-auto flex flex-wrap justify-center bg-neutral-700 text-xl sm:text-2xl md:text-3xl">
    <thead>
        <tr className="flex justify-around w-[78vw] md:h-[8vh] border-2 p-2 border-black shadow-sm shadow-black bg-gray-300">
            <th>Name</th>
            <th>Rates</th>
        </tr>

        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
        <td><abbr className=" no-underline" title="Bitcoin">BTC</abbr></td>
        <td>{data?.rates?.BTC}</td>
        </tr>
        
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Automatic Deleveraging">ADL</abbr></td>
            <td>{data?.rates?.ADL}</td>
            </tr>
        
            <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="ADEX Network">ADX</abbr></td>
            <td>{data?.rates?.ADX}</td>
        </tr>
        
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Adzcoin">ADZ</abbr></td>
            <td>{data?.rates?.ADZ}</td>
        </tr>
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Aeternity">AE</abbr></td>
            <td>{data?.rates?.AE}</td>
        </tr>
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="SingularityNET">AGI</abbr></td>
            <td>{data?.rates?.AGI}</td>
        </tr>
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Artificial Intelligence Blockchain">AIB</abbr></td>
            <td>{data?.rates?.AIB}</td>
        </tr>
        
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Aidos Kuneen">AIDOC</abbr></td>
            <td>{data?.rates?.AIDOC}</td>
        </tr>

        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="ABCC Exchange Token">ABC</abbr></td>
            <td>{data?.rates?.ABC}</td>
        </tr>

        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Acropolium Platform">ACP</abbr></td>
            <td>{data?.rates?.ACP}</td>
        </tr>

        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Achain">ACT</abbr></td>
            <td>{data?.rates?.ACT}</td>
        </tr>
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Cardano">ADA</abbr></td>
            <td>{data?.rates?.ADA}</td>
        </tr>
        <tr className="flex hover:bg-neutral-600 justify-around w-[78vw] text-white  text-lg sm:text-xl md:text-2xl p-2 pt-4">
            <td><abbr className=" no-underline" title="Adcoin">ADCN</abbr></td>
            <td>{data?.rates?.ADCN}</td>
        </tr>
        {/* <tr className="flex justify-around w-[78vw] text-white text-2xl p-2 pt-4">
            <td>AIB</td>
            <td>{data?.rates?.AIB}</td>
        </tr>
        <tr className="flex justify-around w-[78vw] text-white text-2xl p-2 pt-4">
            <td>AMD</td>
            <td>{data?.rates?.AMD}</td>
        </tr> */}
    </thead>
    <tbody></tbody>
</table>

                {/* <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div> */}

            {/* </div> */}
            {/* </div> */}
            </div>
        </div>
    )
}