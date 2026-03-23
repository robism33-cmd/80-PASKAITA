import { useEffect, useState } from "react";

function DogImage() {
  const Api = "https://dog.ceo/api/breeds/image/random";
  const [dogUrl, setDogUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  function fetchDogImage() {
    setIsLoading(true);
    setError("");

    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setDogUrl(data.message);
        setLoadCount((prev) => prev + 1);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Nepavyko užkrauti šuns  nuotraukos");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDogImage();
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
      <h1>Random Dog Generator 🐶</h1>

      {isLoading && <p>Kraunasi šuo...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && showImage && (
        <img
          src={dogUrl}
          alt="Atsitiktinis šuo"
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
        <button onClick={fetchDogImage} style={{ marginRight: "10px" }}>
          New Dog
        </button>

        <button onClick={() => setShowImage((prev) => !prev)}>
          {showImage ? "Hide Image" : "Show Image"}
        </button>
      </div>
    </div>
  );
}

export default DogImage;
