export default function Form() {
  return (
    <section className="min-h-screen">
      <img
        className=""
        src="/illustration-sign-up-mobile.svg"
        alt="Sign up fom image"
      />

      <div className="flex flex-col gap-4 px-4 py-6">
        <h1 className="text-4xl text-custom-Blue-800 font-bold">
          Stay updated!
        </h1>
        <p className="">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-4 items-start">
            <img src="/icon-list.svg" alt="Check mark icon" />
            Product discovery and building what matters
          </li>
          <li className="flex gap-4 items-start">
            <img src="/icon-list.svg" alt="Check mark icon" />
            Measuring to ensure updates are a success
          </li>
          <li className="flex gap-4 items-start">
            <img src="/icon-list.svg" alt="Check mark icon" />
            And much more!
          </li>
        </ul>
        <form className="flex flex-col">
          <label className="text-xs text-custom-Blue-800 font-bold mb-2">
            Email address
          </label>
          <input
            className="border border-custom-Grey p-4 rounded"
            type="email"
            placeholder="email@company.com"
          />
          <button className="bg-custom-Blue-800 text-white p-4 rounded-lg font-medium mt-4">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
