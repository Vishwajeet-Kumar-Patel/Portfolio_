import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('distributed-job-scheduler')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function DistributedJobSchedulerPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
