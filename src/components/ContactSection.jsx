
function ContactSection() {
  return (
    <section className="pb-28 scroll-m-24" id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full ">
        <div>
          <div className="space-y-3">
            <div className="inline-block rounded-lg border bg-black text-white px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="bg-clip-text text-transparent dark:text-white text-3xl font-bold font-saira tracking-tighter bg sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[650px] font-DMSans text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.linkedin.com/in/vinayak-madivalar/"
              >
                with a direct question on linkedin
              </a>{" "}
              and I&apos;ll reply as soon as I can.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactSection;