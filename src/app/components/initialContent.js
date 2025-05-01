"use client";

import { useRouter } from "next/navigation";
function InitialContent() {
  const router = useRouter();

  return (
    <button
      style={{
        backgroundColor: "#1976d2",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={() => router.push("/last")}
    >
      Inicia tu viaje en Fireploy
    </button>
  );
}

export default InitialContent;
