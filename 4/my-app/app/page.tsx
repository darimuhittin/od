"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operand, setOperand] = useState("+");
  const [result, setResult] = useState(0);

  const [operations, setOperations] = useState([]);



  useEffect(() => {
    axios.get('/api/operations').then((res) => {
      setOperations(res.data.operations);
    })
  }, [])

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <button onClick={() => setOperand("+")} className="bg-indigo-600 text-white px-2 py-1 w-20">TOPLA</button>
        <button onClick={() => setOperand("-")} className="bg-indigo-600 text-white px-2 py-1 w-20">ÇIKAR</button>
        <button onClick={() => setOperand("*")} className="bg-indigo-600 text-white px-2 py-1 w-20">ÇARP</button>
        <button onClick={() => setOperand("/")} className="bg-indigo-600 text-white px-2 py-1 w-20">BOL</button>
      </div>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} className="border border-gray-300 rounded px-2 py-1 w-20" />
      <span className="mx-2 text-2xl font-bold">{operand}</span>
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} className="border border-gray-300 rounded px-2 py-1 w-20" />
      <button onClick={() => {
        let result = 0;
        if (operand === "+") {
          result = num1 + num2
        } else if (operand === "-") {
          result = num1 - num2
        } else if (operand === "*") {
          result = num1 * num2
        } else if (operand === "/") {
          result = num1 / num2
        }

        setResult(result)
        axios.post('/api/operations', { num1, num2, operand, result })

      }}>Submit</button>
      <p>RESULT : {result}</p>

      <div>HISTORY</div>
      {operations.map((operation: any) => (
        <div key={operation.id}>
          {operation.num1} {operation.operand} {operation.num2} = {operation.result}
        </div>
      ))}
    </div>
  );
}
