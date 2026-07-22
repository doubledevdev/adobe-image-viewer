import Link from "next/link";

export default function ViewImagePage() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-[#f4f5f7] px-4 dark:bg-[#1c1e26]">
      <div className="w-full max-w-[480px] rounded-xl bg-white p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:bg-[#262936] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <div className="mb-6 flex justify-center">
          <div className="flex h-[110px] w-[140px] items-center justify-center rounded-lg border-3 border-dashed border-[#c6cbd4] dark:border-[#444a58]">
            <svg
              viewBox="0 0 24 24"
              className="h-14 w-14 stroke-[#e63946] stroke-[1.5] fill-none"
            >
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <path d="M21 15l-5-5-4 4-3-3-6 6"></path>
            </svg>
          </div>
        </div>

        <h1 className="mb-3 text-[1.4rem] font-semibold text-[#1f2430] dark:text-[#e6e6e6]">
          Image failed to load
        </h1>
        <p className="mb-6 text-[0.95rem] leading-relaxed text-[#5b6070] dark:text-[#a6abbb]">
          The image you&apos;re trying to view couldn&apos;t be displayed. It may have
          been moved, deleted, or the file could be corrupted. 
        </p>
        <p>Please tell the sender to resend image.</p>

        {/* <Link
          href="/"
          className="block w-full rounded-md bg-[#0072C6] py-3 text-lg font-bold text-white transition-colors hover:bg-[#0b65a5]"
        >
          Go
        </Link> */}
      </div>
    </div>
  );
}
