"use client";
import "./style.css";

import axios from "axios";
import { useState } from "react";
import { carp, topla } from "../util/maths";


export default function Home() {


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [first, setFirst] = useState(5);
  const [second, setSecond] = useState(0);
  const [operation, setOperation] = useState("+");
  const [sonuc, setSonuc] = useState(0);

  const handleFirstChange = (event: any) => {
    setFirst(Number(event.target.value));
  };

  const handleSecondChange = (event: any) => {
    setSecond(Number(event.target.value));
  };

  const hesapla = () => {
    let result = 0;

    if (operation === "+") {
      result = topla(first, second);
      setSonuc(result);
    }
    else if (operation === "*") {
      result = carp(first, second);
      setSonuc(carp(first, second));
    }
    axios.post("/api/operations", {
      name: name,
      surname: surname,
      operation: operation,
      first: first,
      second: second,
      result: result
    });
  };

  //--------------------------------------------------------

  /* Onclick functions are here */

  const updateOperation = (operation: string) => {
    setOperation(operation);
  };


  //--------------------------------------------------------


  return (
    <div>

      <label htmlFor="">İsim:</label>
      <input type="text" className="border border-black" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="">Soyisim:</label>
      <input type="text" className="border border-black" value={surname} onChange={(e) => setSurname(e.target.value)} />

      <div>
        <button className="bg-red-500 p-2 text-white" onClick={() => updateOperation("+")}>Topla</button>
        <button className="bg-blue-500 p-2 text-white" onClick={() => updateOperation("*")}>Çarp</button>
      </div>

      <input type="number" className="border border-black" value={first} onChange={handleFirstChange} />
      <span>{operation}</span>
      <input type="number" className="border border-black" value={second} onChange={handleSecondChange} />
      <span>=</span>
      <span>{sonuc}</span>

      <br />
      <button className="bg-green-500 p-2 text-white" onClick={hesapla}>Hesapla</button>


    </div>
  );
}
