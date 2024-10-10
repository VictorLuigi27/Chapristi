import useAPICall from "./hooks/useAPICall";
import spinner from "/src/assets/spinner.svg";

export default function Container() {
  const { catData, error, loading } = useAPICall();
  
  let content;
  if (loading && !error) {
    content = <img src={spinner} alt="icône de chargement" className="spinner" />;
  } else if (error) {
    content = <p className="error">Une erreur est survenue...</p>;
  } else if (catData) {
    content = <img src={catData[0].url} alt="photo d'un chat" className="cat-image" />;
  }

  return (
    <div className="container">
      <h1>Photo de chats 🐾</h1>
      {content}
    </div>
  );
}
