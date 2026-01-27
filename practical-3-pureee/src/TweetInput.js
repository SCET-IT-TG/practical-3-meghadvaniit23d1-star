import { useState } from "react";

function TweetInput() {
  const [tweet, setTweet] = useState("");
  const maxLength = 50;

  const isTooLong = tweet.length > maxLength;
  const isDisabled = tweet.length === 0 || isTooLong;

  return (
    <div>
      <textarea
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />

      <p style={{ color: isTooLong ? "red" : "black" }}>
        {tweet.length}/{maxLength}
      </p>

      <button disabled={isDisabled}>Tweet</button>
    </div>
  );
}

export default TweetInput;
