import Head from "next/head";
import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./index.module.css";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();
  const [placeResult, setPlaceResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/textsearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: textInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setTextInput("");
  }

  async function onResultClick(event) {
    const response = await fetch("/api/onclick", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: textInput, place: result }),
    });
    const placeresult = await response.json();
    setPlaceResult(placeresult.result);
    setTextInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="country"
            placeholder="Enter an country"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div>
          <Button onClick={onResultClick}>Answer: {result}</Button>
        </div>
      </main>
    </div>
  );
}
