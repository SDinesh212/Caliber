import PageSection from "@/components/ui/PageSection";
import RequestQuoteForm from "./RequestQuoteForm";
import RequestQuoteSidebar from "./RequestQuoteSidebar";

export default function RequestQuotePanel() {
  return (
    <PageSection className="pt-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <RequestQuoteForm />
        <RequestQuoteSidebar />
      </div>
    </PageSection>
  );
}
