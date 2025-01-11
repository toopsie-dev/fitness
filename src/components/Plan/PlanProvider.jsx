import PlanContext from "../../context/PlanContext";

const PlanProvider = ({ children }) => {
  const plans = [
    {
      level: "stater plan",
      price: 40,
      coverages: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
    {
      level: "standard plan",
      price: 100,
      coverages: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
    {
      level: "premium plan",
      price: 140,
      coverages: [
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    },
  ];

  return (
    <PlanContext.Provider value={{ plans }}>{children}</PlanContext.Provider>
  );
};

export default PlanProvider;
