import colorNames from 'colornames';

const Toggle = ({ color, setColor, setHexValue, isDark, setIsDark }) => {
  return (
    <form className="result" onSubmit={(e) => e.preventDefault()}>
      <label>Add color</label>
      <input
        autoFocus
        id="toggle"
        type="text"
        placeholder="Enter color"
        value={color}
        onChange={(e) => {
          const newColor = e.target.value;
          setColor(newColor);
          setHexValue(colorNames(newColor));
        }}
      />
      <button type="button" onClick={() => setIsDark(!isDark)}>
        ToggleTextColor
      </button>
    </form>
  );
};

export default Toggle;
