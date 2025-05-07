import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const Netflixseries = () => {
  const name = "Harry Potter";
  const rating = 8.2;
  const summary = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, remaining essentially 
    unchanged. It was popularised in the 1960s with the release.`;
  let age = 19;
  // let canWatch = " Not Available";
  // if(age >= 18) canWatch = "Watch Now";
  const canWatch = () => {
    if (age >= 18) return "watch Now";
    return "Not Available";
  };
  const returnGenere = () => {
    const genere = "Action & Adventure";
    return genere;
  };
  //  if(age < 18)
  //  {
  //   return (
  //     <div>
  //       <div>
  //         <img
  //           src="harry-potter-all-characters-lvbwsigjt3yykg3n.webp"
  //           alt="Harry Potter Characters"
  //           width="40%"
  //           height="40%"
  //         />
  //       </div>
  //       <h2>Name: {name}</h2>
  //       <h3>Rating: { 5 +3.2 }</h3>
  //       <p>Summary: {summary}</p>
  //       <p>Genere:{returnGenere()}</p>
  //       <button>Not Available</button>
  //     </div>
  //   );
  //  }
  // 1. this  repeated conditional operator
  // 2. conditional operaory But this volates DRY (Do not repeat yourself)
  // 3. sometimes you might have very complex if conditions for that there are some solutions
  // 4. solution can be better as it prevents cluttering of variable outside and
  //encapsulates such logic inside a function
  // one another benefit is also that you can pass some dynamic values as function parameter
  //  pass the variable,expressions and function as dynamic
  return <ul class ="grid grid-three-cols">{seriesData.map((curElem) => (
    <SeriesCard key ={curElem.id} data ={curElem} />
  ))}</ul>;
};

export default Netflixseries;

//   export const Header = () =>
//     {
//         return <h1>List of Best Netflix Series</h1>;
//     }
// export const Footer = () =>
// {
//     return "copyrights@sjstechnical"
// }
