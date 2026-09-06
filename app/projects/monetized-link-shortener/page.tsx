import CaseStudyPage, { caseStudyMetadata } from '@/components/CaseStudyPage';
import { getCaseStudy } from '@/lib/case-studies';

const caseStudy = getCaseStudy('monetized-link-shortener')!;
export const metadata = caseStudyMetadata(caseStudy);
export default function MonetizedLinkShortenerPage() { return <CaseStudyPage caseStudy={caseStudy} />; }
