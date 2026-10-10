import { NewsletterForm } from "./NewsletterForm";

export function MidArticleSignup() {
  return (
    <div className="not-prose my-10 rounded-xl border border-white/10 bg-gray-900 p-6" data-placement="mid-article-newsletter">
      <p className="mb-1 text-lg font-bold text-white">Get one honest AI tool review a week</p>
      <p className="mb-4 text-sm text-gray-400">
        Pricing changes, real limitations and the tools worth paying for. No spam, unsubscribe anytime.
      </p>
      <NewsletterForm variant="inline" />
    </div>
  );
}
