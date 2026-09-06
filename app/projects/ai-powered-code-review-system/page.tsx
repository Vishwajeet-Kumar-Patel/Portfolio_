import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('ai-powered-code-review-system')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function AICodeReviewSystemPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
