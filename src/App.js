import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SedondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SedondaryButton>検索</SedondaryButton>
    </div>
  );
}
