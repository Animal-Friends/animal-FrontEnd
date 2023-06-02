import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/*엄격한 모드를 사용하여 앱을 감싸줍니다.*/}
    {/* redux store를 적용시키기 위해 App을 Provider로 감싸고 persistor를 사용하여 데이터를 유지합니다. */}
    <Provider store={store}>
      {/*// Redux store를 앱에 제공하기 위해 Provider 컴포넌트로 App을 감싸줍니다.*/}
      <PersistGate persistor={persistor}>
        {/*// 데이터의 지속성을 관리하기 위해 PersistGate 컴포넌트를 사용합니다.*/}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals(); // 앱의 성능을 측정하기 위해 reportWebVitals 함수를 호출합니다.
