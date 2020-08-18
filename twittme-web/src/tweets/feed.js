import React, { useEffect, useState } from "react";

import { apiTweetFeed } from "./lookup";

import { Tweet } from "./detail";

export function FeedList(props) {
  const [tweetsInit, setTweetsInit] = useState([]);
  const [tweets, setTweets] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const [tweetsDidSet, setTweetsDidSet] = useState(false);

  useEffect(() => {
    const final = [...props.newTweets].concat(tweetsInit); //[...content] means a new list with the content
    if (final.length !== tweets.length) {
      setTweets(final);
    }
  }, [props.newTweets, tweets, tweetsInit]);

  useEffect(() => {
    if (tweetsDidSet === false) {
      const handleTweetListLookup = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          setTweetsInit(response.results);
          setTweetsDidSet(true);
        } else {
          alert("There was an error");
        }
      };
      apiTweetFeed(handleTweetListLookup);
    }
  }, [tweetsInit, tweetsDidSet, setTweetsDidSet, props.username]);

  const handleDidRetweet = (newTweet) => {
    const updateTweetsInit = [...tweetsInit]; //grabbing tweetsInit list
    updateTweetsInit.unshift(newTweet); //add newTweet to the beginning of updateTweetsInit
    setTweetsInit(updateTweetsInit); //update status
    const updateFinalTweets = [...tweets]; //grabbing tweets list
    updateFinalTweets.unshift(tweets); //add tweets to the beginning of updateFinalTweets
    setTweets(updateFinalTweets); //update status
  };

  const handleLoadNext = (event) => {
    event.preventDefault();
    if (nextUrl !== null) {
      const handleLoadNextResponse = (response, status) => {
        if (status === 200) {
          setNextUrl(response.next);
          const newTweets = [...tweets].concat(response.results);
          setTweetsInit(newTweets);
          setTweets(newTweets);
        } else {
          alert("There was an error");
        }
      };
      apiTweetFeed(handleLoadNextResponse, nextUrl);
    }
  };

  return (
    <React.Fragment>
      {tweets.map((item, index) => {
        return (
          <Tweet
            tweet={item}
            didRetweet={handleDidRetweet}
            className="my-5 py-5 border bg-white text-dark"
            key={`${index}-{item.id}`}
          />
        );
      })}
      {nextUrl !== null && (
        <button onClick={handleLoadNext} className="btn btn-outline-primary">
          Load next
        </button>
      )}
    </React.Fragment>
  );
}
