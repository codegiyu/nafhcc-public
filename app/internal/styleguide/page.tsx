import { StyleguideView } from '@/components/styleguide/styleguide-view';
import { createStyleguideMetadata } from '@/lib/styleguide/metadata';

export const metadata = createStyleguideMetadata();

export default function StyleguidePage() {
  return <StyleguideView />;
}
