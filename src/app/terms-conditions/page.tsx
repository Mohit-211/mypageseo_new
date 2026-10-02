import { LegalPage, legalMetadata } from '@/components/legal/legal-page';
import { termsConditions } from '@/lib/legal/terms-conditions';

export const metadata = legalMetadata(termsConditions);

export default function TermsConditionsPage() {
	return <LegalPage doc={termsConditions} />;
}
