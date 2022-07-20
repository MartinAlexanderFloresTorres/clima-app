import "../styles/Spinner.css"

const Spinner = () => {
  return (
    <div className="loading">
      <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
    </div>
  );
};

export default Spinner;
