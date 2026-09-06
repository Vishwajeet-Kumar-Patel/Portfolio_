import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('real-time-multiplayer-backend')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function RealTimeMultiplayerBackendPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
