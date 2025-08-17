export default function Success() {
  return (
    <section className="flex flex-col gap-8 font-roboto p-6 pt-42 min-h-screen">
      <img className="w-16 h-auto" src="/icon-success.svg" alt="Success icon" />

      <h1 className="text-4xl text-custom-Blue-800 font-bold">
        Thanks for subscribing!
      </h1>

      <p className="">
        A confirmation email has been sent to{" "}
        <span className="">ash@loremcompany.com</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>

      <button className=" bg-custom-Blue-800 text-white p-4 rounded-lg font-medium mt-20">
        Dismiss message
      </button>
    </section>
  );
}
