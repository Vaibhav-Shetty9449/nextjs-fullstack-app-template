import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css } from '@emotion/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';

// 1. Import your global styles
import '../src/app/globals.css'; // Next.js global CSS
import './storybook.css'; // Optional Storybook-specific styles

// 2. Optional font imports (better loaded in preview-head.html)
const fontStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
`;

// 3. Global styles component
const GlobalStyles = () => (
  <>
    <Global styles={fontStyles} />
    <Global
      styles={css`
        /* CSS Reset */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Base styles */
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          line-height: 1.5;
        }
        
        /* Storybook-specific adjustments */
        .sb-show-main {
          padding: 2rem !important;
          background: #f8f8f8;
        }
      `}
    />
  </>
);

// 4. Main configuration
const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
    (Story) => (
      <div style={{ margin: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  
  parameters: {
    // Layout configuration
    layout: 'centered',
    
    // Actions and controls
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
    // Viewport settings
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
    
    // Backgrounds
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e1e1e' },
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
    
    // Docs panel
    docs: {
      theme: themes.light,
      toc: {
        headingSelector: 'h2, h3',
        title: 'Table of Contents',
      },
    },
    
    // Next.js specific
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
        query: {},
      },
    },
    
    // Performance
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Docs', 
          ['Introduction', 'Installation'],
          'Components',
          'Pages',
          '*',
          'Internal',
        ],
      },
    },
  },
};

export default preview;