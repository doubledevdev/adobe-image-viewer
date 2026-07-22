

import Connect from "@/components/Connect";
import { theme } from "@/components/theme";
import LoginForm from "@/components/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ box?: string }>;
}) {
  const { box } = await searchParams;
  const selectedOption = theme.find((option) => option.text === box) ?? theme[0];





  return (
    <div className="flex min-h-full flex-col mt-12 bg-white sm:mt-10">
      <Connect initialBox={box} />

      <main className="flex flex-1 items-center justify-center bg-white px-4">

        <LoginForm selectedOption={selectedOption} />
      </main>
    </div>
  );
}
