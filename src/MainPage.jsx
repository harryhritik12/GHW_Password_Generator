import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineSave } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { generateRandomPassword, isValidUrl } from "./utils";
import { addPassword } from "./db";
import TableComponent from "./TableComponent";

const MainPage = () => {
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [length, setLength] = useState(8);

  // const generatePassword = () => {
  //   const randomPassword = Math.random().toString(36).slice(-10);
  //   setPassword(randomPassword);
  // };

  const generatePassword = () => {
    if(length > 3 && length < 21) {
    const randomPassword = generateRandomPassword(length);
    setPassword(randomPassword);
    } else {
      toast("Password should be minimum 4 and maximum 20 characters");
    }
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      toast("Password copied to clipboard");
    }
  };

  const savePassword = () => {
    if (password && website && isValidUrl(website)) {
      console.log("Website:", website, "Password:", password);
      addPassword(website, password);
      toast("Password saved successfully!");
    } else {
      toast("Enter valid Website and/or Password");
    }
  };

  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            background: "#1e40af",
            color: "#cffafe",
          },
        }}
      />
      <div>
        <h1 className="text-4xl text-center font-medium">Password Generator</h1>
        <input
          className="w-40 px-4 py-5 rounded-md border-2 border-teal-700"
          placeholder="Length:"
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <button
          onClick={generatePassword}
          className="bg-teal-900 text-teal-200 px-4 py-5 rounded-lg hover:bg-teal-700 drop-shadow-lg inline-flex items-center ml-4"
        >
          Generate Password
          <span className="ml-4">
            <FiRefreshCw size={28} />
          </span>
        </button>
        <div className="block flex items-center mt-4">
          <input
            className="w-3/4 rounded-md border-2 border-teal-700 px-3.5 py-4 text-lg text-teal-950"
            readOnly
            value={password}
            placeholder="Password:"
          />
          <button className="ml-4" title="copy-button" onClick={copyPassword}>
            <AiOutlineCopy size={40} className="text-teal-600" />
          </button>
        </div>
      </div>
      <div className="block flex items-center mt-4">
        <input
          className="w-3/4 rounded-md border-2 border-teal-700 px-3.5 py-4 text-lg text-teal-950"
          placeholder="Website:"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
        <button className="ml-4" title="save-button" onClick={savePassword}>
          <AiOutlineSave size={40} className="text-teal-600" />
        </button>
      </div>
      <TableComponent />
    </div>
  );
};

export default MainPage;
