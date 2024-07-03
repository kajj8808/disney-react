import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      /*  const charcters = await getDisneyCharacters(0, 2);
      charcters.forEach(async (charcter) => {
        const details = await getDisneyCharacterDetail(charcter.id);
        console.log(details);
      }); */
    })();
  }, []);
  return (
    <div className="">
      <h1 className="bg-red-300">hello</h1>
    </div>
  );
}

export default App;
