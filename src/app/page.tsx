import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Hello Softsmartz 👋</h1>
      <p className="text-lg text-center max-w-md">
        Welcome to your Next.js project. Start building something amazing!
      </p>
    </div>
  );
}
