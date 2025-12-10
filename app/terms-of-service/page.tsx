import { readFile } from "fs/promises";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { join } from "path";

async function getTermsOfServiceContent() {
  const filePath = join(
    process.cwd(),
    "app",
    "content",
    "terms-of-service.mdx"
  );
  const source = await readFile(filePath, "utf-8");
  return source;
}

export default async function TermsOfServicePage() {
  const source = await getTermsOfServiceContent();

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="max-w-4xl mx-auto p-5 pt-10 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to App
        </Link>
        <article className="prose prose-lg max-w-none">
          <MDXRemote source={source} />
        </article>
      </main>
    </div>
  );
}
