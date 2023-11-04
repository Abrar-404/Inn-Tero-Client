import './Button.css';

const Button = ({ children }) => {
  return (
    <div className="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
};

export default Button;
