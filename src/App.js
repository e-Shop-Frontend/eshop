import "./App.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./Routes/Routes";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='mx-auto max-w-[2000px] relative'>
          <AppRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
