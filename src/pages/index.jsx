import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Semua kode terkait document atau window harus ada di sini
    const title = document.title;
    console.log("Document title is:", title);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Bang Bang Analysis</h1>
      <p>This is your landing page for Mobile Legends analysis!</p>
    </div>
  );
}
