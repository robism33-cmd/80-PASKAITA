import { useEffect, useState } from "react";

function CatImage() {
  const [catUrl, setCatUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  function fetchCatImage() {
    setIsLoading(true);
    setError("");

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setCatUrl(data[0].url);
        setLoadCount((prev) => prev + 1);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Nepavyko užkrauti katės nuotraukos");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Random Cat Generator 🐱</h1>

      {isLoading && <p>Kraunasi katė...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && showImage && (
        <img
          src={catUrl}
          alt="Atsitiktinė katė"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
      )}

      <p>Nuotraukų užkrauta: {loadCount}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={fetchCatImage} style={{ marginRight: "10px" }}>
          New Cat
        </button>

        <button onClick={() => setShowImage((prev) => !prev)}>
          {showImage ? "Hide Image" : "Show Image"}
        </button>
      </div>
    </div>
  );
}

export default CatImage;
