import { UserProvider, ModalProvider } from "./context";
import { RoutesMain } from "./routes";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <RoutesMain />
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
