import React , {useEffect, useState} from "react";

import Fact from "./Fact";

const Facts = ({facts}) => {
  const [randomFact, setRandomFact] = useState(null)

  useEffect(() => {
    setRandomFact(facts[Math.floor(Math.random() * facts.length)])

  })

  if (!randomFact) {
    return <div style={{height: "8rem"}} />
  }

  return <Fact fact={randomFact} />
}

export default Facts