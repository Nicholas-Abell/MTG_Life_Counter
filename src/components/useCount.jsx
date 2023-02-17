import { useState } from "react";

const useCount = (initialVal = 0) => {

  const [lifeP, setLife] = useState(initialVal);

  const addLife = () => {
    setLife((life) => life + 10);
  }

  const loseLife = () => {
    setLife((life) => life - 10);
  }

  const resetL = () => {
    setLife(40);
  }

  return { lifeP, addLife, loseLife, resetL };
}

export default useCount;