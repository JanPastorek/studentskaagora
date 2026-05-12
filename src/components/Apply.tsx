import { loadContent, type ApplyData } from "@/lib/content";
import { Markdown } from "./Markdown";

export function Apply() {
  const { data, body } = loadContent<ApplyData>("apply");
  return (
    <section id="prihlasit-sa" className="bg-[#f4f4f4] py-20 px-6 md:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] mb-10">
          {data.heading}
        </h2>
        <Markdown className="space-y-6 text-[16px] leading-relaxed">{body}</Markdown>
        <p className="mt-6 text-[16px]">
          <a
            href={`mailto:${data.email}`}
            className="underline hover:text-agora-orange"
          >
            {data.email}
          </a>
        </p>
      </div>

      <div className="mt-16 max-w-[760px] mx-auto bg-agora-green p-6 md:p-10 rounded-sm">
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <div className="h-2 bg-[#673AB7]" />
          <div className="px-8 pt-8 pb-6 border-b border-gray-200">
            <h3 className="text-[28px] leading-tight text-gray-800">
              Študentská Agora 2025/2026
            </h3>
            <p className="mt-4 text-sm text-red-600">* Indicates required question</p>
          </div>
          <form className="px-8 py-6 space-y-8">
            <Field label="Meno a priezvisko:" required />
            <Field label="Mesto, v ktorom žiješ počas akademického roka:" required />
            <RadioField
              label="Si aktuálne študent alebo pracuješ?"
              required
              options={[
                "Študent VŠ (bakalár)",
                "Študent VŠ (magister)",
                "Doktorand",
                "Mladý pracujúci",
              ]}
            />
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                className="px-6 py-2 text-[#673AB7] border border-[#673AB7] rounded-sm text-sm font-medium hover:bg-[#673AB7]/5"
              >
                Next
              </button>
              <button
                type="button"
                className="text-[#673AB7] text-sm font-medium hover:underline"
              >
                Clear form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block text-left">
      <span className="text-[15px] text-gray-800">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      <input
        type="text"
        placeholder="Your answer"
        className="mt-2 block w-full border-b border-gray-300 focus:border-[#673AB7] outline-none py-2 text-[15px]"
      />
    </label>
  );
}

function RadioField({
  label,
  options,
  required,
}: {
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="text-left">
      <legend className="text-[15px] text-gray-800">
        {label} {required && <span className="text-red-600">*</span>}
      </legend>
      <div className="mt-3 space-y-3">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-3 text-[15px] text-gray-800">
            <span className="inline-block w-5 h-5 rounded-full border-2 border-gray-400" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
