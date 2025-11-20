import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import LoadingMontage from "./Components/LoadingMontage"; // <-- make sure this path matches your project

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // show loading page for exactly 7 seconds
    const timer = setTimeout(() => setIsLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingMontage />;
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
