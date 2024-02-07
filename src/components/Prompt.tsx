import { useEffect, useState } from "react";
import Loading from "./Loading";

const nasloviList = [
  "Will you be my pookie wookie Valentine? c:",
  "Molim-",
  "Krivi odgovor.",
  "I'll be sad:(",
  "pookie...",
  "you don't want me to become alpha wolf...",
  "okay...",
  "i didn't wanna do this...",
  "oopsie c:",
  "YAY!",
];

export default function prompt() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const [ifNo, setIfNo] = useState(0);
  const [naslovState, setNaslovState] = useState("");
  const [gumbTekst, setGumbTekst] = useState("No");
  const handleClick1 = () => {
    setIfNo(ifNo + 1);
  };
  const handleClick2 = () => {
    setIfNo(9);
  };
  useEffect(() => {
    let naslovCount = ifNo;
    let noviNaslov = nasloviList[naslovCount];
    setNaslovState(noviNaslov);
    if (naslovCount >= 8) {
      setGumbTekst("Yes!");
    }
  });

  return (
    <div className="prompt">
      {isLoading && <Loading />}
      <h1>{naslovState}</h1>
      <div className="buttons">
        <button
          className={`button button-yes ${ifNo >= 9 ? "hidden" : ""}`}
          onClick={handleClick2}
        >
          Yes!
        </button>
        <button
          className={`button ${ifNo >= 9 ? "hidden" : ""} ${
            gumbTekst === "No" ? "button-no" : "button-yes"
          }`}
          onClick={handleClick1}
        >
          {gumbTekst}
        </button>
      </div>
    </div>
  );
}
