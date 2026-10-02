import { LegalPage, legalMetadata } from '@/components/legal/legal-page';
import { privacyPolicy } from '@/lib/legal/privacy-policy';

export const metadata = legalMetadata(privacyPolicy);

export default function PrivacyPolicyPage() {
	return <LegalPage doc={privacyPolicy} />;
}
