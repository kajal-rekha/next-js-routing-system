import { useRouter } from "next/router";

const Documention = () => {
  const {
    query: { all = [] },
  } = useRouter();

  if (all.length === 4) {
    return (
      <p>
        Documenction for topic: {all[0]} - lession: {all[1]} - example: {all[2]}{" "}
        - line {all[3]}
      </p>
    );
  }
  if (all.length === 3) {
    return (
      <p>
        Documenction for topic: {all[0]} - lession: {all[1]} - example: {all[2]}{" "}
      </p>
    );
  }
  if (all.length === 2) {
    return (
      <p>
        Documenction for topic: {all[0]} - lession: {all[1]}
      </p>
    );
  }
  if (all.length === 1) {
    return <p>Documenction for topic: {all[0]}</p>;
  }
  return <div>Documention</div>;
};

export default Documention;
