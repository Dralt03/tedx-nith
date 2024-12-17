import SigninForm from "./signin-form";
export interface AuthSearchParams {
  searchParams?: Promise<{
    redirectURL?: string;
  }>;
}

export default async function SigninPage({ searchParams }: AuthSearchParams) {
  return (
    <main className="min-h-screen flex justify-center items-center w-full">
      <div className="w-full max-w-sm p-3">
        <SigninForm redirectURL={(await searchParams)?.redirectURL} />
      </div>
    </main>
  );
}
