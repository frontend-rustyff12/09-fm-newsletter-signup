import { useNavigate, useSearchParams } from "react-router";
export default function Success() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "example@example.com";

  const handleDismiss = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col gap-8 font-roboto p-6 pt-42 min-h-screen md:min-h-min bg-white md:h-1/3 md:w-1/3 md:gap-4 md:p-12 md:rounded-2xl">
      <img className="w-16 h-auto" src="/icon-success.svg" alt="Success icon" />

      <h1 className="text-4xl text-custom-Blue-800 font-bold">
        Thanks for subscribing!
      </h1>

      <p className="">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <button
        onClick={handleDismiss}
        className=" bg-custom-Blue-800 text-white p-4 rounded-lg font-medium  hover:bg-gradient-to-r from-red-400 to-orange-600 cursor-pointer"
      >
        Dismiss message
      </button>
    </section>
  );
}
