import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('eduintel-ai-career-platform')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function EduIntelCaseStudyPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
