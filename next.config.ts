import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/NicTech", // Cambia "NOMBRE_DEL_REPOSITORIO" por el nombre exacto de tu repo en GitHub
};

export default nextConfig;
