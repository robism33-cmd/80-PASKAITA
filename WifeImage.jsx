import { useEffect, useState } from "react";

function WifeImage() {
  const [wifeUrl, setWifeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showImage, setShowImage] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  async function fetchWifeImage() {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://randomuser.me/api/?gender=female");
      const data = await response.json();

      // API struktūra:
      // data.results[0].picture.large
      setWifeUrl(data.results[0].picture.large);

      setLoadCount((prev) => prev + 1);
    } catch (err) {
      setError("Nepavyko užkrauti nuotraukos");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchWifeImage();
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
      <h1>Random Wife Generator 👩</h1>

      {isLoading && <p>Kraunasi...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && showImage && (
        <img
          src={wifeUrl}
          alt="Random woman"
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
        <button onClick={fetchWifeImage} style={{ marginRight: "10px" }}>
          New Wife
        </button>

        <button onClick={() => setShowImage((prev) => !prev)}>
          {showImage ? "Hide Image" : "Show Image"}
        </button>
      </div>
    </div>
  );
}

export default WifeImage;
