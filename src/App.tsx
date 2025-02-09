import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemChack from "./components/ItemCheck";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-black">
        <h1 className="text-white text-2xl text-center p-4">
          Check List for QA
        </h1>
        {/*main container*/}
        <div className="grid grid-cols-12 text-white font-bold">
          <div className="bg-red-200 text-black border-1 border-red-300 p-3 col-span-1">
            Order
          </div>
          <div className="bg-red-200 text-black border-1 border-red-300 p-3 col-span-4">
            Step
          </div>
          <div className="bg-red-200 text-black border-1 border-red-300 p-3 col-span-5">
            Step
          </div>
          <div className="bg-red-200 text-black border-1 border-red-300 p-3 col-span-2">
            Step
          </div>
        </div>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
        <ItemChack
          order={1}
          toCheck={"ARIA Labels in tags"}
          comment={"Any comment?"}
        ></ItemChack>
      </div>
    </>
  );
}

export default App;
