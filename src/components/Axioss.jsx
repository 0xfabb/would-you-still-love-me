import axios from "axios";
import { useState } from "react";


const Axioss = () => {
  const [content, setContent] = useState();
  const [prompt, setPrompt] = useState("");
  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const gemini = () =>
    axios
      .post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAW8hVpKdWdcw4XmSxPN5MlU6NqP0mks4M",
        {
          contents: [
            {
              parts: [{ text: `${prompt}` }],
            },
          ],
        }
      )
      .then(function (response) {
        console.log(response);
        setPrompt("");
        setContent(response.data.candidates[0].content.parts[0].text);
      });

  return (
    <>
    <div className="bg-gradient-to-r from-pink-600 h-screen to-purple-700 mt-0 text-center">

    <div className="promptin bg-white shadow-lg rounded-xl w-96 h-56 response fixed left-1/2 top-1/8 translate-x-[-50%] ">
    <h1 className="text-xl text-black font-bold mt-4">Enter your prompt</h1>
    <div className="flex flex-col items-center justify-center mt-6 gap-4">
    <input
        type="text"
        onChange={handleChange}
        value={prompt}
        placeholder="Enter your prompt"
        className="border-black border-2 w-3/4 p-2 rounded-full"
      />
      <button
        onClick={gemini}
        className="w-1/2 bg-pink-500 hover:bg-pink-700  text-white font-bold py-3 px-4 rounded-full mt-4 transition-all cursor-pointer "
      >
        Generate Content
      </button>
    </div>
    </div>
    <div className="response fixed left-1/2 top-1/2 translate-x-[-50%] w-1/2 h-1/3 text-center bg-white rounded-xl mt-10 shadow-lg">
      <h1 className="mt-14 text-xl font-medium m-6 text-center">{content}</h1>

    </div>
      </div>
    </>
  );
};

export default Axioss;
