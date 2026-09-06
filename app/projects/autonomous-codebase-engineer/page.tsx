import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('autonomous-codebase-engineer')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function AutonomousCodebaseEngineerPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
