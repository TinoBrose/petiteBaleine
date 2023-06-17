import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Grande() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Grand Baleine</h1>
    </main>
  );
}
