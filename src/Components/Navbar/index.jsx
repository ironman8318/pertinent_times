import "./styles.css";

const navbar = ({ clickHandler }) => {
  const arr = [
    "Home",
    "World",
    "Magazine",
    "Technology",
    "Science",
    "Health",
    "Sports",
    "Arts",
    "Fashion",
    "Food",
    "Travel",
    "Politics",
  ];

  return (
    <header className="navbar">
      <ul>
        {arr.map((value, index) => {
          return (
            <li key={value} onClick={clickHandler.bind(null, value)}>
              {value}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default navbar;
