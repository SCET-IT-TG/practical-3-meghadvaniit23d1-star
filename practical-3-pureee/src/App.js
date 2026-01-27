import Counter from "./Counter";
import TweetInput from "./TweetInput";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div className="app">
      <h2>A. Counter Component</h2>
      <Counter />

      <h2>B. Tweet Input Component</h2>
      <TweetInput />

      <h2>C. Theme Switcher Component</h2>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
