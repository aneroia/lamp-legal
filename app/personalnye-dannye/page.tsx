import TemplatePage from '@/components/TemplatePage';
import {getPage} from '@/lib/site-content';
const page=getPage('personalnye-dannye');
export const metadata={title:page.title,description:page.description};
export default function Page(){return <TemplatePage name="personalnye-dannye"/>;}
