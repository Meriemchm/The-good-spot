import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Your existing Next.js config
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);