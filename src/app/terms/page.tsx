import DocumentLayout from "@/features/legal/components/DocumentLayout";
import { termsAndConditionsText } from "@/features/legal/data/terms-text";

export default function TermsPage() {
  return (
    <DocumentLayout 
      title={termsAndConditionsText.title} 
      lastUpdated={termsAndConditionsText.lastUpdated}
    >
      {termsAndConditionsText.sections.map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-xl text-title mb-4">{section.title}</h2>
          <p className="text-body leading-relaxed">{section.content}</p>
        </div>
      ))}
    </DocumentLayout>
  );
}
