import DocumentLayout from "@/features/legal/components/DocumentLayout";
import { privacyPolicyText } from "@/features/legal/data/privacy-text";

export default function PrivacyPolicyPage() {
  return (
    <DocumentLayout 
      title={privacyPolicyText.title} 
      lastUpdated={privacyPolicyText.lastUpdated}
    >
      {privacyPolicyText.sections.map((section) => (
        <div key={section.title} className="mb-12">
          <h2 className="text-xl text-title mb-4">{section.title}</h2>
          <p className="text-body leading-relaxed">{section.content}</p>
        </div>
      ))}
    </DocumentLayout>
  );
}
