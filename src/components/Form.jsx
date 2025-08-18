import { useNavigate } from "react-router";
import { useState } from "react";

export default function Form() {
  const [isValid, setIsValid] = useState(true);
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsValid(false);
      return;
    }

    navigate(`/success?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:grid md:grid-cols-[50%_50%] max-w-4xl  md:grid-rows-1 ">
        <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:p-4 ">
          <picture className="">
            <source
              media="(min-width: 1024px)"
              srcSet="/illustration-sign-up-desktop.svg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/illustration-sign-up-tablet.svg"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/illustration-sign-up-mobile.svg"
            />
            <img
              className="w-full h-full object-cover md:rounded-2xl bg-white"
              src="/illustration-sign-up-mobile.svg"
              alt="Sign up form image"
              width="375"
            />
          </picture>
        </div>

        <div className="flex flex-col gap-4 p-8 md:col-start-1 col-end-2 md:row-start-1 md:row-end-2 md:py-20">
          <h1 className="text-4xl text-custom-Blue-800 font-bold">
            Stay updated!
          </h1>
          <p className="text-gray-600">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex gap-4 items-start">
              <img
                src="/icon-list.svg"
                alt="Check mark icon"
                className="w-5 h-5 mt-1"
              />
              Product discovery and building what matters
            </li>
            <li className="flex gap-4 items-start">
              <img
                src="/icon-list.svg"
                alt="Check mark icon"
                className="w-5 h-5 mt-1"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="flex gap-4 items-start">
              <img
                src="/icon-list.svg"
                alt="Check mark icon"
                className="w-5 h-5 mt-1"
              />
              And much more!
            </li>
          </ul>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4"
            noValidate
          >
            <label className="text-xs text-custom-Blue-800 font-bold flex justify-between">
              <p>Email address</p>
              <p
                className={`text-custom-Red ${isValid ? "hidden" : "visible"}`}
                aria-live="polite"
              >
                Valid email required
              </p>
            </label>

            <input
              className={`border border-custom-Grey p-4 rounded-lg ${
                isValid
                  ? ""
                  : "bg-custom-Red/25 border-custom-Red placeholder:text-custom-Red"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="email@company.com"
            />
            <button className="bg-custom-Blue-800 text-white p-4 rounded-lg font-medium  hover:bg-gradient-to-r from-red-400 to-orange-600 cursor-pointer">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
