import { UserProvider } from "./context";
import { RoutesMain } from "./routes";

function App() {
  return (
    <UserProvider>
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
